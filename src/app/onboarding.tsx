
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

export default function Onboarding() {

  const router = useRouter()

  const handleOnClick = () => { 
    router.navigate('/signIn')
  }

  return (
    <View style={styles.container}>
      <Button
        title='Sign In'
        onPress={handleOnClick}
      />
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