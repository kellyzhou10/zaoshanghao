// context/SettingsContext.tsx
import React, { createContext, useState } from 'react';

interface SettingsContextType {
  displayWakeUpTime: boolean;
  setDisplayWakeUpTime: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultSettingsContextValue: SettingsContextType = {
  displayWakeUpTime: true,
  setDisplayWakeUpTime: () => {},
  darkMode: false,
  setDarkMode: () => {},
};

export const SettingsContext = createContext<SettingsContextType>(defaultSettingsContextValue);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayWakeUpTime, setDisplayWakeUpTime] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SettingsContext.Provider value={{ displayWakeUpTime, setDisplayWakeUpTime, darkMode, setDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
};