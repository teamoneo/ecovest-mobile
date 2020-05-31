import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const Divider = styled.View`
  height: 136px;
  width: 3px;
  background: #dcddde;
  margin: 0 20px;
`;

export const TittleGoal = styled.Text`
  color: #9d9fa2;
  margin-left: 85px;
  font-size: 14px;
`;

export const CardContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  line-height: 16px;
`;

export const elevationStyle = { elevation: 5 };
