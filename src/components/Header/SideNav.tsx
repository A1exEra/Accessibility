import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';
type SliderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SliderNav = ({ isOpen, setIsOpen }: SliderProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isOpen) {
      document.body.style.overflow = 'auto';
    }
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) {
        if (divRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
          document.body.style.overflow = 'auto';
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <SliderNavContainer $isopen={isOpen}>
      <div className="background" ref={divRef}></div>
      <Nav />
      <Search />
    </SliderNavContainer>
  );
};

const SliderNavContainer = styled.nav<{ $isopen: boolean }>`
  .background {
    position: absolute;
    top: 0px;
    right: 320px;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background: ${({ theme }) => theme.colors.blue_diopside};
    opacity: 0.5;
    display: ${({ $isopen }) => ($isopen ? 'block' : 'none')};
  }
  h2 {
    text-align: center;
    margin-top: 16px;
    font-size: 32px;
    font-family: ${({ theme }) => theme.fontSizes.text2xl};
    font-weight: 500;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 16px;
    margin: 24px;
    padding: 16px;
    border-top: 2px solid ${({ theme }) => theme.colors.third};
    border-bottom: 2px solid ${({ theme }) => theme.colors.third};
    li {
      border: none;
      text-align: end;
    }
  }
  a {
    h3 {
      font-size: 24px;
      font-family: ${({ theme }) => theme.fontSizes.textBase};
      font-weight: 500;
      letter-spacing: 10px;
      color: ${({ theme }) => theme.colors.third};
    }
  }
  h4 {
    text-align: center;
    margin: 16px 0px;
  }
  position: fixed;
  top: 80px;
  right: 0px;
  width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isopen }) =>
    !$isopen ? 'translateX(100%)' : 'translateX(0)'};
`;
export default SliderNav;
