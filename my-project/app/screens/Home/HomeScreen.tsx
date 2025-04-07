import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Placeholder images - replace with your actual assets
const moodIcon = require('../../../assets/images/mood-icon.png');
const academicIcon = require('../../../assets/images/academic-icon.png');
const sleepIcon = require('../../../assets/images/sleep-icon.png');
const meditationIcon = require('../../../assets/images/meditation-icon.png');
const therapistIcon = require('../../../assets/images/therapist-icon.png');
const readingIcon = require('../../../assets/images/reading-icon.png');
const inspirationIcon = require('../../../assets/images/inspiration-icon.png');

const HomeScreen = ({ navigation }: any) => {
  const username = "Laxshi"; // Replace with actual user data
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.greeting}>Good Afternoon, {username}!</Text>
        <Text style={styles.question}>How are you feeling today?</Text>
        
        <View style={styles.moodContainer}>
          <TouchableOpacity style={styles.moodOption}>
            <Image source={moodIcon} style={styles.moodIcon} />
            <Text style={styles.moodText}>Great</Text>
          </TouchableOpacity>
          {/* Add more mood options as needed */}
        </View>
        
        <Text style={styles.sectionTitle}>Track Your Mood</Text>
        
        <View style={styles.trackingCardsContainer}>
          <TouchableOpacity 
            style={[styles.trackingCard, { backgroundColor: '#FFE2E2' }]} 
            onPress={() => navigation.navigate('StressQuestionnaire')}
          >
            <Image source={moodIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Check Your Stress Level</Text>
            <Text style={styles.cardDescription}>Take a quick assessment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.trackingCard, { backgroundColor: '#E2FFE2' }]} 
            onPress={() => navigation.navigate('AcademicQuestionnaire')}
          >
            <Image source={academicIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Your Academic Score</Text>
            <Text style={styles.cardDescription}>Track your performance</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.trackingCard, { backgroundColor: '#FFE8D6' }]} 
            onPress={() => navigation.navigate('SleepQuestionnaire')}
          >
            <Image source={sleepIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Your Sleep Score</Text>
            <Text style={styles.cardDescription}>Check your sleep quality</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Resources</Text>
        
        <TouchableOpacity 
          style={styles.resourceCard} 
          onPress={() => navigation.navigate('MusicLibrary')}
        >
          <View style={styles.resourceContent}>
            <Image source={meditationIcon} style={styles.resourceIcon} />
            <View>
              <Text style={styles.resourceTitle}>Meditation & Music</Text>
              <Text style={styles.resourceDescription}>Calming sounds to help you focus</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.resourceCard} 
          onPress={() => navigation.navigate('TherapistList')}
        >
          <View style={styles.resourceContent}>
            <Image source={therapistIcon} style={styles.resourceIcon} />
            <View>
              <Text style={styles.resourceTitle}>Talk to a Therapist</Text>
              <Text style={styles.resourceDescription}>Book a session with an expert</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.resourceCard} 
          onPress={() => navigation.navigate('ContentLibrary')}
        >
          <View style={styles.resourceContent}>
            <Image source={readingIcon} style={styles.resourceIcon} />
            <View>
              <Text style={styles.resourceTitle}>Wellness Library</Text>
              <Text style={styles.resourceDescription}>Articles and resources</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationTitle}>Today's Inspiration</Text>
          <Text style={styles.inspirationQuote}>
            "The greatest glory in living lies not in never falling, but in rising every time we fall."
          </Text>
          <Image source={inspirationIcon} style={styles.inspirationImage} />
        </View>
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
    padding: 20 
  },
  greeting: { 
    fontSize: 22, 
    fontWeight: '600', 
    marginBottom: 5,
    color: '#333333'
  },
  question: { 
    fontSize: 16, 
    marginBottom: 15,
    color: '#666666'
  },
  moodContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  moodOption: {
    alignItems: 'center',
    marginRight: 15,
  },
  moodIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  moodText: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 10,
    color: '#333333'
  },
  trackingCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  trackingCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  cardIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: '500',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
  },
  resourceCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  resourceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666666',
  },
  inspirationCard: {
    backgroundColor: '#FFE2E2',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  inspirationTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  inspirationQuote: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 15,
    color: '#333333',
  },
  inspirationImage: {
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
  },
});

export default HomeScreen;