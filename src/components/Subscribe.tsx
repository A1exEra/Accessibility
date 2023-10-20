import styled from 'styled-components';
import useInput from './hooks/useInput';
import Button from './UI/Button';
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const Subscribe = () => {
  let isFormValid = false;
  const {
    value: emailInput,
    valueIsValid: isEmailInputValid,
    hasError: emailInputError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value: string) => emailPattern.test(value));
  if (isEmailInputValid) {
    isFormValid = true;
  }
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log({
      email: emailInput,
    });
    emailInputReset();
  };
  return (
    <Styled>
      <div className={`${emailInputError ? 'invalid' : ''}`}>
        <input
          type="email"
          id="email-subscribe"
          value={emailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          placeholder={`${
            emailInputError ? 'Enter correct email!' : 'godofcode@code.com'
          } `}
        />
      </div>
      <Button
        type="submit"
        onClick={formSubmitHandler}
        role="button"
        aria-label="Subscribe"
        disabled={!isFormValid}>
        Subscribe
      </Button>
    </Styled>
  );
};

export default Subscribe;

const Styled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  display: flex;
  gap: 30px;
  align-items: end;
  input {
    width: 308px;
    border: none;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.blue_grey};
    }
  }
  .invalid {
    input {
      border-bottom: 1px solid #b40e0e;
      background-color: #fddddd;
      &:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    }
  }
  .error-text {
    color: #b40e0e;
    margin-top: 1rem;
    text-align: center;
  }
  @media (max-width: 975px) {
    display: flex;
  }
`;
