import React from 'react';

import { Text } from 'react-native';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Text>Dashboard</Text>
      </Container>
    </>
  );
}
