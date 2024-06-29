import { Command } from 'lucide-react';
import React, { ReactNode } from 'react';
import { KeyType } from './key-type';

type props = {
    children: ReactNode,
    icon?: KeyType
}

const Key = ({ children, icon }: props) => {

    const icons = {
        cmd: <Command className="w-4 h-4" />,
        option: <span className="font-bold">⌥</span>,
        control: <span className="font-bold">⌃</span>,
        shift: <span className="font-bold">⇧</span>,
        esc: <span className="font-bold">⎋</span>,
        A: <span className=""></span>,
        B: <span className=""></span>,
        C: <span className=""></span>,
        D: <span className=""></span>,
        E: <span className=""></span>,
        F: <span className=""></span>,
        G: <span className=""></span>,
        H: <span className=""></span>,
        I: <span className=""></span>,
        J: <span className=""></span>,
        K: <span className=""></span>,
        L: <span className=""></span>,
        M: <span className=""></span>,
        N: <span className=""></span>,
        O: <span className=""></span>,
        P: <span className=""></span>,
        Q: <span className=""></span>,
        R: <span className=""></span>,
        S: <span className=""></span>,
        T: <span className=""></span>,
        U: <span className=""></span>,
        V: <span className=""></span>,
        W: <span className=""></span>,
        X: <span className=""></span>,
        Y: <span className=""></span>,
        Z: <span className=""></span>,
        };

  return (
    <kbd className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-gray-200 rounded text-sm font-mono text-gray-800 mx-1">
      {icon && icons[icon]}
      {children}
    </kbd>
  );
};

export default Key;