import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  min-height: 180px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;
