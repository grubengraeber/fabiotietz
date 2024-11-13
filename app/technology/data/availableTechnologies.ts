import Technology from "@/app/data/technology/technology";
import TechnologyType from "@/app/data/technology/technology-type";


export class Technologies {
    static readonly REACT  = new Technology(
        "React",
        TechnologyType.FRONTEND_FRAMEWORK,
        "React is a JavaScript library for building user interfaces.",
        9
    );
    static readonly NEXT_JS = new Technology(
        "Next.js",
        TechnologyType.WEB_FRAMEWORK,
        "https://nextjs.org/",
        0.8
      );
    static readonly TAILWIND_CSS  = new Technology(
        "Tailwind CSS",
        TechnologyType.FRONTEND_FRAMEWORK,
        "https://tailwindcss.com/",
        0.8
      );

    static readonly TYPESCRIPT = new Technology(
        "TypeScript",
        TechnologyType.PROGRAMMING_LANGUAGE,
        "https://www.typescriptlang.org/",
        0.8
      );
    
    static readonly REACT_NATIVE = new Technology(
        "React Native",
        TechnologyType.MOBILE_FRAMEWORK,
        "https://reactnative.dev/",
        0.8
      );

    static readonly EXPO = new Technology(
    "Expo",
    TechnologyType.MOBILE_FRAMEWORK,
    "https://expo.dev/",
    0.7
    );

    static readonly SUPABASE = new Technology(
        "Supabase",
        TechnologyType.DATABASE,
        "https://supabase.io/",
        0.8
    );

    static readonly FRAMER_MOTION = new Technology(
        "Framer Motion",
        TechnologyType.FRONTEND_FRAMEWORK,
        "https://www.framer.com/motion/",
        0.7
    );

    static readonly TWILIO = new Technology(
        "Twilio",
        TechnologyType.API,
        "https://www.twilio.com/",
        0.7
      );
  
    private constructor(private readonly key: string, public readonly value: any) {
    }
  
    toString() {
      return this.key;
    }
  }