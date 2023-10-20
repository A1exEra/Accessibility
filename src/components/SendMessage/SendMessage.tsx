import styled from 'styled-components';
import Button from '../UI/Button';
import { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import RadioButtons from './RadioButtons';
const validationPatterns = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  name: /^[A-Za-z]+$/,
  phone: /^[0-9]{10}$/,
};
const radioOptions = [
  { value: 'developer', title: 'UI Developer' },
  { value: 'designer', title: 'UI/UX Designer' },
  { value: 'accessibility', title: 'Accessibility Expert' },
  { value: 'qa', title: 'QA Engineer' },
  { value: 'other', title: 'Other' },
];
interface CheckboxState {
  terms1: boolean;
  terms2: boolean;
}
const SendMessage = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [radio, setRadio] = useState('');
  const [message, setMessage] = useState('');
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    terms1: false,
    terms2: false,
  });
  ///////////////////////////////////////////////////
  const {
    value: nameInput,
    valueIsValid: isNameInputValid,
    hasError: nameInputError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value: string) => validationPatterns.name.test(value));
  const {
    value: lastNameInput,
    valueIsValid: isLastNameInputValid,
    hasError: lastNameInputError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value: string) => validationPatterns.name.test(value));
  const {
    value: emailInput,
    valueIsValid: isEmailInputValid,
    hasError: emailInputError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value: string) => validationPatterns.email.test(value));
  const {
    value: phoneInput,
    valueIsValid: isPhoneInputValid,
    hasError: phoneInputError,
    valueChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: phoneInputReset,
  } = useInput((value: string) => validationPatterns.phone.test(value));
  useEffect(() => {
    if (
      isNameInputValid &&
      isLastNameInputValid &&
      isEmailInputValid &&
      isPhoneInputValid
    ) {
      setIsFormValid(true);
    }
  }, [
    isEmailInputValid,
    isLastNameInputValid,
    isNameInputValid,
    isPhoneInputValid,
  ]);
  const setMessageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handleCheckboxChange = (checkboxName: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log({
      name: nameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      radio,
      message,
      checkboxes,
    });
    setIsFormValid(false);
    nameInputReset();
    lastNameInputReset();
    emailInputReset();
    phoneInputReset();
    setRadio('');
    setMessage('');
  };
  ///////////////////////////////////////////////////
  return (
    <Styled aria-label="submit your feedback">
      <div className="inputFields">
        <div className="input" aria-label="submit form input field">
          <label htmlFor="name" className="required-field">
            First name
          </label>
          <input
            className={`${nameInputError ? 'invalid' : ''}`}
            type="text"
            id="name"
            value={nameInput}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputError && (
            <p className="error-text">Enter correct first name!</p>
          )}
        </div>
        <div className="input" aria-label="submit form input field">
          <label htmlFor="lastName" className="required-field">
            Last name
          </label>
          <input
            className={`${lastNameInputError ? 'invalid' : ''}`}
            type="text"
            id="lastName"
            value={lastNameInput}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputError && (
            <p className="error-text">Enter correct last name!</p>
          )}
        </div>
        <div className="input" aria-label="submit form input field">
          <label htmlFor="email" className="required-field">
            Email
          </label>
          <input
            className={`${emailInputError ? 'invalid' : ''}`}
            type="email"
            id="email"
            value={emailInput}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailInputError && (
            <p className="error-text">Enter correct email!</p>
          )}
        </div>
        <div className="input" aria-label="submit form input field">
          <label htmlFor="phone" className="required-field">
            Phone number
          </label>
          <input
            className={`${phoneInputError ? 'invalid' : ''}`}
            type="text"
            id="phone"
            value={phoneInput}
            onChange={phoneInputChangeHandler}
            onBlur={phoneInputBlurHandler}
          />
          {phoneInputError && (
            <p className="error-text">
              Enter correct phone number (10 digits)!
            </p>
          )}
        </div>
      </div>
      <section className="radioButtons">
        {radioOptions.map((option, index) => (
          <RadioButtons
            radio={option}
            key={option.value + index}
            setRadio={setRadio}
          />
        ))}
      </section>
      <section className="textarea">
        <label htmlFor="comments">
          <p>Message</p>
        </label>
        <textarea
          id="comments"
          name="comments"
          onChange={setMessageHandler}
          value={message}
          placeholder="Enter your comments..."
          aria-label="Comments"></textarea>
      </section>
      <section className="checkboxContainer">
        <div className="checkbox">
          <input
            type="checkbox"
            id="terms1"
            name="terms1"
            checked={checkboxes.terms1}
            onChange={() => handleCheckboxChange('terms1')}
            aria-label="terms 1"
          />
          <label htmlFor="terms1">
            <p>Accept the Terms</p>
          </label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="terms2"
            name="terms2"
            aria-label="Terms 2"
            checked={checkboxes.terms2}
            onChange={() => handleCheckboxChange('terms2')}
          />
          <label htmlFor="terms2">
            <p>Accept another Terms</p>
          </label>
        </div>
      </section>
      <div className="submitButtonContainer">
        <Button disabled={!isFormValid} onClick={formSubmitHandler}>
          Send Message
        </Button>
      </div>
    </Styled>
  );
};

export default SendMessage;

const Styled = styled.form`
  padding: 48px 18px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  height: 100%;
  .inputFields {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: start;
    .input {
      font-size: ${({ theme }) => theme.fontSizes.par};
      width: 416px;
      display: flex;
      flex-direction: column;
      max-width: 426px;
      gap: 8px;
      input {
        height: 44px;
        padding: 12px;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
      }
    }
  }
  .radioButtons {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 36px;
    flex-wrap: wrap;
  }
  .textarea {
    font-size: ${({ theme }) => theme.fontSizes.par};
    textarea {
      margin-top: 8px;
      width: 100%;
      height: 100px;
      border-radius: 4px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      padding: 8px;
      &::placeholder {
        color: ${({ theme }) => theme.colors.blue_grey};
      }
    }
  }
  .checkboxContainer {
    display: flex;
    gap: 48px;
    .checkbox {
      display: flex;
      gap: 16px;
    }
  }
  .submitButtonContainer {
    margin-top: auto; /* Push the container to the bottom */
    display: flex;
    justify-content: flex-end; /* Position the button at the right */
  }
  .invalid {
    border: 2px solid #b40e0e !important;
    background-color: #fddddd;
    &:focus {
      border-color: #ff8800;
      background-color: #fbe8d2;
    }
  }
  .error-text {
    color: #b40e0e;
  }
  .required-field::before {
    content: '*';
    color: red;
    margin-right: 2px;
  }
`;
