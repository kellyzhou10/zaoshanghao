// app/(tabs)/index.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';

// Import icons and images
import friendsIcon from '../../assets/images/friends_icon.png';
import profileIcon from '../../assets/images/profile_icon.png';
import homeIcon from '../../assets/images/home_icon.png';
import calendarIcon from '../../assets/images/calendar_icon.png';
import settingsIcon from '../../assets/images/settings_icon.png';
import notificationIcon from '../../assets/images/notification_icon.png';
import alarmClock from '../../assets/images/alarm_clock.png'; // Alarm clock image

const Index = () => {
  // State for time, AM/PM, and timezone
  const [time, setTime] = useState('8:00');
  const [period, setPeriod] = useState('AM');
  const [timezone, setTimezone] = useState('PST');

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const [modalType, setModalType] = useState<'time' | 'timezone'>('time'); // Tracks what's being edited

  // Get current day and date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = new Date();
  const dayName = days[today.getDay()];
  const date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

  // Handle opening the modal
  const openModal = (type: 'time' | 'timezone') => {
    setModalType(type);
    setModalInput(type === 'time' ? time : timezone); // Pre-fill input based on type
    setIsModalVisible(true);
  };

  // Handle saving changes from the modal
  const saveModalInput = () => {
    if (modalType === 'time') {
      setTime(modalInput);
    } else if (modalType === 'timezone') {
      setTimezone(modalInput);
    }
    setIsModalVisible(false);
  };

  // Open notifications
  const openNotifications = () => {
    Alert.alert('Notifications', 'This is where you can display messages for the user.');
  };

  return (
    <View style={styles.container}>
      {/* Notification Icon (Top Right) */}
      <TouchableOpacity style={styles.notificationButton} onPress={openNotifications}>
        <Image source={notificationIcon} style={styles.notificationIcon} />
      </TouchableOpacity>

      {/* Day and Date */}
      <Text style={styles.dayText}>{dayName}</Text>
      <Text style={styles.dateText}>{date}</Text>

      {/* Alarm Clock Image */}
      <TouchableOpacity onPress={() => openModal('time')}>
        <Image source={alarmClock} style={styles.alarmClock} />
      </TouchableOpacity>

      {/* Time Display */}
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={() => openModal('time')}>
          <Text style={styles.timeText}>{time}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPeriod(period === 'AM' ? 'PM' : 'AM')}>
          <Text style={styles.periodText}>{period}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal('timezone')}>
          <Text style={styles.timezoneText}>{timezone}</Text>
        </TouchableOpacity>
      </View>

      {/* "Let's Play!" Button */}
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => {
          // Open NY Times Wordle site
          Linking.openURL('https://www.nytimes.com/games/wordle/index.html');
        }}
      >
        <Text style={styles.playButtonText}>Let's Play!</Text>
      </TouchableOpacity>

      {/* Custom Modal */}
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
              placeholder={modalType === 'time' ? 'Enter time (e.g., 8:00)' : 'Enter timezone (e.g., PST)'}
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={saveModalInput}>
                <Text style={styles.modalButtonText}>Save</Text>
              </Pressable>
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
    justifyContent: 'space-between',
    padding: 20,
  },
  notificationButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  dateText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  alarmClock: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  periodText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  timezoneText: {
    fontSize: 16,
    color: '#555',
  },
  playButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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

export default Index;