import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScoreResultProps {
  navigation: any;
  route: {
    params: {
      score: number;
    }
  };
}

// StressScoreResultScreen.tsx
const StressScoreResultScreen = ({ navigation, route }: ScoreResultProps) => {
  const { score } = route.params;
  
  // Determine stress level category and color
  let stressLevel = '';
  let levelColor = '';
  let recommendations: string[] = [];
  
  if (score < 30) {
    stressLevel = 'Low';
    levelColor = '#4CAF50'; // Green
    recommendations = [
      'Maintain your healthy coping strategies',
      'Continue regular exercise',
      'Practice mindfulness to stay centered',
    ];
  } else if (score < 60) {
    stressLevel = 'Moderate';
    levelColor = '#FFC107'; // Yellow/Amber
    recommendations = [
      'Breathe deeply, relax completely',
      'Move your body, clear your mind',
      'Pause, reflect, let go',
      'Practice daily relaxation exercises',
    ];
  } else {
    stressLevel = 'High';
    levelColor = '#F44336'; // Red
    recommendations = [
      'Breathe deeply, relax completely',
      'Move your body, clear your mind',
      'Pause, reflect, let go',
      'Practice daily relaxation exercises',
      'Consider talking to a counselor',
      'Prioritize your mental wellbeing',
    ];
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Your Stress Score</Text>
        
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
        
        <Text style={[styles.levelText, { color: levelColor }]}>
          {stressLevel} Stress Level
        </Text>
        
        <Text style={styles.descriptionText}>
          You are feeling pretty stressed! Here are some tips to improve your mood:
        </Text>
        
        <View style={styles.tipsContainer}>
          {recommendations.map((tip, index) => (
            <View key={index} style={styles.tipRow}>
              <Text style={styles.tipText}>• {tip}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity 
          style={styles.trackButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.trackButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// AcademicScoreResultScreen.tsx
const AcademicScoreResultScreen = ({ navigation, route }: ScoreResultProps) => {
  const { score } = route.params;
  
  // Determine academic performance level and color
  let performanceLevel = '';
  let levelColor = '';
  let recommendations: string[] = [];
  
  if (score < 30) {
    performanceLevel = 'Needs Improvement';
    levelColor = '#F44336'; // Red
    recommendations = [
      'Establish a consistent study schedule',
      'Break down tasks into smaller chunks',
      'Seek help from teachers or tutors',
      'Try different study techniques',
      'Join a study group for support',
    ];
  } else if (score < 70) {
    performanceLevel = 'Average';
    levelColor = '#FFC107'; // Yellow/Amber
    recommendations = [
      'Plan ahead, study smarter',
      'Try focused study sessions',
      'Review class notes regularly',
      'Practice active learning techniques',
    ];
  } else {
    performanceLevel = 'Excellent';
    levelColor = '#4CAF50'; // Green
    recommendations = [
      'Plan well, study better',
      'Stay focused, learn actively',
      'Review often, remember longer',
      'Consider mentoring others to reinforce learning',
    ];
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Your Academic Score</Text>
        
        <View style={[styles.scoreCircle, { backgroundColor: '#E2FFE2' }]}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
        
        <Text style={[styles.levelText, { color: levelColor }]}>
          {performanceLevel} Performance
        </Text>
        
        <Text style={styles.descriptionText}>
          You are performing better today! Here are some tips to improve your academic performance:
        </Text>
        
        <View style={styles.tipsContainer}>
          {recommendations.map((tip, index) => (
            <View key={index} style={styles.tipRow}>
              <Text style={styles.tipText}>• {tip}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.trackButton, { backgroundColor: '#4CAF50' }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.trackButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// SleepScoreResultScreen.tsx
const SleepScoreResultScreen = ({ navigation, route }: ScoreResultProps) => {
  const { score } = route.params;
  
  // Determine sleep quality level and color
  let sleepLevel = '';
  let levelColor = '';
  let recommendations: string[] = [];
  
  if (score < 30) {
    sleepLevel = 'Poor';
    levelColor = '#F44336'; // Red
    recommendations = [
      'Establish a consistent sleep schedule',
      'Create a relaxing bedtime routine',
      'Limit screen time before bed',
      'Make your bedroom dark and quiet',
      'Avoid caffeine in the afternoon',
      'Consider talking to a doctor if issues persist',
    ];
  } else if (score < 70) {
    sleepLevel = 'Average';
    levelColor = '#FFC107'; // Yellow/Amber
    recommendations = [
      'Breathe deeply, relax completely',
      'Sleep well, study better',
      'Rest fully, wake refreshed',
      'Maintain a regular sleep schedule',
    ];
  } else {
    sleepLevel = 'Good';
    levelColor = '#4CAF50'; // Green
    recommendations = [
      'Maintain your healthy sleep habits',
      'Continue your regular sleep schedule',
      'Keep your bedroom environment optimal',
    ];
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Your Sleep Score</Text>
        
        <View style={[styles.scoreCircle, { backgroundColor: '#FFE8D6' }]}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
        
        <Text style={[styles.levelText, { color: levelColor }]}>
          {sleepLevel} Sleep Quality
        </Text>
        
        <Text style={styles.descriptionText}>
          You have slept less today. Here are some tips to improve your sleep:
        </Text>
        
        <View style={styles.tipsContainer}>
          {recommendations.map((tip, index) => (
            <View key={index} style={styles.tipRow}>
              <Text style={styles.tipText}>• {tip}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.trackButton, { backgroundColor: '#E67E22' }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.trackButtonText}>Back to Home</Text>
        </TouchableOpacity>
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
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333333',
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333333',
  },
  levelText: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666666',
    textAlign: 'center',
  },
  tipsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  tipRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 16,
    color: '#333333',
  },
  trackButton: {
    backgroundColor: '#FF7E6B',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  trackButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export  { StressScoreResultScreen, AcademicScoreResultScreen, SleepScoreResultScreen };