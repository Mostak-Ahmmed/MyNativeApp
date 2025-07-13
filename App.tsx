import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handlePress = () => {
    const msg = `Welcome, ${name || 'Guest'}!`;
    setGreeting(msg);
    Alert.alert('Hello!', msg);
  };

  const handleClear = () => {
    setName('');
    setGreeting('');
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />

      {/* Avatar Image */}
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.avatar}
      />

      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        Welcome to React Native!
      </Text>

      {/* Text Input */}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#222' : '#eee',
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? '#888' : '#555'}
        value={name}
        onChangeText={setName}
      />

      {/* Character Count */}
      <Text style={{ color: isDarkMode ? '#aaa' : '#333', marginBottom: 10 }}>
        {name.length}/20 characters
      </Text>

      {/* Button */}
      <Button title="Say Hello" onPress={handlePress} disabled={name.trim() === ''} />

      {/* Clear Button */}
      <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
        <Text style={styles.clearText}>Clear</Text>
      </TouchableOpacity>

      {/* Greeting Display */}
      {greeting !== '' && (
        <Text
          style={{
            color: isDarkMode ? '#0f0' : '#006400',
            fontSize: 16,
            marginTop: 20,
          }}>
          {greeting}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  input: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  clearButton: {
    marginTop: 12,
  },
  clearText: {
    color: '#ff4444',
    marginTop: 8,
  },
});

export default App;

