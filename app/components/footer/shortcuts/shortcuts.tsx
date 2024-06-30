"use client"

import { CommandDialog, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { ArrowBigLeftDash, ArrowBigRightDash, Bean, BrainCog, Command, Contact, Contrast, FileDown, FilePenLine, FolderDown, FolderKanban, Forward, Globe, Home, Key, SunMoon } from 'lucide-react';
import React, { ReactElement } from 'react'
import { KeyType } from './key-type';
import { DialogTitle } from '@/components/ui/dialog';
import { useAppContext } from '@/context/app-context';
import KeyMac from './key-mac';
import KeyWindows from './key-windows';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useTheme } from 'next-themes';
import { toggleTheme } from '@/app/utils/toggle-theme';
import { useRouter } from 'next/navigation';
import { toggleLanguage } from '@/app/utils/toggle-language';


function Shortcuts({ isMac }: { isMac: boolean}) {

  const { showShortcuts, setShowShortcuts, setShowResumePanel, language, setLanguage } = useAppContext();
    const toggleShortcutMenu = () => {
      setShowShortcuts(!showShortcuts)
    };

    const theme = useTheme();
    const router = useRouter();

    const shortcuts: {icon: ReactElement, description: string, keys: KeyType[], action: Function}[] = [
      { icon: <FileDown />, description: 'Download Resume', keys: ['cmd', 'option', 'R'], action:  () => {
        setShowShortcuts(false);
        setShowResumePanel(true);
      }},
      { icon: <FolderDown />, description: 'Download Portfolio As PDF', keys: ['cmd', 'option', 'D'], action:  () => {}}, // TODO
      { icon: <BrainCog />, description: 'Skills', keys: ['cmd', 'shift', 'S'], action:  () => {}}, // TODO
      { icon: <Home />, description: 'Home', keys: ['cmd', 'option', 'H'], action:  () => {
        setShowShortcuts(false)
        router.push('/')
      }},
      { icon: <Bean />, description: 'About Me', keys: ['cmd', 'option', 'M'], action:  () => {
        setShowShortcuts(false)
        router.push('/me')
      }},
      { icon: <Contact />, description: 'Contact', keys: ['cmd', 'option', 'C'], action:  () => {
        setShowShortcuts(false)
        router.push('/contact')
      }},
      { icon: <FolderKanban />, description: 'Projects', keys: ['cmd', 'option', 'P'], action:  () => {
        setShowShortcuts(false)
        router.push('/projects')
      }},
      { icon: <FilePenLine />, description: 'Blog Section', keys: ['cmd', 'shift', 'R'], action:  () => {}}, // TODO
      { icon: <Forward />, description: 'Share Page', keys: ['cmd', 'shift', 'R'], action:  () => {}}, // TODO
      { icon: <ArrowBigRightDash />, description: 'Next Project', keys: ['cmd', 'shift', 'R'], action:  () => {}}, // TODO
      { icon: <ArrowBigLeftDash />, description: 'Latest Project', keys: ['cmd', 'shift', 'R'], action:  () => {}}, // TODO
      { icon: <SunMoon />, description: 'Toggle Theme', keys: ['cmd', 'option', 'T'], action:  () => {
        toggleTheme(theme);
      }},
      { icon: <Contrast />, description: 'Contrast Mode', keys: ['cmd', 'option', 'C'], action:  () => {}}, // TODO
      { icon: <Globe />, description: 'Toggle Language', keys: ['cmd', 'option', 'L'], action:  () => {
        toggleLanguage({currentLanguage: language, setLanguage: setLanguage})
      }},
      { icon: <Command />, description: 'Toggle Keyboard Shortcuts Info', keys: ['cmd', 'option', 'S'], action:  () => {
        toggleShortcutMenu()
      }},
      ];

  return (
    <>
      <button onClick={toggleShortcutMenu}>Show Shortcuts</button>
      <CommandDialog open={showShortcuts} onOpenChange={toggleShortcutMenu}>
      <DialogTitle hidden>Keyboard Shortcuts</DialogTitle>
      <DialogDescription hidden>Explanations for the available shortcuts</DialogDescription>
        <CommandInput placeholder="Search shortcuts..." />
        <CommandList>
          {shortcuts.map((shortcut, index) => (
            <CommandItem key={index} onSelect={() => shortcut.action()}>
                {shortcut.icon}
                <span className='mx-1'>
                {shortcut.description}
                </span>
                <CommandShortcut key={'Shortcut ' + index} className='inline-flex items-center justify-center'>{shortcut.keys.map((key, index) => (
                    isMac ?  
                      (<KeyMac icon={key} key={shortcut.description + index}>
                        {key}
                      </KeyMac>)
                      : (<KeyWindows icon={key} key={shortcut.description + index}>
                        {['cmd', 'option'].includes(key) ? '' : key}
                      </KeyWindows>)
                  
                ))
                            }
                </CommandShortcut>
                </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Shortcuts
