// StressQuestionnaireScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const StressQuestionnaireScreen = ({ navigation }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "How often do you feel overwhelmed by your workload?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      id: 2,
      text: "How difficult is it for you to relax when you want to?",
      options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    },
    {
      id: 3,
      text: "How often do you feel irritable or anxious?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      id: 4,
      text: "How often do you have trouble concentrating?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"]
    },
    {
      id: 5,
      text: "How would you rate your overall stress level right now?",
      options: ["Very Low", "Low", "Moderate", "High", "Very High"]
    }
  ];

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score (simplified algorithm)
      const score = calculateStressScore(newAnswers);
      navigation.navigate('StressScoreResult', { score });
    }
  };
  
  const calculateStressScore = (responses: number[]): number => {
    // Simplified algorithm - each answer contributes 0-4 points
    // Higher index = higher stress
    const sum = responses.reduce((acc, val) => acc + val, 0);
    // Convert to 0-100 scale
    return Math.min(Math.round((sum / (responses.length * 4)) * 100), 100);
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                {width: `${((currentQuestion + 1) / questions.length) * 100}%`}
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
        </View>
        
        <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
        
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              answers[currentQuestion] === index ? styles.selectedOption : {}
            ]}
            onPress={() => handleSelectOption(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// AcademicQuestionnaireScreen.tsx
const AcademicQuestionnaireScreen = ({ navigation }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "How often do you complete your academic assignments on time?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 2,
      text: "How well do you understand the material presented in your classes?",
      options: ["Not at all", "Slightly", "Moderately", "Very well", "Completely"]
    },
    {
      id: 3,
      text: "How often do you participate in class discussions?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      id: 4,
      text: "How satisfied are you with your academic performance?",
      options: ["Very unsatisfied", "Unsatisfied", "Neutral", "Satisfied", "Very satisfied"]
    },
    {
      id: 5,
      text: "How much time do you spend studying each day?",
      options: ["Less than 1 hour", "1-2 hours", "2-3 hours", "3-4 hours", "More than 4 hours"]
    }
  ];

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // For academic score, higher is better (unlike stress)
      const score = calculateAcademicScore(newAnswers);
      navigation.navigate('AcademicScoreResult', { score });
    }
  };
  
  const calculateAcademicScore = (responses: number[]): number => {
    // For academic performance, higher answers are better
    const sum = responses.reduce((acc, val) => acc + val, 0);
    // Convert to 0-100 scale
    return Math.min(Math.round((sum / (responses.length * 4)) * 100), 100);
  };
  
  // The rest of the component is similar to StressQuestionnaireScreen
  // ...
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                {width: `${((currentQuestion + 1) / questions.length) * 100}%`}
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
        </View>
        
        <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
        
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              answers[currentQuestion] === index ? styles.selectedOption : {}
            ]}
            onPress={() => handleSelectOption(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// SleepQuestionnaireScreen.tsx
const SleepQuestionnaireScreen = ({ navigation }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "How many hours of sleep did you get last night?",
      options: ["Less than 4", "4-5", "5-6", "6-7", "7-8", "More than 8"]
    },
    {
      id: 2,
      text: "How would you rate the quality of your sleep?",
      options: ["Very poor", "Poor", "Fair", "Good", "Excellent"]
    },
    {
      id: 3,
      text: "How long does it typically take you to fall asleep?",
      options: ["Over 60 minutes", "45-60 minutes", "30-45 minutes", "15-30 minutes", "Less than 15 minutes"]
    },
    {
      id: 4,
      text: "How often do you wake up during the night?",
      options: ["More than 3 times", "2-3 times", "Once", "Rarely", "Never"]
    },
    {
      id: 5,
      text: "How refreshed do you feel when you wake up?",
      options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"]
    }
  ];

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateSleepScore(newAnswers);
      navigation.navigate('SleepScoreResult', { score });
    }
  };
  
  const calculateSleepScore = (responses: number[]): number => {
    // Sleep score calculation (tailored to the sleep questions)
    const sum = responses.reduce((acc, val) => acc + val, 0);
    // Convert to 0-100 scale
    return Math.min(Math.round((sum / (responses.length * (questions[0].options.length - 1))) * 100), 100);
  };
  
  // The rest of the component is similar to the others
  // ...
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                {width: `${((currentQuestion + 1) / questions.length) * 100}%`}
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
        </View>
        
        <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
        
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              answers[currentQuestion] === index ? styles.selectedOption : {}
            ]}
            onPress={() => handleSelectOption(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
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
    padding: 20 
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'right',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    color: '#333333',
  },
  optionButton: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedOption: {
    backgroundColor: '#D0F0C0',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
});

export { StressQuestionnaireScreen, AcademicQuestionnaireScreen, SleepQuestionnaireScreen };