// useKeyboardShortcuts.ts
import { HotkeyItem } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/app-context';
import { toggleTheme } from '@/app/utils/toggle-theme';
import { downloadFile } from '@/app/utils/download-file';
import { toggleLanguage } from '@/app/utils/toggle-language';
import { useTheme } from 'next-themes';

const useKeyboardShortcuts = () => {
  const { showShortcuts, setShowShortcuts, language, setLanguage, setShowResumePanel, setShowSharePanel, setShowNewsletterPanel } = useAppContext();
  const theme = useTheme();
  const router = useRouter();

  const toggleShortcutMenu = () => {
    setShowShortcuts(!showShortcuts);
  };

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
        router.push('/');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+M',
      () => {
        router.push('/me');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+C',
      () => {
        router.push('/contact');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+P',
      () => {
        router.push('/projects');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+L',
      () => toggleLanguage({ currentLanguage: language, setLanguage: setLanguage }),
      { preventDefault: true },
    ],
    [
      'mod+shift+C',
      () => window.open(process.env.NEXT_PUBLIC_COMPANY_URL!, '_ blank'),
      { preventDefault: true },
    ],
    [
      'mod+alt+B',
      () => window.open(process.env.NEXT_PUBLIC_BLOG_URL!, '_ blank'),
      { preventDefault: true },
    ],
    [
      'mod+alt+F',
      () => setShowSharePanel(true),
      { preventDefault: true },
    ],
    [
      'mod+alt+N',
      () => setShowNewsletterPanel(true),
      { preventDefault: true },
    ],
    [
      'mod+alt+shift+T',
      () => {
        router.push('/tools');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+shift+L',
      () => {
        router.push('/projects/latest');
      },
      { preventDefault: true },
    ],
    [
      'mod+alt+shift+N',
      () => {
        router.push('/projects/next');
      },
      { preventDefault: true },
    ],
  ];

  return hotkeys;
};

export default useKeyboardShortcuts;
