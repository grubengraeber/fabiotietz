"use client"

import { useAppContext } from "@/context/app-context";
import { language } from "./utils/language";

// TODO: language
export default function Home() {

  const {language} = useAppContext();
  const currentLanguage: language = language;
  const welcome = currentLanguage === 'english' ?  "welcome to my website" : 'testlanguage';
  const checkOut = "Check out who I am, check out what I have accomplished so far and get in contact with me.";
  const contactMe = "contact me";
  const aboutMe = "about me";

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {welcome}
        </h1>
        <p className="mt-6 text-lg leading-8">
          {checkOut}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
                href="/contact"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                {contactMe}
              </a>
              <a href="/me#about" className="text-sm font-semibold leading-6">
                {aboutMe} <span aria-hidden="true"></span>
              </a>
        </div>
      </div>
    </div>
  )
}
