import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { GluestackUIProvider, HStack, Text } from "@gluestack-ui/themed";
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
