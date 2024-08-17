import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={config} colorMode={colorScheme ?? 'light'}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: true}} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GluestackUIProvider>
    </ThemeProvider>
  )
}
