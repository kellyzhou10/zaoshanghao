// app/(tabs)/index.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';

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

  // Handle tapping on time components
  const handleTimeChange = () => {
    const newTime = prompt('Enter the time (e.g., 8:00):', time);
    if (newTime) setTime(newTime);
  };

  const handlePeriodChange = () => {
    const newPeriod = period === 'AM' ? 'PM' : 'AM';
    setPeriod(newPeriod);
  };

  const handleTimezoneChange = () => {
    const newTimezone = prompt('Enter the timezone (e.g., PST):', timezone);
    if (newTimezone) setTimezone(newTimezone);
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
      <TouchableOpacity onPress={handleTimeChange}>
        <Image source={alarmClock} style={styles.alarmClock} />
      </TouchableOpacity>

      {/* Time Display */}
      <View style={styles.timeContainer}>
        <TouchableOpacity onPress={handleTimeChange}>
          <Text style={styles.timeText}>{time}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePeriodChange}>
          <Text style={styles.periodText}>{period}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTimezoneChange}>
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