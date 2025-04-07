import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import QuestionnaireScreen from '../screens/Tracking/QuestionnaireScreen';
import MusicLibraryScreen from '../screens/MusicLibrary/MusicLibraryScreen';
import  TherapyBookingScreen  from '../screens/Therapy/TherapyBookingScreen';
import TherapistListScreen from '../screens/Therapy/TherapistListScreen';
import ContentLibraryScreen from '../screens/ContentLibrary/ContentLibraryScreen';


// Import our new screens
import {
  StressQuestionnaireScreen,
  AcademicQuestionnaireScreen,
  SleepQuestionnaireScreen
} from '../screens/Tracking/QuestionnaireScreens';

import {
  StressScoreResultScreen,
  AcademicScoreResultScreen,
  SleepScoreResultScreen
} from '../screens/Tracking/ScoreResultScreens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 0, // for Android
        shadowOpacity: 0, // for iOS
      },
      headerTitleStyle: {
        fontWeight: '600',
        color: '#333333',
      },
      cardStyle: { backgroundColor: '#FFFFFF' }
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Wellness Tracker' }}
    />

    {/* Original routes */}
    <Stack.Screen name="Tracking" component={QuestionnaireScreen} />
    <Stack.Screen name="MusicLibrary" component={MusicLibraryScreen} />
    <Stack.Screen name="TherapyBooking" component={TherapyBookingScreen} />
    <Stack.Screen name="TherapistList" component={TherapistListScreen} />
    <Stack.Screen name="ContentLibrary" component={ContentLibraryScreen} />

    {/* New routes for tracking domains */}
    <Stack.Screen
      name="StressQuestionnaire"
      component={StressQuestionnaireScreen}
      options={{ title: 'Stress Assessment' }}
    />
    <Stack.Screen
      name="AcademicQuestionnaire"
      component={AcademicQuestionnaireScreen}
      options={{ title: 'Academic Assessment' }}
    />
    <Stack.Screen
      name="SleepQuestionnaire"
      component={SleepQuestionnaireScreen}
      options={{ title: 'Sleep Assessment' }}
    />

    {/* Score result screens */}
    <Stack.Screen
      name="StressScoreResult"
      component={StressScoreResultScreen}
      options={{ title: 'Stress Score' }}
    />
    <Stack.Screen
      name="AcademicScoreResult"
      component={AcademicScoreResultScreen}
      options={{ title: 'Acadcemic Score', headerLeft: () => null }}
    />
    <Stack.Screen
      name="SleepScoreResult"
      component={SleepScoreResultScreen}
      options={{ title: 'Sleep Score', headerLeft: () => null }}
    />
  </Stack.Navigator>

);

export default AppNavigator;