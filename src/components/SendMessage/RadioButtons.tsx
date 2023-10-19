/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
const RadioButtonForm = (props: any) => {
  const handleRadioChange = () => {
    props.setRadio(props.radio.title);
  };
  return (
    <Styled>
      <label>
        <input
          type="radio"
          value={props.radio.value}
          name="radioGroup"
          onChange={handleRadioChange}
          id={props.radio.value}
        />
        {props.radio.title}
      </label>
    </Styled>
  );
};

export default RadioButtonForm;

const Styled = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.par};
  input {
    margin-right: 8px;
  }
`;
