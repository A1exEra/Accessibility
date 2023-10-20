import styled from 'styled-components';
import visaImg from '../assets/images/visa.png';
import masterCardImg from '../assets/images/mster_card.png';
import Subscribe from './Subscribe';
const Footer = () => {
  return (
    <Styled>
      <section className="topContainer">
        <section className="leftContainer">
          <h1>PlantMe</h1>
          <h2>
            Subscribe and be the first to know about our news and promotions.
          </h2>
          <Subscribe />
        </section>
        <nav className="centralContainer">
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
          </ul>
        </nav>
        <address className="rightContainer">
          <h3>Contacts</h3>
          <a href="tel:+123456789">
            <p>+1 (234) 567-89</p>
          </a>
          <a href="mailto:example@email.com" target="_blank">
            <p>godofcode@code.com</p>
          </a>
          <section className="payments">
            <img id="visa" src={visaImg} alt="Visa payment system" />
            <img src={masterCardImg} alt="Mastercard payment system" />
          </section>
        </address>
      </section>
      <section className="bottomContainer">
        <p>&copy;2023 God_Of_Code, All Rights Reserved</p>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Language
            </a>
          </li>
        </ul>
      </section>
    </Styled>
  );
};

export default Footer;

const Styled = styled.footer`
  padding: 24px 64px;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.head4};
    font-weight: 400;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.head1};
    margin-bottom: 20px;
  }
  .topContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .leftContainer {
    }
    .centralContainer {
      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
    .rightContainer {
      display: flex;
      flex-direction: column;
      gap: 8px;
      a {
        color: ${({ theme }) => theme.colors.blue_grey};
      }
      .payments {
        margin-top: 32px;
        display: flex;
        gap: 36px;
        align-items: center;
      }
      #visa {
        width: 50px;
        height: 30px;
      }
    }
  }
  .bottomContainer {
    margin: 24px 0;
    padding-top: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.light_grey};
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSizes.par};
    p {
      text-align: center;
      flex: 1;
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 16px;
      li {
        a {
          color: ${({ theme }) => theme.colors.blue_grey};
        }
      }
    }
  }
  @media (max-width: 975px) {
    padding: 24px;
    .topContainer {
      gap: 16px;
      align-items: center;
      .leftContainer {
        margin-bottom: 24px;
      }
    }
    .bottomContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
  }
`;
