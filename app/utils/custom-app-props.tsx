import { AppProps } from 'next/app';

export interface CustomAppProps extends AppProps {
  isMobile: boolean;
  isMac: boolean;
}
