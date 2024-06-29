"use client"

import { useLocalStorage } from "@mantine/hooks";
import Shortcuts from "./shortcuts/shortcuts";


type props = {
    isMobile: boolean
}

export default function Footer({isMobile} : props) {

    const [showShortcutPanel, setShowShortcutPanel] = useLocalStorage({
        key: 'seenShortcutPanel',
        defaultValue: !isMobile,
      });
    
      
    return (
        <div>

        <h1>Footer</h1>
        {
            isMobile ?
            <Shortcuts show={showShortcutPanel} />
            : null
        }
        </div>
    );
}