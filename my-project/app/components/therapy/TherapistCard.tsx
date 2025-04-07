import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TherapistProps } from '../../types';

interface TherapistCardProps {
  therapist: TherapistProps;
  onPress: () => void;
}

const TherapistCard = ({ therapist, onPress }: TherapistCardProps) => {
  return (
    <TouchableOpacity style={styles.therapistCard} onPress={onPress}>
      <View style={styles.therapistHeader}>
        <Image source={{ uri: therapist.image }} style={styles.therapistImage} />
        <View style={styles.therapistInfo}>
          <Text style={styles.therapistName}>{therapist.name}</Text>
          <Text style={styles.therapistSpecialty}>{therapist.specialty}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>{therapist.rating}</Text>
            <Text style={styles.reviewText}>({therapist.reviews} reviews)</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      {therapist.badge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{therapist.badge}</Text>
        </View>
      )}
      
      <View style={styles.appointmentInfo}>
        <View style={styles.appointmentRow}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.appointmentText}>
            First available: Today, 3:30 PM
          </Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.viewButton} onPress={onPress}>
        <Text style={styles.viewButtonText}>View Profile</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  therapistCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  therapistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  therapistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  therapistInfo: {
    flex: 1,
  },
  therapistName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  therapistSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
    marginRight: 4,
  },
  reviewText: {
    fontSize: 12,
    color: '#999',
  },
  favoriteButton: {
    padding: 4,
  },
  badgeContainer: {
    backgroundColor: '#FFE2E2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#FF7E6B',
    fontWeight: '500',
  },
  appointmentInfo: {
    marginBottom: 16,
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  appointmentText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  viewButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF7E6B',
  },
});

export default TherapistCard;