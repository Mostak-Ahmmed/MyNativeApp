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
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');

  const handlePress = () => {
    Alert.alert('Hello!', `Welcome, ${name || 'Guest'}!`);
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
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        Welcome to React Native!
      </Text>
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
      <Button title="Say Hello" onPress={handlePress} />
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 16,
  },
});

export default App;
