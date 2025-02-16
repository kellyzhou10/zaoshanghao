// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Friends Tab */}
      <Tabs.Screen
        name="friends" // Placeholder for friends screen
        options={{
          title: 'Friends',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/friends_icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profilePage" // Points to app/(tabs)/profilePage.tsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/profile_icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Home Tab */}
      <Tabs.Screen
        name="index" // Points to app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/home_icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Calendar Tab */}
      <Tabs.Screen
        name="calendar" // Placeholder for calendar screen
        options={{
          title: 'Calendar',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/calendar_icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings" // Placeholder for settings screen
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/settings_icon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}