"use client";

import { language } from "@/app/utils/language";
import { useLocalStorage } from "@mantine/hooks";
import i18next from "i18next";
import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext<any>(undefined);

export function AppWrapper({ children } : {
  children: React.ReactNode;
}) {

  const [showShortcuts, setShowShortcuts] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<language>({ key: 'language', defaultValue: 'english'});
  const [showResumePanel, setShowResumePanel] = useState<boolean>(false);

  useEffect(() => {
    console.log("LANGUAGE CHANGED TO: ", currentLanguage)
    /* i18next.changeLanguage(currentLanguage === 'german' ? 'de' : 'en', () => {
      console.log("Changed Language to: ", currentLanguage)
    }); */

    console.log("AFTER LANGUAGE CHANGE")

  }, [currentLanguage])
  return (
    <AppContext.Provider value={{ showShortcuts, setShowShortcuts, currentLanguage, setCurrentLanguage, showResumePanel, setShowResumePanel }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}