import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const Box = styled.View`
  display:flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
`;

export const BoxContent = styled.View`
  align-items:center;
  flex-direction: row;
  padding: 30px 20px;
`;

export const BoxTitle = styled.Text`
  font-size: 30px;
`;

export const InfoControl = styled.View`
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
  color: #FFFFFF;
  font-family: Ubuntu;
`;

export const Divider = styled.View`
  height:136px;
  width: 3px;
  background: #DCDDDE;
  margin: 0 20px;
`;

export const TittleGoal = styled.Text`
  color:#9D9FA2;
  margin-left:85px;
  font-size:14px;
`;

export const CardContent = styled.View`
  display:flex;
  flex-direction: row;
  align-items:flex-end;
  line-height:16px;
`;

export const elevationStyle = {elevation: 5};