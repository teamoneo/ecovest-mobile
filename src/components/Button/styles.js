import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 54px;
  width: 100%;

  border-radius: 54px;

  border: 2px solid ${(props) => props.color};

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color};
  font-size: 18px;
`;
