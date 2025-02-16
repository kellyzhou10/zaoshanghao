// app/context/SettingsContext.tsx
import React, { createContext, useState } from 'react';

interface SettingsContextType {
  displayWakeUpTime: boolean;
  setDisplayWakeUpTime: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultSettingsContextValue: SettingsContextType = {
  displayWakeUpTime: true,
  setDisplayWakeUpTime: () => {},
};

export const SettingsContext = createContext<SettingsContextType>(defaultSettingsContextValue);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayWakeUpTime, setDisplayWakeUpTime] = useState(true);

  return (
    <SettingsContext.Provider value={{ displayWakeUpTime, setDisplayWakeUpTime }}>
      {children}
    </SettingsContext.Provider>
  );
};