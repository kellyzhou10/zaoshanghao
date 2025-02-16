// app/_layout.tsx
import { Stack } from 'expo-router';
import { CalendarProvider } from './context/CalendarContext';
import { SettingsProvider } from './context/SettingsContext';

export default function RootLayout() {
  return (
    <SettingsProvider>
      <CalendarProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </CalendarProvider>
    </SettingsProvider>
  );
}