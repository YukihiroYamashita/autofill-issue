import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import React from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <KeyboardProvider>
          <SafeAreaProvider>
            <Stack
              initialRouteName='signIn'
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="signIn" />
            </Stack>
          </SafeAreaProvider>
        </KeyboardProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
