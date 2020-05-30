import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Unicons from '@iconscout/react-native-unicons';

import Dashboard from './pages/Dashboard';
import Reservation from './pages/Reservation';
import Goals from './pages/Goals';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        swipeEnabled: true,
        keyboardHidesTabBar: true,
        activeTintColor: '#F58220',
        inactiveTintColor: '#999999',
        style: {
          height: 65,
          backgroundColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10,
        },
        labelStyle: {
          fontSize: 12,
        },
        indicatorStyle: {
          borderTopColor: '#6495ed',
          borderTopWidth: 2,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === 'Painel') {
            return <Unicons.UilChartLine size={25} color={color} />;
          } if (route.name === 'Reserva') {
            return <Unicons.UilPadlock size={25} color={color} />;
          } if (route.name === 'Metas') {
            return <Unicons.UilTrophy size={25} color={color} />;
          } if (route.name === 'Perfil') {
            return <Unicons.UilUser size={25} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Painel"
        component={Dashboard}
      />
      <Tab.Screen
        name="Reserva"
        component={Reservation}
      />
      <Tab.Screen
        name="Metas"
        component={Goals}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
