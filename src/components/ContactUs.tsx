import styled from 'styled-components';
import contactImg from '../assets/images/feedback_img.jpg';
import phoneIcon from '../assets/Icons/phone.svg';
import emailIcon from '../assets/Icons/email.svg';
import locationIcon from '../assets/Icons/Location.svg';
import facebook from '../assets/Icons/facebook.svg';
import instagram from '../assets/Icons/instagram.svg';
import twitter from '../assets/Icons/twitter.svg';
import SendMessage from './SendMessage/SendMessage';
const ContactUs = () => {
  return (
    <Styled>
      <div className="mainContainer">
        <div className="containerLeft">
          <h1>Contact Us</h1>
          <p>
            Fill up the form and ur Team will get back to you within 24 hours.
            Happy to see your message!
          </p>
          <address>
            <ul>
              <li>
                <a href="tel:+123456789">
                  <img src={phoneIcon} alt="An icon of the telephone" />
                  <p>+1 (234) 567-89</p>
                </a>
              </li>
              <li>
                <a href="mailto:example@email.com" target="_blank">
                  <img src={emailIcon} alt="An icon of the mail" />
                  <p>godofcode@code.com</p>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=123+Main+Street,+City,+State+12345"
                  target="_blank">
                  <img src={locationIcon} alt="An icon of the place location" />
                  <p>123 Main Street City, State 12345 Country</p>
                </a>
              </li>
            </ul>
          </address>
          <section className="socialMedia">
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} alt="Instagram Icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter} alt="Twitter Icon" />
            </a>
          </section>
        </div>
        <div className="containerRight">
          <SendMessage />
        </div>
      </div>
    </Styled>
  );
};

export default ContactUs;

const Styled = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  padding: 80px 64px;
  .mainContainer {
    display: flex;
    max-width: 1440px;
    border-radius: 18px;
  }
  .containerLeft {
    color: ${({ theme }) => theme.colors.black};
    padding: 42px;
    background-image: url(${contactImg});
    height: 637px;
    width: 425px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.head1};
      margin-bottom: 16px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.par};
      margin-bottom: 56px;
    }
    a {
      color: ${({ theme }) => theme.colors.black};
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      gap: 24px;
      p {
        margin: 0;
      }
    }
    .socialMedia {
      display: flex;
      flex: 2;
      align-items: end;
      gap: 36px;
      a {
        margin: 0px;
      }
    }
  }
  .containerRight {
    width: 100%;
    border-bottom-right-radius: 18px;
    border-top-right-radius: 18px;
    background: ${({ theme }) => theme.colors.white};
  }
`;
