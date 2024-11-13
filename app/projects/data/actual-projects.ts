import Project from "@/app/data/project/project";
import { ProjectStatus } from "@/app/data/project/project-status";
import Technology from "@/app/data/technology/technology";
import TechnologyType from "@/app/data/technology/technology-type";
import { Technologies } from "@/app/technology/data/availableTechnologies";

export const projects: Project[] = [
    new Project(
      "fabiotietz",
      "Portfolio Site",
      "My personal portfolio website.",
      `
        In the year 2024 I decided to create a portfolio website since I was about to become a freelancer. 
        Everybody needs a portfolio website, right? Also I wanted to show off my projects and skills, 
        since I'm a career changer and I have not that much professional experience in the field of Software Development.

        I wanted to create a website that is fast, accessible and looks good on all devices. So I decided to use Next.js, 
        with the help of Tailwind CSS for styling. I also wanted to deepen my TypeScript skills, so I decided to use it for this project.
        Additionally I wanted components that would animate and also look good on mobile devices, so I decided to use shadcn-ui and Framer Motion for that.

        To better my design skills I came up with a custom favicon and logo design. And since the dark mode is all the rage, I decided to implement that as well.
        Next up is my personal blog and a few more projects I'm working on.
        Definetly stay tuned for more!
      `,
      "/projects/Portfolio_light.svg",
      "/projects/Portfolio_dark.svg",
      new Date("2024-05-12"),
      ProjectStatus.COMPLETED,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
      ],
      "https://fabiotietz.com/blog/portfolio", // TODO
      "https://fabiotietz.com",
      new Date("2024-10-01")
    ),
    new Project(
      "sonar",
      "Sonar",
      "A tool for tracking deliveries and arrival times in realtime for businesses and their customers.",
      `
        Sonar is a tool for tracking deliveries and arrival times in realtime for businesses and their customers. 
        It is a web application for businesses and a mobile application for their drivers/delivery services. 
        The businesses can track their deliveries in realtime and the customers can see the arrival time of their delivery in realtime.

        The users get notified via their favourite messaging app when their delivery is about to arrive.
        That should help the users to carry on with their day right after accepting the delivery and not wait for the delivery to arrive all day at home.

        I'm currently working on this project together with a friend of mine and we are planning to launch it in the year 2024.
      `,
      "/projects/Sonar_light.svg",
      "/projects/Sonar_dark.svg",
      new Date("2024-08-01"),
      ProjectStatus.IN_PROGRESS,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
        Technologies.FRAMER_MOTION,
        Technologies.REACT_NATIVE,
        Technologies.SUPABASE,
        Technologies.TWILIO,
      ],
      "https://fabiotietz.com/blog/sonar", // TODO
      "https://sonar-app.net"
    ),
    new Project(
      "freelytics",
      "Freelytics",
      "An application for tracking and analyzing freelancing contracts.",
      `
        Freelytics is an application for tracking and analyzing freelancing contracts. 
        It is a mobile application for freelancers to track their contracts, hours and earnings. 
        The freelancers can also analyze their contracts, hours and earnings to see how they are doing and where they can improve.

        Additionally some great features are planned (both with and without AI) to help freelancers to get better contracts and earn more money.
      `,
      "/projects/Freelytics_light.svg",
      "/projects/Freelytics_dark.svg",
      new Date("2024-09-01"),
      ProjectStatus.IN_PROGRESS,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT_NATIVE,
        Technologies.EXPO,
        Technologies.SUPABASE,
      ],
      "https://fabiotietz.com/blog/freelytics", // TODO
      "https://freelytics-app.com",
    ),
    new Project(
      "word",
      "Word",
      "A supporting app for a guessing game.",
      `
        Word is a supporting app for a guessing game. 
        The Game: Both players get a four letter word and have to guess the other players word.
        Each round each player guesses a word and the other player answers with a number between 0 and 4.
        The number indicates how many letters of the guessed word are in the other players word AND are at the correct position.
        The player who guesses the word first wins the round.

        My wife won a couple of times now, so I decided to create an app to help me win more often.
        The app generates a four letter word and helps me to guess the word of my wife by using a german dictionary library for node.js and a simple algorithm.

        The app is a web application that fits on any common screen.
        It should get smarter over time with more features to come.
      `,
      "/TIETZ.svg",
      "",
      new Date("2024-09-23"),
      ProjectStatus.CANCELLED,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
      ],
      "https://fabiotietz.com/blog/word", // TODO
      "https://word.fabiotietz.com",
    ),
    new Project(
      "qr",
      "Static QR Code Generator",
      "A customization tool for generating static QR codes with logos and colors embedded.",
      `
        The Static QR Code Generator is a customization tool for generating static QR codes with logos and colors embedded.
        The tool is a web application that allows users to generate a QR code with their own logo in it's middle.
        The users can customize the QR code by changing the colors of the QR code and reposition the embedded logo.

        The users can also download the QR code as either an SVG file to resize it as they wish, or as a PNG file and use it for their projects.
        The tool is free to use.
      `,
      "/projects/qr_light.svg",
      "/projects/qr_dark.svg",
      new Date("2024-11-08"),
      ProjectStatus.LAUNCHED,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
      ],
      "https://fabiotietz.com/blog/custom-qr-code-generator",
      "https://qr.tietz-innovations.com",
      new Date("2024-11-10")
    )
  ];