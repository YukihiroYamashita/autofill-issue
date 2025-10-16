import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import React from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack
              initialRouteName='signIn'
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="signIn" />
            </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
