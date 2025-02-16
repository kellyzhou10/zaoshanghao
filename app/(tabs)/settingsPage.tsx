// app/(tabs)/settingsPage.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayWakeUpTime, setDisplayWakeUpTime] = useState(true);

  return (
    <View style={[styles.container, darkMode && styles.darkMode]}>
      <Text style={styles.title}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingRow}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Display Wake-Up Time Toggle */}
      <View style={styles.settingRow}>
        <Text>Display Wake-Up Time Publicly</Text>
        <Switch value={displayWakeUpTime} onValueChange={setDisplayWakeUpTime} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkMode: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default SettingsPage;