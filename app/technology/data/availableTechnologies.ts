import Technology from "@/app/data/technology/technology";
import TechnologyType from "@/app/data/technology/technology-type";


export class Technologies {
    static readonly REACT  = new Technology(
        "React",
        TechnologyType.FRONTEND_FRAMEWORK,
        "React is a JavaScript library for building user interfaces.",
        9,
        "/technologies/react.png"
    );
    static readonly NEXT_JS = new Technology(
        "Next.js",
        TechnologyType.WEB_FRAMEWORK,
        "https://nextjs.org/",
        0.8,
        "/technologies/nextjs.png"
      );
    static readonly TAILWIND_CSS  = new Technology(
        "Tailwind CSS",
        TechnologyType.FRONTEND_FRAMEWORK,
        "https://tailwindcss.com/",
        0.8,
        "/technologies/tailwindcss.png"
      );

    static readonly TYPESCRIPT = new Technology(
        "TypeScript",
        TechnologyType.PROGRAMMING_LANGUAGE,
        "https://www.typescriptlang.org/",
        0.8,
        "/technologies/typescript.png"
      );
    
    static readonly REACT_NATIVE = new Technology(
        "React Native",
        TechnologyType.MOBILE_FRAMEWORK,
        "https://reactnative.dev/",
        0.8,
        "/technologies/reactnative.png"
      );

    static readonly EXPO = new Technology(
    "Expo",
    TechnologyType.MOBILE_FRAMEWORK,
    "https://expo.dev/",
    0.7,
    "/technologies/expo.png"
    );

    static readonly SUPABASE = new Technology(
        "Supabase",
        TechnologyType.DATABASE,
        "https://supabase.io/",
        0.8,
        "/technologies/supabase.png"
    );

    static readonly FRAMER_MOTION = new Technology(
        "Framer Motion",
        TechnologyType.FRONTEND_FRAMEWORK,
        "https://www.framer.com/motion/",
        0.7,
        "/technologies/framermotion.png"
    );

    static readonly TWILIO = new Technology(
        "Twilio",
        TechnologyType.API,
        "https://www.twilio.com/",
        0.7,
        "/technologies/twilio.png"
      );

    static readonly DART = new Technology(
        "Dart",
        TechnologyType.PROGRAMMING_LANGUAGE,
        "https://dart.dev/",
        0.8,
        "/technologies/dart.png"
      ); 
    static readonly FLUTTER = new Technology(
        'Flutter',
        TechnologyType.MOBILE_FRAMEWORK,
        "https://flutter.dev/",
        0.8,
        "/technologies/flutter.png"
      );

    static readonly JAVA = new Technology(
        'Java',
        TechnologyType.PROGRAMMING_LANGUAGE,
        "https://www.java.com/",
        0.7,
        "/technologies/java.png"
      );

    static readonly SPRING = new Technology(
        'Spring',
        TechnologyType.BACKEND_FRAMEWORK,
        "https://spring.io/",
        0.9,
        "/technologies/spring.png"
      )

    static readonly NUXT = new Technology(
        'Nuxt',
        TechnologyType.WEB_FRAMEWORK,
        'https://nuxt.com/',
        0.6,
        "/technologies/nuxt.png"
      )
  
    private constructor(private readonly key: string, public readonly value: any) {
    }
  
    toString() {
      return this.key;
    }
  }