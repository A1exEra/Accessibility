import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import arrowDown from '../../assets/Icons/Arrow - Down.svg';
const DropDown = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const languages = ['English', 'French', 'German', 'Spanish'];
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0]
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpened((prev) => !prev);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpened(false);
  };

  return (
    <Styled ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={toggleDropDown}
        aria-expanded={isOpened}
        aria-haspopup="listbox"
        aria-label="Select Language">
        <h3>{selectedLanguage}</h3>
        <img src={arrowDown} alt="dropdown arrow icon" />
      </button>
      {isOpened && (
        <ul
          //   className={`${isOpened && 'open'}`}
          role="listbox"
          aria-labelledby="dropdown-button"
          aria-activedescendant={selectedLanguage}>
          {languages.map((item, index) => (
            <li
              role="option"
              tabIndex={0}
              id="language-option"
              value={item.slice(0, 3).toLowerCase()}
              key={item + index}
              onClick={() => selectLanguage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  selectLanguage(item);
                }
              }}>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      )}
    </Styled>
  );
};

export default DropDown;

const Styled = styled.div`
  position: relative;
  z-index: 999;
  cursor: pointer;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.head4};
    font-weight: 400;
  }
  .dropdown-button {
    display: flex;
    gap: 4px;
    background: inherit;
    border: none;
  }
  ul {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    width: auto;
    height: auto;
    top: 44px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    right: 0px;
    display: flex;
    flex-direction: column;
    animation: fade-in 0.5s ease;
    li {
      margin: 8px;
      border: none;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
