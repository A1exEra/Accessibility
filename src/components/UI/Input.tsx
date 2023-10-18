/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

type T = {
  [key: string]: any;
};
const Input = (props: T) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    label,
    name,
    disabled,
    maxLength,
    minLength,
    className,
    required,
  } = props;
  return (
    <Styled className={`${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
      />
    </Styled>
  );
};

export default Input;

const Styled = styled.div``;
