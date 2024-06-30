"use client";

import { language } from "@/app/utils/language";
import { useLocalStorage } from "@mantine/hooks";
import { createContext, useContext, useState } from "react";


const AppContext = createContext<any>(undefined);

export function AppWrapper({ children } : {
  children: React.ReactNode;
}) {

  const [showShortcuts, setShowShortcuts] = useState(false);
  const [language, setLanguage] = useLocalStorage<language>({ key: 'language', defaultValue: 'english'});
  const [showResumePanel, setShowResumePanel] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ showShortcuts, setShowShortcuts, language, setLanguage, showResumePanel, setShowResumePanel }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}