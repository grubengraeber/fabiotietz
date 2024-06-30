"use client"

import { useAppContext } from "@/context/app-context"
import { language } from "./language";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { CommandDialog, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { downloadFile } from "./download-file";
import { Button } from "@/components/ui/button";


export const DownloadResume = () => {

    const { showResumePanel, setShowResumePanel } = useAppContext();

    // TODO: create misssing CVs
    const toggleResumePanel = () => {
      setShowResumePanel(!showResumePanel)
    };

    const germanFlag = getUnicodeFlagIcon('DE');
    const englishFlag = getUnicodeFlagIcon('GB');
    const frenchFlag = getUnicodeFlagIcon('FR');
    const spanishFlag = getUnicodeFlagIcon('ES');
    const croatianFlag = getUnicodeFlagIcon('HR');
    const languages: {icon: string, title: string, language: language}[] = [
      { icon: germanFlag, title: 'Deutsch', language: 'german' },
      { icon: englishFlag, title: 'English', language: 'english' },
      { icon: frenchFlag, title: 'Français', language: 'french' },
      { icon: spanishFlag, title: 'Español', language: 'spanish' },
      { icon: croatianFlag, title: 'Hrvatski', language: 'croatian' },
      ];

  return (
    <>
      <CommandDialog open={showResumePanel} onOpenChange={toggleResumePanel}>
      <DialogTitle hidden>Choose Resume Language</DialogTitle>
      <DialogDescription hidden>A picker for the language of the downloaded resume</DialogDescription>
        <CommandInput placeholder="Search available languages..." />
        <CommandList>
          {languages.map((language, index) => (
            <CommandItem key={index} onSelect={() => {
                downloadFile(`/api/resume?language=${language.language}`, '')
                toggleResumePanel()
            }}>

                {language.icon}
                <span className='mx-1'>
                {language.title}
                </span>
                
                </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}