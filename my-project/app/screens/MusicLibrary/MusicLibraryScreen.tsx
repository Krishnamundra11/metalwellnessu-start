import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockTracks = [
  { id: '1', title: 'Nature Sounds' },
  { id: '2', title: 'Deep Ocean Waves' },
  { id: '3', title: 'Rain & Chill Vibes' },
];

const MusicLibraryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Music Library</Text>
    <FlatList
      data={mockTracks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.trackCard}><Text>{item.title}</Text></View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
  trackCard: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default MusicLibraryScreen;