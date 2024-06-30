"use client"

import { CommandDialog, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { ArrowBigLeftDash, ArrowBigRightDash, Bean, BrainCog, Command, Contact, Contrast, FileDown, FilePenLine, FolderDown, FolderKanban, Forward, Globe, Home, SunMoon } from 'lucide-react';
import React, { ReactElement } from 'react'
import Key from './key';
import { KeyType } from './key-type';
import { DialogTitle } from '@/components/ui/dialog';
import { useAppContext } from '@/context/shortcut-context';


function Shortcuts() {

  const { showShortcuts, setShowShortcuts } = useAppContext();
    const toggleShortcutMenu = () => {
      setShowShortcuts(!showShortcuts)
    };

    const shortcuts: {icon: ReactElement, description: string, keys: KeyType[]}[] = [
      { icon: <FileDown />, description: 'Download Resume', keys: ['cmd', 'shift', 'R'] },
      { icon: <FolderDown />, description: 'Download Portfolio As PDF', keys: ['cmd', 'shift', 'R'] },
      { icon: <BrainCog />, description: 'Skills', keys: ['cmd', 'option', 'S'] },
      { icon: <FolderKanban />, description: 'Projects', keys: ['cmd', 'option', 'P'] },
      { icon: <Home />, description: 'Home', keys: ['cmd', 'option', 'H'] },
      { icon: <Bean />, description: 'About Me', keys: ['cmd', 'option', 'A'] },
      { icon: <Contact />, description: 'Contact', keys: ['cmd', 'option', 'D'] },
      { icon: <FilePenLine />, description: 'Blog Section', keys: ['cmd', 'shift', 'R'] },
      { icon: <Forward />, description: 'Share Page', keys: ['cmd', 'shift', 'R'] },
      { icon: <ArrowBigRightDash />, description: 'Next Project', keys: ['cmd', 'shift', 'R'] },
      { icon: <ArrowBigLeftDash />, description: 'Previous Project', keys: ['cmd', 'shift', 'R'] },
      { icon: <SunMoon />, description: 'Toggle Theme', keys: ['cmd', 'option', 'T'] },
      { icon: <Contrast />, description: 'Contrast Mode', keys: ['cmd', 'option', 'C'] },
      { icon: <Globe />, description: 'Toggle Language', keys: ['cmd', 'option', 'L'] },
      { icon: <Command />, description: 'Open Keyboard Shortcuts Info', keys: ['cmd', 'shift', 'S'] },
      ];

  return (
    <>
      <button onClick={toggleShortcutMenu}>Show Shortcuts</button>
      <CommandDialog open={showShortcuts} onOpenChange={toggleShortcutMenu}>
      <DialogTitle hidden>Keyboard Shortcuts</DialogTitle>
        <CommandInput placeholder="Search shortcuts..." />
        <CommandList>
          {shortcuts.map((shortcut, index) => (
            <CommandItem key={index}>
                {shortcut.icon}
                <span className='mx-1'>
                {shortcut.description}
                </span>
                <CommandShortcut key={'Shortcut ' + index} className='inline-flex items-center justify-center'>{shortcut.keys.map((key, index) => (
                    <Key icon={key} key={shortcut.description + index}>
                      {key}
                    </Key>
                    
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
