// app/(tabs)/calendarPage.tsx
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Picker,
} from 'react-native';
import { CalendarContext } from '../../context/CalendarContext';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timezones = ['PST', 'EST', 'CST', 'MST', 'GMT', 'UTC'];

const CalendarPage = () => {
  // Access the shared state and setter from the context
  const { times, setTimes } = useContext(CalendarContext);

  // State for modal and timezone picker
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [modalInput, setModalInput] = useState('');
  const [modalType, setModalType] = useState<'time' | 'timezone'>('time');
  const [selectedTimezone, setSelectedTimezone] = useState('PST');

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

  // Update timezone globally
  const updateGlobalTimezone = (timezone: string) => {
    setSelectedTimezone(timezone);
    setTimes((prev) =>
      Object.keys(prev).reduce(
        (acc, day) => ({
          ...acc,
          [day]: {
            ...prev[day],
            timezone,
          },
        }),
        {}
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Timezone Picker */}
      <View style={styles.timezoneContainer}>
        <Text style={styles.timezoneLabel}>Select Timezone:</Text>
        <Picker
          selectedValue={selectedTimezone}
          onValueChange={(itemValue) => updateGlobalTimezone(itemValue)}
          style={styles.timezonePicker}
        >
          {timezones.map((tz) => (
            <Picker.Item key={tz} label={tz} value={tz} />
          ))}
        </Picker>
      </View>

      {/* Days List */}
      <View style={styles.daysList}>
        {daysOfWeek.map((day) => (
          <View key={day} style={styles.dayRow}>
            <Text style={styles.dayText}>{day}</Text>
            <View style={styles.timeContainer}>
              <TouchableOpacity onPress={() => openModal(day, 'time')}>
                <Text style={styles.timeText}>{times[day]?.time || '8:00'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => togglePeriod(day)}>
                <Text style={styles.periodText}>{times[day]?.period || 'AM'}</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    padding: 20,
  },
  timezoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timezoneLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  timezonePicker: {
    height: 40,
    width: 150,
  },
  daysList: {
    flex: 1,
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    marginRight: 10,
  },
  periodText: {
    fontSize: 16,
    color: '#007bff',
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