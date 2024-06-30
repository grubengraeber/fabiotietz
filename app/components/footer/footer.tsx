"use client"

import Shortcuts from "./shortcuts/shortcuts";


type props = {
    isMobile: boolean,
    isMac: boolean,
}

export default function Footer({isMobile, isMac} : props) {
      
    return (
        <div>
        <h1>Footer</h1>
        {
            !isMobile ?
            <Shortcuts isMac={isMac} />
            : null
        }
        </div>
    );
}