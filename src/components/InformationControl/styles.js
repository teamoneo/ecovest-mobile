import styled from 'styled-components';

export const InformationControlContainer = styled.View`
  display: flex;
  margin-top: 120px;
  padding: 10px 0;
  flex-direction: column;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const InformationTotal = styled.View`
  flex-direction: row;
`;

export const InformationTotalText = styled.Text`
  font-size: 18px;
  color: #9d9fa2;
  margin-left: 10px;
`;

export const InformationText = styled.Text`
  font-size: 36px;
  color: ${(props) => props.color};
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const TotalLine = styled.View`
  height: 5px;
  width: 100%;
  background: #c4c4c4;
  border-radius: 3px;
`;

export const ProgressLine = styled.View`
  background: ${(props) => props.color};
  height: 5px;
  width: 80%;
  border-radius: 3px;
`;
