"use client"

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageToggleButton from '../general/languageToggleButton';
import { ModeToggle } from './modeToggle';
import { useTheme } from 'next-themes';
import { useHotkeys } from '@mantine/hooks';
import Link from 'next/link';
import useKeyboardShortcuts from './use-keyboard-shortcuts';
import Image from 'next/image';

const companyName = "TIETZ Innovations";
const navigation = [
    { name: 'About Me', href: '/me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
]

// TODO: language
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const theme = useTheme();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isDarkMode = !(theme.theme === "light" || (theme.theme === "system" && theme.systemTheme === "light"));

      const hotkeys = useKeyboardShortcuts();
      useHotkeys(hotkeys);

    return (
        <header className={`inset-x-0 top-0 z-50 sticky transition-colors duration-300 ${isScrolled ? isDarkMode ? 'bg-gray-800' : 'bg-white' : 'bg-transparent'}`}>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">{companyName}</span>
                        <h1 className='font-bold space-x-1'>
                            <span className='text-teal-700 text-2xl inline-flex gap-2'><Image src={`${isDarkMode ? '/favicons/head_dark.svg' : '/favicons/head_light.svg'}`} alt='Personal Logo' width={25} height={25} /> Fabio TIETZ</span>
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
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6">
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
                            <span className='font-bold text-teal-700 text-2xl inline-flex gap-2'><Image src={`${isDarkMode ? '/favicons/head_dark.svg' : '/favicons/head_light.svg'}`} alt='Personal Logo' width={25} height={25} /> Fabio TIETZ</span>
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
                    <div className="mt-6 flex flex-col items-center">
                        <div className="space-y-2 py-6 w-full text-center">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className='flex items-center space-x-2'>
                            <ModeToggle />
                            <LanguageToggleButton />
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;