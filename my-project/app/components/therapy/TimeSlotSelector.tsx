import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface TimeSlotSelectorProps {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (slot: string) => void;
  availableSlots: string[];
  weekDays: { day: string; date: number }[];
}

const TimeSlotSelector = ({
  selectedDay,
  setSelectedDay,
  selectedTimeSlot,
  setSelectedTimeSlot,
  availableSlots,
  weekDays
}: TimeSlotSelectorProps) => {
  return (
    <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {weekDays.map((day) => (
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
  );
};

const styles = StyleSheet.create({
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
});

export default TimeSlotSelector;