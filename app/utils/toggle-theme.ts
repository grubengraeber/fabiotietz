import { UseThemeProps } from "next-themes/dist/types";


export const toggleTheme = (useTheme: UseThemeProps) => {
    const { setTheme, theme, systemTheme } = useTheme;

    const system = 'system';
    const dark = 'dark';
    const light = 'light';
    if (theme === light || (theme === system && systemTheme === light)) {
      setTheme(dark);
      return
    }

    setTheme(light);
  }