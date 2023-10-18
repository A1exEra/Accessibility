import styled from 'styled-components';
import Card from './UI/Card';

const About = () => {
  return (
    <Styled>
      <Card />
      <Card />
    </Styled>
  );
};

export default About;

const Styled = styled.section`
  background: ${({ theme }) => theme.colors.light_grey};
  padding: 64px 80px;
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
