import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useDispatch } from 'react-redux';
import { editPost } from '../redux/features/postSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'EditPost'>;

const EditPostScreen = ({ route, navigation }: Props) => {
  const { id, title: oldTitle, content: oldContent } = route.params;
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!title || !content) {
      Alert.alert('Error', 'All fields required!');
      return;
    }

    dispatch(editPost({ id, title, content }));
    Alert.alert('Post Updated');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Post</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput style={[styles.input, styles.textArea]} value={content} onChangeText={setContent} multiline />
      <Button title="Update" onPress={handleEdit} />
    </View>
  );
};

export default EditPostScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
});
