// app/(tabs)/index.tsx
import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { CalendarContext } from '../../context/CalendarContext';

const Index = () => {
  // Access the shared state from the context
  const { times } = useContext(CalendarContext);

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

  // Current day's time, AM/PM, and timezone
  const currentTime = times[dayName]?.time || '8:00';
  const currentPeriod = times[dayName]?.period || 'AM';
  const currentTimezone = times[dayName]?.timezone || 'PST';

  // Open notifications
  const openNotifications = () => {
    Alert.alert('Notifications', 'This is where you can display messages for the user.');
  };

  return (
    <View style={styles.container}>
      {/* Notification Icon (Top Right) */}
      <TouchableOpacity style={styles.notificationButton} onPress={openNotifications}>
        <Image
          source={require('../../assets/images/notification_icon.png')}
          style={styles.notificationIcon}
        />
      </TouchableOpacity>

      {/* Day and Date */}
      <Text style={styles.dayText}>{dayName}</Text>
      <Text style={styles.dateText}>{date}</Text>

      {/* Alarm Clock Image */}
      <Image
        source={require('../../assets/images/alarm_clock.png')}
        style={styles.alarmClock}
      />

      {/* Time Display */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.periodText}>{currentPeriod}</Text>
        <Text style={styles.timezoneText}>{currentTimezone}</Text>
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
});

export default Index;