import styled from 'styled-components/native';

export const Wrap = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 30px 0;
`;

export const TableNav = styled.View`
  width: 100%;
  padding: 20px 30px;
  background: #ffffff;
  font-size: 20px;
  border: 1px solid #e6e7e8;

  flex-direction: row;
  justify-content: space-between;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const TableTitle = styled.Text`
  font-size: 20px;
  color: #9d9fa2;
`;

export const ItensArea = styled.View`
  display: flex;
  flex-direction: column;
`;
