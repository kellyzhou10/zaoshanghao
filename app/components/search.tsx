import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ data, onSearch }) => {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
    onSearch(newText); // Pass the search text to the parent or filter data
  };

  const handleClear = () => {
    setText('');
    onSearch(''); // Clear search in parent or reset filtering
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search Friends"
          value={text}
          onChangeText={handleChangeText}
        />
        {text ? (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <FontAwesome name="times-circle" size={20} color="#888" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

// You can pass `data` and `onSearch` function from the parent component to filter items dynamically
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    marginRight: 10,
  },
  clearButton: {
    padding: 5,
  },
});

export default SearchBar;