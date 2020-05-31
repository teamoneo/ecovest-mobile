import styled from 'styled-components/native';

export const UserControl = styled.View`
  padding: 35px 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const UserImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const UserTextControl = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: Ubuntu;
`;

export const UserAccount = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-family: Ubuntu;
`;
