import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import Nav from './Nav';
import Search from './Search';
import Burger from './Burger';
import SiderNav from './SideNav';
import { useEffect, useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1200);
  useEffect(() => {
    const handleResize = () => {
      //   setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Styled>
      <img src={logo} alt="Logo of the application" />
      <div className="navItems">
        {!isTablet && <Nav />}
        {!isTablet && <Search />}
      </div>
      {isTablet && <Burger setIsOpen={setIsOpen} isOpen={isOpen} />}
      {isTablet && <SiderNav isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Styled>
  );
};

export default Header;

const Styled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 64px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
  .navItems {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    padding-right: 16px;
  }
`;
