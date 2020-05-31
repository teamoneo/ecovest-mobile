import styled from 'styled-components/native';

export const Container = styled.View`
  width:350px;
  padding: 20px 10px 20px 28px;
  background:#ffffff;
  border: 1px solid #E6E7E8;
  flex-direction:row;
  justify-content:space-between;
`;

export const DataText = styled.Text`
  font-size:16px;
  color:#9D9FA2;
`;
export const NameText = styled.Text`
  margin-left:4px;
  font-size:14px;
  color:#9D9FA2;
`;
export const ValueText = styled.Text`
  font-size:20px;
  color:#7E868A;
`;
export const NameWrap = styled.View`
  align-items:center;
  flex-direction:row;
`;