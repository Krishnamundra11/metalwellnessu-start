// screens/Tracking/QuestionnaireScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrackingDomain } from '../../types';

const QuestionnaireScreen = ({ navigation }: any) => {
  // This screen now serves as a hub for all tracking domains
  const trackingDomains: TrackingDomain[] = [
    {
      id: 'stress',
      name: 'Stress Level',
      color: '#FFE2E2',
      icon: null, // Replace with actual icon
      description: 'Track how stress affects your wellbeing'
    },
    {
      id: 'academic',
      name: 'Academic Performance',
      color: '#E2FFE2',
      icon: null, // Replace with actual icon
      description: 'Monitor your academic progress'
    },
    {
      id: 'sleep',
      name: 'Sleep Quality',
      color: '#FFE8D6',
      icon: null, // Replace with actual icon
      description: 'Assess your sleep patterns'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Wellness Tracking</Text>
        <Text style={styles.subHeaderText}>
          Monitor different aspects of your well-being
        </Text>

        {trackingDomains.map((domain) => (
          <TouchableOpacity
            key={domain.id}
            style={[styles.domainCard, { backgroundColor: domain.color }]}
            onPress={() => {
              switch (domain.id) {
                case 'stress':
                  navigation.navigate('StressQuestionnaire');
                  break;
                case 'academic':
                  navigation.navigate('AcademicQuestionnaire');
                  break;
                case 'sleep':
                  navigation.navigate('SleepQuestionnaire');
                  break;
                default:
                  break;
              }
            }}
          >
            <Text style={styles.domainTitle}>{domain.name}</Text>
            <Text style={styles.domainDescription}>{domain.description}</Text>
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
    marginBottom: 10,
    color: '#333333',
  },
  subHeaderText: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666666',
  },
  domainCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  domainTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333333',
  },
  domainDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default QuestionnaireScreen;