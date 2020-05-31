import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const elevationStyle = { elevation: 5 };

export const TextTitle = styled.Text`
  align-self: flex-start;

  font-size: 24px;
  color: #4d4d4f;
  font-weight: bold;

  margin-bottom: 30px;
`;

export const ReasonTitleText = styled.Text`
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  color: #7e868a;
  text-align: center;
`;

export const ReasonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const ReasonText = styled.Text`
  max-width: 200px;
  font-size: 14px;
  font-weight: bold;
  color: #7e868a;
  margin-left: 10px;
  text-align: left;
`;
