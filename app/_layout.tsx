// app/_layout.tsx
import { Stack } from 'expo-router';
import { CalendarProvider } from '../context/CalendarContext'; // Correct path to context
import { SettingsProvider } from '../context/SettingsContext'; // Correct path to context

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