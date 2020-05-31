import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const elevationStyle = {elevation: 5};

export const TextButtons = styled.Text`
  align-self: flex-start;

  font-size: 24px;
  color: #4D4D4F;
  font-weight: bold;

  margin-bottom: 30px;
`;

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  overflow: hidden;
  min-height: 100%;
  height: auto;
  padding: 30px;
`;

export const PopUpContainer = styled.View`
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
`;

export const PopUpTitleText = styled.Text`
  font-size: 20px;
  color: #F58220;

  font-weight: bold;
`;

export const ReasonTitleText = styled.Text`
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  color: #7E868A;
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
  color: #7E868A;
  margin-left: 10px;
  text-align: left;
`;
