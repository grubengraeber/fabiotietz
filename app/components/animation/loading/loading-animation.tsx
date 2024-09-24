import React from 'react'
import Dark from './dark'
import { useTheme } from 'next-themes'
import Light from './light';

function LoadingAnimation() {
  const theme = useTheme();
  const isDarkMode = !(theme.theme === "light" || (theme.theme === "system" && theme.systemTheme === "light"));

  return (
    <div>
      {
        isDarkMode ? <Dark /> : <Light />
      }
    </div>
  )
}

export default LoadingAnimation
