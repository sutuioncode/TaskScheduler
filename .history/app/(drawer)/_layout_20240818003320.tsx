import { Drawer } from 'expo-router/drawer';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
        name="explore"
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
  );
}
