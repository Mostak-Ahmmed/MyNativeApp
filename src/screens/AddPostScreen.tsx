import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'AddPost'>;

const AddPostScreen = ({ navigation }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePostSubmit = () => {
    if (!title || !content) {
      Alert.alert('Error', 'Please fill in both fields!');
      return;
    }

    Alert.alert('Post Added', `Title: ${title}\nContent: ${content}`);
    // Clear inputs
    setTitle('');
    setContent('');

    // Optionally go back to home
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Post Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Post Content"
        multiline
        numberOfLines={5}
        value={content}
        onChangeText={setContent}
      />

      <Button title="Submit Post" onPress={handlePostSubmit} />
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
