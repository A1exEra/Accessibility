/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import useInput from '../hooks/useInput';
type T = {
  [key: string]: any;
};
const Input = (props: T) => {
  const {
    type,
    name,
    placeholder,
    className,
    required,
    validationPattern,
    submittedValue,
    resetInput,
  } = props;
  const pattern = validationPattern;

  const {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((value: string) =>
    pattern ? pattern.test(value) : value.trim() !== ''
  );
  if (valueIsValid) {
    submittedValue(value);
  }
  if (resetInput) {
    reset();
  }
  return (
    <Styled className={`${className}`} aria-label="submit form input field">
      {placeholder && (
        <label htmlFor={name} className={`${required ? 'required-field' : ''}`}>
          {placeholder}
        </label>
      )}
      <input
        className={`${hasError ? 'invalid' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        name={name}
        id={name}
        required={required}
      />
      {hasError && <p className="error-text">Enter correct {placeholder}!</p>}
    </Styled>
  );
};

export default Input;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 426px;
  gap: 8px;
  input {
    height: 44px;
    padding: 12px;
  }
  .invalid {
    border: 1px solid #b40e0e;
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
