// context/CalendarContext.tsx
import React, { createContext, useState } from 'react';

// Define the type for the context value
interface CalendarContextType {
  times: Record<string, { time: string; period: string; timezone: string }>;
  setTimes: React.Dispatch<
    React.SetStateAction<Record<string, { time: string; period: string; timezone: string }>>
  >;
}

// Default context value
const defaultContextValue: CalendarContextType = {
  times: {},
  setTimes: () => {},
};

// Create the context
export const CalendarContext = createContext<CalendarContextType>(defaultContextValue);

// Provider component
export const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const [times, setTimes] = useState<Record<string, { time: string; period: string; timezone: string }>>({
    Sunday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Monday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Tuesday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Wednesday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Thursday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Friday: { time: '8:00', period: 'AM', timezone: 'PST' },
    Saturday: { time: '8:00', period: 'AM', timezone: 'PST' },
  });

  return (
    <CalendarContext.Provider value={{ times, setTimes }}>
      {children}
    </CalendarContext.Provider>
  );
};