// screens/ContentLibrary/ContentLibraryScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio';
  imageSource: any; // Replace with proper image type
}

const ContentLibraryScreen = () => {
  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Managing Stress in College',
      description: 'Learn effective techniques to manage academic stress',
      type: 'article',
      imageSource: null, // Replace with actual image
    },
    {
      id: '2',
      title: 'Sleep Hygiene Tips',
      description: 'Improve your sleep quality with these simple habits',
      type: 'article',
      imageSource: null, // Replace with actual image
    },
    {
      id: '3',
      title: 'Guided Meditation for Focus',
      description: '10-minute meditation to improve concentration',
      type: 'audio',
      imageSource: null, // Replace with actual image
    },
    {
      id: '4',
      title: 'Effective Study Techniques',
      description: 'Evidence-based methods to improve learning and retention',
      type: 'video',
      imageSource: null, // Replace with actual image
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Wellness Library</Text>
        
        <View style={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={styles.activeFilterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Audio</Text>
          </TouchableOpacity>
        </View>
        
        {contentItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.contentCard}>
            <View style={styles.contentTypeTag}>
              <Text style={styles.contentTypeText}>{item.type}</Text>
            </View>
            <Text style={styles.contentTitle}>{item.title}</Text>
            <Text style={styles.contentDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333333',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  activeFilter: {
    backgroundColor: '#333333',
  },
  filterText: {
    color: '#666666',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  contentCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  contentTypeTag: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
  },
  contentTypeText: {
    fontSize: 12,
    color: '#666666',
    textTransform: 'uppercase',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333333',
  },
  contentDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default ContentLibraryScreen;