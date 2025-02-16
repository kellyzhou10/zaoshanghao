import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/search';

const Friends = () => {
  const [searchText, setSearchText] = useState('');
  const [showDailyLeaderboard, setShowDailyLeaderboard] = useState(true); // State to toggle between daily and monthly
  
  // Friends with daily and monthly scores
  const friends = [
    { name: 'John', dailyScore: 85, monthlyScore: 260 },
    { name: 'Jane', dailyScore: 92, monthlyScore: 280 },
    { name: 'Tom', dailyScore: 78, monthlyScore: 230 },
    { name: 'Alice', dailyScore: 91, monthlyScore: 275 },
    { name: 'Bob', dailyScore: 88, monthlyScore: 270 },
    { name: 'Charlie', dailyScore: 95, monthlyScore: 300 },
    { name: 'Diana', dailyScore: 80, monthlyScore: 245 },
    { name: 'Ethan', dailyScore: 72, monthlyScore: 220 },
    { name: 'Fiona', dailyScore: 89, monthlyScore: 265 },
    { name: 'George', dailyScore: 76, monthlyScore: 250 },
    { name: 'Hannah', dailyScore: 99, monthlyScore: 310 },
    { name: 'Irene', dailyScore: 84, monthlyScore: 255 },
    { name: 'Jack', dailyScore: 67, monthlyScore: 210 },
    { name: 'Katie', dailyScore: 92, monthlyScore: 278 },
    { name: 'Leo', dailyScore: 79, monthlyScore: 240 },
    { name: 'Megan', dailyScore: 85, monthlyScore: 265 },
    { name: 'Nina', dailyScore: 91, monthlyScore: 270 },
    { name: 'Oscar', dailyScore: 94, monthlyScore: 285 },
    { name: 'Paul', dailyScore: 81, monthlyScore: 260 },
    { name: 'Quincy', dailyScore: 72, monthlyScore: 230 },
    { name: 'Rachel', dailyScore: 88, monthlyScore: 275 },
    { name: 'Samuel', dailyScore: 78, monthlyScore: 240 },
    { name: 'Tina', dailyScore: 95, monthlyScore: 290 },
    { name: 'Ursula', dailyScore: 93, monthlyScore: 285 },
    { name: 'Victor', dailyScore: 74, monthlyScore: 220 },
    { name: 'Wendy', dailyScore: 90, monthlyScore: 275 },
    { name: 'Xander', dailyScore: 83, monthlyScore: 250 },
    { name: 'Yara', dailyScore: 66, monthlyScore: 215 },
    { name: 'Zane', dailyScore: 77, monthlyScore: 240 },
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  // Filter based on search text
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort the friends based on the selected leaderboard type (daily or monthly)
  const sortedFriends = filteredFriends.sort((a, b) => {
    if (showDailyLeaderboard) {
      return b.dailyScore - a.dailyScore; // Sort by daily score
    } else {
      return b.monthlyScore - a.monthlyScore; // Sort by monthly score
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Search bar */}
      <SearchBar data={friends} onSearch={handleSearch} />

      {/* Toggle Buttons for Leaderboard Type */}
      <View style={styles.toggleButtonContainer}>
        <Button
          title="Daily Leaderboard"
          onPress={() => setShowDailyLeaderboard(true)}
          color={showDailyLeaderboard ? 'blue' : 'gray'} // Highlight active button
        />
        <Button
          title="Monthly Leaderboard"
          onPress={() => setShowDailyLeaderboard(false)}
          color={!showDailyLeaderboard ? 'blue' : 'gray'} // Highlight active button
        />
      </View>

      {/* Leaderboard */}
      <FlatList
        data={sortedFriends}
        keyExtractor={(item, index) => index.toString()} // use index as the key for each item
        renderItem={({ item, index }) => (
          <Text style={styles.friendText}>
            {index + 1}. {item.name} - {showDailyLeaderboard ? `Daily Score: ${item.dailyScore}` : `Monthly Score: ${item.monthlyScore}`}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  friendText: {
    fontSize: 18,
    padding: 10,
  },
  toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});

export default Friends;