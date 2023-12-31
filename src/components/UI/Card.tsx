import styled from 'styled-components';
import cardImage from '../../assets/images/card_img.jpg';
const Card = () => {
  return (
    <Styled>
      <img
        src={cardImage}
        alt="A potted plant on a table that is a part of a card element"
      />
      <section className="textSection">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus
          cursus.
        </p>
        <a href="#" target="_blank" role="link">
          <p>Learn more about &rarr;</p>
        </a>
      </section>
    </Styled>
  );
};

export default Card;

const Styled = styled.section`
  width: 647px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  gap: 18px;
  color: ${({ theme }) => theme.colors.white};
  img {
    height: 230px;
    width: 180px;
  }
  .textSection {
    display: flex;
    flex-grow: 1;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 18px;
    font-family: 'Ubuntu', sans-serif;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.head3};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.par};
      letter-spacing: 0.1rem;
      line-height: 1rem;
    }
    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
    }
  }
  @media (max-width: 780px) {
    flex-direction: column;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
