/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import DropDown from '../UI/DropDown';
const Nav = ({ className }: any) => {
  return (
    <Styled className={`${className}`}>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Site Map</a>
        </li>
        <li>
          <DropDown />
        </li>
      </ul>
    </Styled>
  );
};

export default Nav;

const Styled = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style-type: none;
    margin-left: 77px;
    > * + * {
      border-left: 2px solid black;
    }
    li {
      padding: 0px 16px;
      a {
        color: ${({ theme }) => theme.colors.black};
        font-family: 'Ubuntu', 'sans-serif';
        font-size: ${({ theme }) => theme.fontSizes.head4};
      }
    }
  }
`;
