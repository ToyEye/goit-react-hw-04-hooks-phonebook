import styled from '@emotion/styled';

const ImputEnter = styled.input`
  width: 220px;
  padding: 5px 15px;
  border-radius: 5px;
  border-color: #d4d4d4;

  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;
const InputType = styled.label`
  margin-bottom: 10px;
  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;

const InputText = styled.p`
  margin-bottom: 5px;
`;

export { ImputEnter, InputType, InputText };
