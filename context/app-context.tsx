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
  const [showSharePanel, setShowSharePanel] = useState<boolean>(false);
  const [showNewsletterPanel, setShowNewsletterPanel] = useState<boolean>(false);
  const [showCookies, setShowCookies] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ showShortcuts, setShowShortcuts, language, setLanguage, showResumePanel, setShowResumePanel, showSharePanel, setShowSharePanel, showNewsletterPanel, setShowNewsletterPanel, showCookies, setShowCookies }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}