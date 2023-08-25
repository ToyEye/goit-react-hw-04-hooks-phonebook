import styled from '@emotion/styled';

export const ContactStyledList = styled.ul`
  width: 450px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
export const ContactItem = styled.li`
  color: black;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ContactName = styled.p`
  color: black;
  margin-bottom: 15px;
`;
