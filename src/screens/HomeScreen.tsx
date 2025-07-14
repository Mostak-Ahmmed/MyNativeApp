import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ route, navigation }: Props) => {
  const { username } = route.params;
  const posts = useSelector((state: RootState) => state.posts.list);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Button title="Add Post" onPress={() => navigation.navigate('AddPost')} />

      <Text style={styles.subtitle}>Your Posts:</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
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
    marginBottom: 5,
  },
});
