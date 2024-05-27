import { GlobeAltIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function LanguageToggleButton() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    return (
        <div>
            <button
                type="button"
                className="focus:outline-none"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
                <GlobeAltIcon className="h-6 w-6" />
            </button>
            {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">German</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">French</a>
                    </div>
                </div>
            )}
        </div>
    );
}