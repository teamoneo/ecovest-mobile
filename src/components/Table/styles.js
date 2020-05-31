import styled from 'styled-components/native';

export const Wrap = styled.View`
  display:flex;
  flex-direction:column;
`;

export const TableNav = styled.View`
  width: 350px;
  padding: 20px 30px;
  background:#ffffff;
  font-size:20px;
  border: 1px solid #E6E7E8;
  
  display: flex;
  flex-direction:row;
  justify-content:space-between;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TableTitle = styled.Text`
  font-size:20px;
  color:#9D9FA2;
`;

export const ItensArea = styled.View`
  display:flex;
  flex-direction:column;
`;
