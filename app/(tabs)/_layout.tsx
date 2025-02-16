// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Friends Tab */}
      <Tabs.Screen
        name="friendsPage"
        options={{
          title: 'Friends',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/friends_icon.png')} // Ensure this path is correct
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profilePage"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/profile_icon.png')} // Ensure this path is correct
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/home_icon.png')} // Ensure this path is correct
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Calendar Tab */}
      <Tabs.Screen
        name="calendarPage"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/calendar_icon.png')} // Ensure this path is correct
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settingsPage"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/settings_icon.png')} // Ensure this path is correct
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}