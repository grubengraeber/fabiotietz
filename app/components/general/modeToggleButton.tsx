import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function ModeToggleButton() {
    const [isDarkmode, setIsDarkMode] = useState(false); // TODO: get the user preferences
    return (
        <div>
            <button
                type="button"
                className="focus:outline-none"
                onClick={() => {
                    console.log(`TODO: switch to ${isDarkmode ? 'light' : 'dark'} mode`) // TODO
                    setIsDarkMode(!isDarkmode);
                }}
            >
                {isDarkmode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
        </div>
    );
}