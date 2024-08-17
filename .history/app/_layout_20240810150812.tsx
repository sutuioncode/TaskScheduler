import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GluestackUIProvider, Text, Box, HStack } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const area = useSafeAreaInsets()
  const frame = useSafeAreaFrame()
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <StatusBar animated />
        <HStack style={{ flex: 1 }}>
          <Text>HEADER</Text>
          <Slot />
          <Text>FOOTER</Text>
        </HStack>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
