import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AuthForm from '../components/AuthForm';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthScreen = ({ navigation }: Props) => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Both fields are required!');
      return;
    }

    Alert.alert(
      isSignup ? 'Signup Successful' : 'Login Successful',
      `Welcome, ${username}!`
    );

    navigation.navigate('Home', { username });

    setUsername('');
    setPassword('');
  };

  return (
    <AuthForm
      isSignup={isSignup}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      onSubmit={handleAuth}
      toggleMode={() => setIsSignup(!isSignup)}
    />
  );
};

export default AuthScreen;
