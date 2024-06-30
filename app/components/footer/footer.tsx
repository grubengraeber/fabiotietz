"use client"

import Shortcuts from "./shortcuts/shortcuts";


type props = {
    isMobile: boolean
}

export default function Footer({isMobile} : props) {
    
      
    return (
        <div>

        <h1>Footer</h1>
        {
            isMobile ?
            <Shortcuts />
            : null
        }
        </div>
    );
}