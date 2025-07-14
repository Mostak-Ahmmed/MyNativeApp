import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/features/postSlice';
import { useGetPostsQuery } from '../redux/services/postApi';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ route, navigation }: Props) => {
  const { username } = route.params;
  const dispatch = useDispatch();

 const { data: posts = [], isLoading, isError } = useGetPostsQuery(undefined);

  const handleDelete = (id: string) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this post?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => dispatch(deletePost(id)), // Local delete
        style: 'destructive',
      },
    ]);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading posts...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error fetching posts!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Button title="Add Post" onPress={() => navigation.navigate('AddPost')} />

      <Text style={styles.subtitle}>Posts from API:</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.postTitle}>{item.title}</Text>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text style={styles.deleteText}>🗑️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditPost', {
                      id: item.id,
                      title: item.title,
                      content: item.body || item.content,
                    })
                  }>
                  <Text style={styles.editText}>✏️</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text>{item.body || item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 20, marginVertical: 10 },
  postCard: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  editText: {
    color: 'green',
    fontSize: 18,
    paddingHorizontal: 8,
  },
});
