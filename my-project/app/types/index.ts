// types/index.ts

export default interface Question {
    id: number;
    text: string;
    options: string[];
  }
  
  export interface Answer {
    questionId: number;
    selectedOption: number;
  }
  
  export interface ScoreResult {
    score: number;
    level: string;
    color: string;
    recommendations: string[];
  }
  
  export interface TrackingDomain {
    id: string;
    name: string;
    color: string;
    icon: any; // Replace with proper image type if needed
    description: string;
  }
  
  export interface MoodOption {
    id: string;
    name: string;
    icon: any; // Replace with proper image type if needed
  }
  export interface TherapistProps {
    id: number;
    name: string;
    specialty: string;
    rating: number;
    reviews: number;
    image: string;
    badge: string | null;
    categories: string[];
    experience: string;
    description: string;
    fee: number;
    availability: {
      day: string;
      slots: string[];
    }[];
  }