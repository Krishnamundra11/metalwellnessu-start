import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface TherapistProps {
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

const TherapyBookingScreen = ({ navigation, route }: any) => {
  const { therapist } = route.params as { therapist: TherapistProps };
  const [selectedDay, setSelectedDay] = useState<string>('THU');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [sessionType, setSessionType] = useState<string>('Online Session');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // Get current date and next days
  const getCurrentWeek = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const today = new Date();
    const week = [];

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      week.push({
        day: days[nextDay.getDay()],
        date: nextDay.getDate(),
      });
    }

    return week;
  };

  const week = getCurrentWeek();

  // Find selected day's available slots
  const availableSlots = therapist.availability.find(
    (day) => day.day === selectedDay
  )?.slots || [];

  const handleConfirmBooking = () => {
    setShowConfirmationModal(false);
    setShowThankYouModal(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Therapist</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileSection}>
          <Image source={{ uri: therapist.image }} style={styles.profileImage} />
          <Text style={styles.therapistName}>{therapist.name}</Text>
          <Text style={styles.therapistSpecialty}>{therapist.specialty}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>{therapist.rating}</Text>
            <Text style={styles.reviewText}>({therapist.reviews} reviews)</Text>
          </View>
          
          <TouchableOpacity style={styles.consultButton}>
            <Ionicons name="videocam" size={16} color="#FFFFFF" />
            <Text style={styles.consultButtonText}>Video Consultation Available</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutText}>{therapist.description}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expertise</Text>
          <View style={styles.categoriesContainer}>
            {therapist.categories.map((category) => (
              <View key={category} style={styles.categoryChip}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Fee</Text>
          <View style={styles.feeContainer}>
            <Text style={styles.feeAmount}>₹ {therapist.fee}</Text>
            <Text style={styles.feeNote}>Per 45 minutes consultation</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time Slots</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.daysContainer}
          >
            {week.map((day) => (
              <TouchableOpacity 
                key={day.day} 
                style={[
                  styles.dayButton,
                  selectedDay === day.day && styles.selectedDayButton
                ]}
                onPress={() => setSelectedDay(day.day)}
              >
                <Text style={[
                  styles.dayText,
                  selectedDay === day.day && styles.selectedDayText
                ]}>
                  {day.day}
                </Text>
                <Text style={[
                  styles.dateText,
                  selectedDay === day.day && styles.selectedDayText
                ]}>
                  {day.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <Text style={styles.timeSlotTitle}>Available Slots</Text>
          
          <View style={styles.timeSlotContainer}>
            {availableSlots.length > 0 ? (
              availableSlots.map((slot) => (
                <TouchableOpacity 
                  key={slot} 
                  style={[
                    styles.timeSlot,
                    selectedTimeSlot === slot && styles.selectedTimeSlot
                  ]}
                  onPress={() => setSelectedTimeSlot(slot)}
                >
                  <Text style={[
                    styles.timeSlotText,
                    selectedTimeSlot === slot && styles.selectedTimeSlotText
                  ]}>
                    {slot}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noSlotsText}>No slots available for this day</Text>
            )}
          </View>
        </View>
        
        <View style={styles.sessionTypeSection}>
          <Text style={styles.sectionTitle}>Session Type</Text>
          <View style={styles.sessionTypeContainer}>
            <TouchableOpacity 
              style={[
                styles.sessionTypeButton,
                sessionType === 'Online Session' && styles.selectedSessionType
              ]}
              onPress={() => setSessionType('Online Session')}
            >
              <Text style={[
                styles.sessionTypeText,
                sessionType === 'Online Session' && styles.selectedSessionTypeText
              ]}>
                Online Session
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.sessionTypeButton,
                sessionType === 'In-Person Visit' && styles.selectedSessionType
              ]}
              onPress={() => setSessionType('In-Person Visit')}
            >
              <Text style={[
                styles.sessionTypeText,
                sessionType === 'In-Person Visit' && styles.selectedSessionTypeText
              ]}>
                In-Person Visit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.bookButton, (!selectedTimeSlot) && styles.disabledButton]}
            onPress={() => selectedTimeSlot && setShowConfirmationModal(true)}
            disabled={!selectedTimeSlot}
          >
            <Text style={styles.bookButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Confirmation Modal */}
      <Modal
        visible={showConfirmationModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.confirmationModal}>
            <Text style={styles.confirmationTitle}>Confirm Booking</Text>
            
            <View style={styles.confirmationDetails}>
              <View style={styles.confirmationRow}>
                <Text style={styles.confirmationLabel}>Therapist:</Text>
                <Text style={styles.confirmationValue}>{therapist.name}</Text>
              </View>
              
              <View style={styles.confirmationRow}>
                <Text style={styles.confirmationLabel}>Date:</Text>
                <Text style={styles.confirmationValue}>
                  {selectedDay}, {new Date().toLocaleDateString()}
                </Text>
              </View>
              
              <View style={styles.confirmationRow}>
                <Text style={styles.confirmationLabel}>Time:</Text>
                <Text style={styles.confirmationValue}>{selectedTimeSlot}</Text>
              </View>
              
              <View style={styles.confirmationRow}>
                <Text style={styles.confirmationLabel}>Session:</Text>
                <Text style={styles.confirmationValue}>{sessionType}</Text>
              </View>
              
              <View style={styles.confirmationRow}>
                <Text style={styles.confirmationLabel}>Fee:</Text>
                <Text style={styles.confirmationValue}>₹ {therapist.fee}</Text>
              </View>
            </View>
            
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setShowConfirmationModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.confirmButton}
                onPress={handleConfirmBooking}
              >
                <Text style={styles.confirmButtonText}>Confirm Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      
      {/* Thank You Modal */}
      <Modal
        visible={showThankYouModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.thankYouModal}>
            <View style={styles.thankYouHeader}>
              <Image source={{ uri: therapist.image }} style={styles.thankYouImage} />
              <View style={styles.thumbsUpContainer}>
                <Ionicons name="thumbs-up" size={32} color="#FF7E6B" />
              </View>
            </View>
            
            <Text style={styles.thankYouTitle}>Thank You!</Text>
            <Text style={styles.thankYouText}>
              Your Appointment Scheduled at {selectedTimeSlot} with {therapist.name} on {selectedDay}
            </Text>
            
            <TouchableOpacity 
              style={styles.doneButton}
              onPress={() => {
                setShowThankYouModal(false);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.calendarButton}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.calendarButtonText}>Add to Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  therapistName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  therapistSpecialty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
    marginRight: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#999',
  },
  consultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7E6B',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  consultButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryChip: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feeAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  feeNote: {
    fontSize: 14,
    color: '#999',
  },
  daysContainer: {
    paddingVertical: 8,
  },
  dayButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#F5F5F5',
  },
  selectedDayButton: {
    backgroundColor: '#FF7E6B',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  timeSlotTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 12,
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginRight: 12,
    marginBottom: 12,
  },
  selectedTimeSlot: {
    backgroundColor: '#FF7E6B',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedTimeSlotText: {
    color: '#FFFFFF',
  },
  noSlotsText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
  sessionTypeSection: {
    marginBottom: 24,
  },
  sessionTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sessionTypeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginRight: 8,
  },
  selectedSessionType: {
    backgroundColor: '#FF7E6B',
  },
  sessionTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  selectedSessionTypeText: {
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginBottom: 32,
  },
  bookButton: {
    backgroundColor: '#FF7E6B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#FFB3AA',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  confirmationModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  confirmationTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  confirmationDetails: {
    marginBottom: 24,
  },
  confirmationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  confirmationLabel: {
    fontSize: 15,
    color: '#666',
  },
  confirmationValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FF7E6B',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  thankYouModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  thankYouHeader: {
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  thankYouImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  thumbsUpContainer: {
    position: 'absolute',
    right: -5,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  thankYouTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  thankYouText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  doneButton: {
    backgroundColor: '#FF7E6B',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  calendarButtonText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  }
});

export default TherapyBookingScreen;