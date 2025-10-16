
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';

export default function Home() {
   return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
})