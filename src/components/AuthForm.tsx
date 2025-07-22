import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  isSignup: boolean;
  username: string;
  password: string;
  setUsername: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: () => void;
  toggleMode: () => void;
};

const AuthForm = ({
  isSignup,
  username,
  password,
  setUsername,
  setPassword,
  onSubmit,
  toggleMode,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button title={isSignup ? 'Sign Up' : 'Login'} onPress={onSubmit} />

      <TouchableOpacity onPress={toggleMode}>
        <Text style={styles.switchText}>
          {isSignup ? 'Already have an  account? Login' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  switchText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#0066cc',
  },
});
