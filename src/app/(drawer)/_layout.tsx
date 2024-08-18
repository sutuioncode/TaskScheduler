import { Drawer } from 'expo-router/drawer';
import React from 'react';


export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'overview',

        }}
      />
      <Drawer.Screen
        name="tasks"
        options={{
          drawerLabel: 'Tasks',
          title: 'Tasks',
        }}
      />
      <Drawer.Screen
        name="projects"
        options={{
          drawerLabel: 'Projects',
          title: 'Projects',
        }}
      />
      <Drawer.Screen
        name="teams"
        options={{
          drawerLabel: 'Teams',
          title: 'Teams',
        }}
      />

    </Drawer>
  );
}
