import styled from '@emotion/styled';

export const ImputEnter = styled.input`
  width: 220px;
  padding: 5px 15px;
  border-radius: 5px;
  border-color: #d4d4d4;

  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;
export const InputType = styled.label`
  margin-bottom: 10px;
  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;

export const InputText = styled.p`
  margin-bottom: 5px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
`;
