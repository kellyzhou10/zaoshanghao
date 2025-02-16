import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/search';

const Friends = () => {
  const [searchText, setSearchText] = useState('');
  
  // Extended list of names
  const friends = [
    'John', 'Jane', 'Tom', 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George',
    'Hannah', 'Irene', 'Jack', 'Katie', 'Leo', 'Megan', 'Nina', 'Oscar', 'Paul', 'Quincy',
    'Rachel', 'Samuel', 'Tina', 'Ursula', 'Victor', 'Wendy', 'Xander', 'Yara', 'Zane',
    'Amelia', 'Blake', 'Cameron', 'David', 'Ella', 'Felix', 'Grace', 'Hugo', 'Isla', 'James',
    'Kaitlyn', 'Lucas', 'Mia', 'Nathan', 'Olivia', 'Peyton', 'Quinn', 'Riley', 'Sophia',
    'Tyler', 'Uma', 'Veronica', 'Will', 'Ximena', 'Yasmine', 'Zoe', 'Aaron', 'Bella', 'Carter',
    'Daisy', 'Elliot', 'Faith', 'Gavin', 'Harper', 'Isaac', 'Jade', 'Kendall', 'Liam', 'Madison',
    'Nate', 'Olga', 'Parker', 'Quinn', 'Rebecca', 'Shannon', 'Travis', 'Ursula', 'Violet', 
    'Wyatt', 'Xander', 'Yusuf', 'Zachary', 'Ava', 'Brianna', 'Chase', 'Derek', 'Emily', 'Fay',
    'Gage', 'Holly', 'India', 'Jordan', 'Kara', 'Lara', 'Mason', 'Nolan', 'Olivia', 'Perry',
    'Quincy', 'Ryan', 'Sienna', 'Trey', 'Ulysses', 'Vera', 'Wade', 'Xander', 'Yasmin', 'Zara'
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar data={friends} onSearch={handleSearch} />
      <FlatList
        data={filteredFriends}
        keyExtractor={(item, index) => index.toString()} // use index as the key for each item
        renderItem={({ item, index }) => (
          <Text style={styles.friendText}>
            {index + 1}. {item} {/* Displaying the number and name */}
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
});

export default Friends;