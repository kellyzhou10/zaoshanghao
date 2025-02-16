// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';

// Preload your custom icons using expo-asset
const friendsIcon = Asset.fromModule(require('../../assets/images/friends_icon.png')).uri;
const profileIcon = Asset.fromModule(require('../../assets/images/profile_icon.jpg')).uri;
const homeIcon = Asset.fromModule(require('../../assets/images/home_icon.png')).uri;
const calendarIcon = Asset.fromModule(require('../../assets/images/calendar_icon.png')).uri;
const settingsIcon = Asset.fromModule(require('../../assets/images/settings_icon.png')).uri;

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
              source={{ uri: friendsIcon }}
              style={{ width: size, height: size, tintColor: focused ? color : '#ccc' }}
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
              source={{ uri: profileIcon }}
              style={{ width: size, height: size, tintColor: focused ? color : '#ccc' }}
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
              source={{ uri: homeIcon }}
              style={{ width: size, height: size, tintColor: focused ? color : '#ccc' }}
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
              source={{ uri: calendarIcon }}
              style={{ width: size, height: size, tintColor: focused ? color : '#ccc' }}
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
              source={{ uri: settingsIcon }}
              style={{ width: size, height: size, tintColor: focused ? color : '#ccc' }}
            />
          ),
        }}
      />
    </Tabs>
  );
}