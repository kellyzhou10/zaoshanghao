// app/(tabs)/profilePage.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Define types for scores and times
interface Score {
  daily: number;
  monthly: number;
}

interface Time {
  alarm: string;
  wakeUp: string;
}

const ProfilePage: React.FC = () => {
  // Dummy data for scores and times
  const scores: Score = {
    daily: 85,
    monthly: 1200,
  };

  const times: Time = {
    alarm: '7:00 AM',
    wakeUp: '7:15 AM',
  };

  return (
    <View style={styles.container}>
      {/* Exit Button (Top Right) */}
      <TouchableOpacity style={styles.exitButton}>
        <Text style={styles.exitText}>X</Text>
      </TouchableOpacity>

      {/* Profile Image */}
      <Image
        source={require('../../assets/images/profile_image.jpg')} // Adjusted path to image
        style={styles.profileImage}
      />

      {/* Username */}
      <Text style={styles.username}>JohnDoe123</Text>

      {/* Daily and Monthly Scores */}
      <View style={styles.scoresContainer}>
        <View style={styles.scoreSection}>
          <Text style={styles.scoreTitle}>Daily Score</Text>
          <Text style={styles.scoreValue}>{scores.daily}</Text>
        </View>
        <View style={styles.scoreSection}>
          <Text style={styles.scoreTitle}>Monthly Score</Text>
          <Text style={styles.scoreValue}>{scores.monthly}</Text>
        </View>
      </View>

      {/* Alarm Time and Wake-Up Time */}
      <View style={styles.timeContainer}>
        <View style={styles.timeSection}>
          <Text style={styles.timeTitle}>Alarm Time</Text>
          <Text style={styles.timeValue}>{times.alarm}</Text>
        </View>
        <View style={styles.timeSection}>
          <Text style={styles.timeTitle}>Time Woken Up</Text>
          <Text style={styles.timeValue}>{times.wakeUp}</Text>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark mode background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  exitText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
    marginBottom: 20,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  scoreSection: {
    alignItems: 'center',
  },
  scoreTitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 5,
  },
  scoreValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  timeSection: {
    alignItems: 'center',
    marginVertical: 10,
  },
  timeTitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 5,
  },
  timeValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfilePage;