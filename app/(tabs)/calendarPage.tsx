// app/(tabs)/calendarPage.tsx
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import { CalendarContext } from '../../context/CalendarContext';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CalendarPage = () => {
  // Access the shared state and setter from the context
  const { times, setTimes } = useContext(CalendarContext);

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [modalInput, setModalInput] = useState('');
  const [modalType, setModalType] = useState<'time' | 'timezone'>('time');

  // Open modal for editing
  const openModal = (day: string, type: 'time' | 'timezone') => {
    setSelectedDay(day);
    setModalType(type);
    setModalInput(times[day]?.[type === 'time' ? 'time' : 'timezone'] || '');
    setIsModalVisible(true);
  };

  // Save changes from modal
  const saveModalInput = () => {
    if (selectedDay) {
      setTimes((prev) => ({
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          [modalType]: modalInput,
        },
      }));
    }
    setIsModalVisible(false);
  };

  // Toggle AM/PM
  const togglePeriod = (day: string) => {
    setTimes((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        period: prev[day]?.period === 'AM' ? 'PM' : 'AM',
      },
    }));
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../../assets/images/profile_image.jpg')}
        style={styles.profileImage}
      />

      {/* Days Grid */}
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day) => (
          <TouchableOpacity
            key={day}
            style={styles.dayBox}
            onPress={() => setSelectedDay(day)}
          >
            {/* Highlight Selected Day */}
            {selectedDay === day && <View style={styles.selectedDayOverlay} />}
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.timeText}>
              {times[day]?.time || '8:00'} {times[day]?.period || 'AM'}
            </Text>
            <Text style={styles.timezoneText}>{times[day]?.timezone || 'PST'}</Text>
            <TouchableOpacity
              onPress={() => openModal(day, 'time')}
              style={styles.editButton}
            >
              <Text style={styles.editButtonText}>Edit Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => togglePeriod(day)}
              style={styles.toggleButton}
            >
              <Text style={styles.toggleButtonText}>
                {times[day]?.period === 'AM' ? 'Switch to PM' : 'Switch to AM'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openModal(day, 'timezone')}
              style={styles.editButton}
            >
              <Text style={styles.editButtonText}>Edit Timezone</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal for Editing */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {modalType === 'time' ? 'Edit Time' : 'Edit Timezone'}
            </Text>
            <TextInput
              style={styles.modalInput}
              value={modalInput}
              onChangeText={setModalInput}
              placeholder={
                modalType === 'time' ? 'Enter time (e.g., 8:00)' : 'Enter timezone (e.g., PST)'
              }
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={saveModalInput}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayBox: {
    width: 100,
    height: 120,
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  timezoneText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  editButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  toggleButton: {
    backgroundColor: '#ff9900',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CalendarPage;