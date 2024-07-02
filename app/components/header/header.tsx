"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageToggleButton from '../general/languageToggleButton';
import { ModeToggle } from './modeToggle';
import { useTheme } from 'next-themes';
import { HotkeyItem, useHotkeys } from '@mantine/hooks';
import { useAppContext } from '@/context/app-context';
import { toggleTheme } from '@/app/utils/toggle-theme';
import { downloadFile } from '@/app/utils/download-file';
import { useRouter } from 'next/navigation';
import { toggleLanguage } from '@/app/utils/toggle-language';
import Link from 'next/link';

const companyUrl = 'https://tietz-innovations.at';
const companyName = "TIETZ Innovations";
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Company', href: companyUrl },
]

// TODO: language
function Header() {
    const { showShortcuts, setShowShortcuts, language, setLanguage, setShowResumePanel } = useAppContext();
    const toggleShortcutMenu = () => {
      setShowShortcuts(!showShortcuts)
    };
      
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const theme = useTheme();

    const router = useRouter();


    const hotkeys: HotkeyItem[] = [
        [
            'mod+alt+T',
            () => toggleTheme(theme),
            { preventDefault: false },
        ],
        [
            'mod+alt+S',
            () => toggleShortcutMenu(),
            { preventDefault: true },
        ],
        [
            'mod+alt+R',
            () => setShowResumePanel(true),
            { preventDefault: true },
        ],
        [
            'mod+alt+D',
            () => downloadFile('/api/portfolio', 'fabiotietz_portfolio'),
            { preventDefault: true },
        ],
        [
            'mod+alt+H',
            () => {
                router.push('/')
            },
            { preventDefault: true },
        ],
        [
            'mod+alt+M',
            () => {
                router.push('/me')
            },
            { preventDefault: true },
        ],
        [
            'mod+alt+C',
            () => {
                router.push('/contact')
            },
            { preventDefault: true },
        ],
        [
            'mod+alt+P',
            () => {
                router.push('/projects')
            },
            { preventDefault: true },
        ],
        [
            'mod+alt+L',
            () => toggleLanguage({currentLanguage: language, setLanguage: setLanguage}),
            { preventDefault: true },
        ],
        [
            'mod+shift+C',
            () => window.open('https://tietz-innovations.at', '_ blank'),
            { preventDefault: true },
        ],
        [
            'mod+alt+B',
            () => window.open('https://blog.fabiotietz.com', '_ blank'),
            { preventDefault: true },
        ],
      ];
      useHotkeys(hotkeys);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">{companyName}</span>
                        <h1 className='font-bold space-x-1'>
                            <span className='text-teal-700 text-2xl'>Fabio TIETZ</span>
                        </h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 lg:justify-start">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href === companyUrl ? '' : item.href} target={item.href === companyUrl ? '_blank' : ''} className="text-sm font-semibold leading-6">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end relative group space-x-3 ">
                    <ModeToggle />
                    <LanguageToggleButton />
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${useTheme().theme === 'light' ? 'bg-white' : 'bg-black'} px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                    <div className="flex items-center justify-between">
                        <a href='/' className="-m-1.5 p-1.5">
                            <span className="sr-only">{companyName}</span>
                            <h1>Fabio TIETZ</h1>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item.href === companyUrl ? '_blank' : ''}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <ModeToggle />
                                <LanguageToggleButton />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;