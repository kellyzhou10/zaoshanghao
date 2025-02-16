import React, { useState } from 'react';
import { TextInput, Button, Alert, View, StyleSheet, Text } from 'react-native';
import { SignUpNewUser, SignInUser } from '../firebase/auth';
import { useRouter } from 'expo-router';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await SignInUser(email, password);
      Alert.alert('Login successful');
      router.push('/(tabs)'); // Navigate to Home (or any other tab)
    } catch (error) {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await SignUpNewUser(email, password);
      // Store the username in Firestore (this could be an additional Firestore integration)
      Alert.alert('Sign-Up successful');
      router.push('/(tabs)'); // Navigate after successful sign-up
    } catch (error) {
      Alert.alert('Error', 'Sign-up failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {isSigningUp && (
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      )}
      <Button
        title={isSigningUp ? 'Sign Up' : 'Login'}
        onPress={isSigningUp ? handleSignUp : handleLogin}
      />
      <Button
        title={isSigningUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        onPress={() => setIsSigningUp(!isSigningUp)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default Index;