import { HStack, Text } from '@gluestack-ui/themed';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
    <HStack>
      <Text>HEADER</Text>
      <Text>FOOTER</Text>
    </HStack>
  );
}
