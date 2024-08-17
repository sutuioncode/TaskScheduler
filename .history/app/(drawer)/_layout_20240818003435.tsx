import { Drawer } from 'expo-router/drawer';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'User',
          title: 'overview',

        }}
      />
      <Drawer.Screen
        name="explo"
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
  );
}
