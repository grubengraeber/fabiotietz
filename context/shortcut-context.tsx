"use client";

import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext, useState } from "react";


const AppContext = createContext<any>(undefined);

export function AppWrapper({ children } : {
  children: React.ReactNode;
}) {

  const [showShortcuts, setShowShortcuts] = useState(false);

  return (
    <AppContext.Provider value={{ showShortcuts, setShowShortcuts }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}