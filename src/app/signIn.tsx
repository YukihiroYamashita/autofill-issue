
import Input from '@/components/Input';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleOnClick = () => { 
    router.navigate('home')
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center'}}>
      <Input
        label='username'
        value={username}
        onChangeText={setUsername}
        autoComplete='email'
        importantForAutofill='yes'
      />
      <Input
        label='password'
        value={password}
        onChangeText={setPassword}
        autoComplete='password'
        importantForAutofill='yes'
        secureTextEntry
      />
      <Button
        title='Confirm'
        onPress={handleOnClick}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
})