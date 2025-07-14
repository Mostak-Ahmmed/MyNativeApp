import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ route }: Props) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username}!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, fontWeight: 'bold' },
});
