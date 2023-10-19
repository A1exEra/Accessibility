/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, FC, MouseEventHandler, FormEvent } from 'react';
import { styled } from 'styled-components';
interface BtnProps {
  children: ReactNode;
  className?: string;
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | FormEvent<HTMLFormElement>
    | any;
  label?: ReactNode;
  icon?: string | undefined;
  isDisabled?: boolean;
  type?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  role?: string;
  disabled?: boolean;
}
const Button: FC<BtnProps> = (props) => {
  return (
    <StyledButton
      type={`${props.type || 'button'}`}
      onClick={props.onClick}
      backgroundColor={props.backgroundColor}
      className={`${props.className}`}
      disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};
const StyledButton = styled.button<BtnProps>`
  /* border: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 196px;
  height: 48px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.head4};
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  img {
    object-fit: covetr;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
  }
  &:disabled {
    background-color: grey;
    color: ${({ theme }) => theme.colors.light_grey};
  }
`;
export default Button;
