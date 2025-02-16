// app/(tabs)/profilePage.tsx
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
import { SettingsContext } from '../../context/SettingsContext';

const ProfilePage = () => {
  // Access shared states
  const { times } = useContext(CalendarContext);
  const { displayWakeUpTime } = useContext(SettingsContext);

  // State for editable name
  const [name, setName] = useState('John Doe');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Get current day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = days[today.getDay()];

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../../assets/images/profile_image.jpg')}
        style={styles.profileImage}
      />

      {/* Editable Name */}
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text style={styles.nameText}>{name}</Text>
      </TouchableOpacity>

      {/* Wake-Up Time */}
      {displayWakeUpTime && (
        <View style={styles.wakeUpTimeContainer}>
          <Text style={styles.wakeUpTimeLabel}>Wake-Up Time:</Text>
          <Text style={styles.wakeUpTime}>
            {times[dayName]?.time || '8:00'} {times[dayName]?.period || 'AM'}
          </Text>
        </View>
      )}

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioLabel}>Bio:</Text>
        <Text style={styles.bioText}>A passionate early riser who loves mornings!</Text>
      </View>

      {/* Modal for Editing Name */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Name</Text>
            <TextInput
              style={styles.modalInput}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  wakeUpTimeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  wakeUpTimeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wakeUpTime: {
    fontSize: 20,
    color: '#333',
  },
  bioContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bioLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bioText: {
    fontSize: 16,
    color: '#555',
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

export default ProfilePage;