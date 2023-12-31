import styled from 'styled-components';
type BurgerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  const handleClick = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  return (
    <StyledBurger
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      role="button"
      aria-label="Open/Close Menu"
      aria-expanded={isOpen}
      tabIndex={0}>
      <div className={`stripe ${isOpen ? 'stripe-top' : ''}`}></div>
      <div className={`stripe ${isOpen ? 'stripe-middle' : ''}`}></div>
      <div className={`stripe ${isOpen ? 'stripe-bottom' : ''}`}></div>
    </StyledBurger>
  );
};
const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 100;
  background: none;
  .stripe {
    margin-bottom: 0.3rem;
    width: 100%;
    height: 3px;
    border-top-left-radius: 50%;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.7s all ease-in-out;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }

  .stripe-top {
    transform: translateY(12.5px) rotateZ(45deg);
    height: 3px;
    opacity: 0.8;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }

  .stripe-middle {
    box-shadow: 0 0 0 0px rgba(222, 192, 222, 0);
    background-color: rgba(222, 192, 222, 0);
  }

  .stripe-bottom {
    transform: translateY(-9px) rotateZ(-45deg);
    height: 3px;
    opacity: 0.8;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;
export default Burger;
