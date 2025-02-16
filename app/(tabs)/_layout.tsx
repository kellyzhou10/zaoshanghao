// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index" // Points to app/(tabs)/index.tsx (Home screen)
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
      <Tabs.Screen
        name="profilePage" // Points to app/(tabs)/profilePage.tsx (Profile screen)
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
    </Tabs>
  );
}