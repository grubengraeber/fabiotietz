import { language } from "./language";


export const toggleLanguage = ({currentLanguage, setLanguage}: {currentLanguage: language, setLanguage: Function}) => {
    const languages: language[] = ['german', 'english', 'french', 'spanish', 'croatian'];
    const currentIndex = languages.indexOf(currentLanguage)
    const newLanguage: language = languages[currentIndex === languages.length - 1 ? 0 : currentIndex + 1]
    setLanguage(newLanguage)
  }