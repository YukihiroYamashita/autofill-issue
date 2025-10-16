
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import 'react-native-reanimated';

interface InputProps extends TextInputProps { 
  label?: string,
}

export default function Input({...rest}: InputProps) {
   return (
    <View style={styles.container}>
      <Text>{rest.label}</Text>
      <TextInput
        {...rest}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'red',
    borderRadius: 2,
    borderWidth: 1
  }
})