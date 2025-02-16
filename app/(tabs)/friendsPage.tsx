// app/(tabs)/friends.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Friends = () => {
  return (
    <View style={styles.container}>
      <Text>Friends Screen - Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Friends;