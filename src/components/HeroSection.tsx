import styled from 'styled-components';
import Button from './UI/Button';
import heroImg from '../assets/images/main_img.jpg';
const HeroSection = () => {
  return (
    <Styled>
      <section className="heroText">
        <h1>Plant Your Dreams</h1>
        <div>
          <h2>Your Home, Reimagined: Where Green Meets Serenity...</h2>
          <p>
            Discover the joy of houseplant care and revitalize your surroundings
            with nature's beauty. Find the perfect houseplants to create a
            calming oasis in your living space. Explore a world of botanical
            wonders and bring life, style, and wellness to your home. Discover a
            curated collection of vibrant houseplants to transform your home
            into a lush paradise.
          </p>
        </div>
        <Button>Buy Now</Button>
      </section>
      <img src={heroImg} alt="A big picture of a plant" />
    </Styled>
  );
};

export default HeroSection;

const Styled = styled.main`
  padding: 24px 64px 60px 64px;
  background: ${({ theme }) => theme.colors.light_grey};
  display: flex;
  gap: 18px;
  position: relative;
  .heroText {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontSizes.head1};
    }
    h2 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontSizes.head3};
    }
    p {
      margin-top: 12px;
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSizes.p};
      font-family: 'Ubuntu';
      line-height: 1.4;
    }
  }
  .image {
    flex: 1;
    height: 100%;
  }
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
