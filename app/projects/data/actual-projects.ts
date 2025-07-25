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
      # My Portfolio Journey

In the year **2024**, I decided to create a portfolio website since I was about to become a freelancer.  
Everybody needs a portfolio website, right? I also wanted to showcase my projects and skills, especially as a **career changer** with limited professional experience in the field of Software Development.

## Goals for the Website

- **Performance:** A fast and accessible website.
- **Responsive Design:** Look great on all devices.
- **Skill Development:** Deepen my knowledge of **TypeScript**.
- **Aesthetics:** Implement animations and visually appealing components.

## Technologies Used

- **[Next.js](https://nextjs.org/):** For building the website.
- **[Tailwind CSS](https://tailwindcss.com/):** For efficient and responsive styling.
- **[TypeScript](https://www.typescriptlang.org/):** To enhance my coding skills and ensure type safety.
- **[shadcn/ui](https://ui.shadcn.com/):** For reusable components.
- **[Framer Motion](https://www.framer.com/motion/):** To create smooth animations.

## Features

- **Custom Design:** I designed a custom favicon and logo to improve my design skills.
- **Dark Mode:** Because who doesn’t love a good dark mode these days?

## What’s Next?

I’m planning to:

- Launch my **[personal blog](https://fabiotietz.com/blog)**.
- Showcase a few more exciting projects I’m working on.

Definitely stay tuned for more updates!

      `
      /* `
        In the year 2024 I decided to create a portfolio website since I was about to become a freelancer. 
        Everybody needs a portfolio website, right? Also I wanted to show off my projects and skills, 
        since I'm a career changer and I have not that much professional experience in the field of Software Development.

        I wanted to create a website that is fast, accessible and looks good on all devices. So I decided to use Next.js, 
        with the help of Tailwind CSS for styling. I also wanted to deepen my TypeScript skills, so I decided to use it for this project.
        Additionally I wanted components that would animate and also look good on mobile devices, so I decided to use shadcn-ui and Framer Motion for that.

        To better my design skills I came up with a custom favicon and logo design. And since the dark mode is all the rage, I decided to implement that as well.
        Next up is my personal blog and a few more projects I'm working on.
        Definetly stay tuned for more!
      ` */,
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
      # Sonar: Real-Time Delivery Tracking

**Sonar** is a tool designed to track deliveries and arrival times in **real-time** for businesses and their customers.  

## Key Features

- **For Businesses:**
  - A **web application** to track deliveries in real-time.
  - Improved transparency and operational efficiency.

- **For Drivers/Delivery Services:**
  - A **mobile application** for seamless communication and updates.

- **For Customers:**
  - Real-time updates on delivery arrival times.
  - Notifications via their **favorite messaging app** when a delivery is about to arrive.

## Benefits

- **Convenience:** Customers can carry on with their day and only need to be available when the delivery is arriving.
- **Efficiency:** Reduces the need for customers to wait at home all day for their delivery.

## Current Status

I’m developing this project together with a friend, and we are planning to **launch it in 2025**. Stay tuned for updates!
      `
      /* `
        Sonar is a tool for tracking deliveries and arrival times in realtime for businesses and their customers. 
        It is a web application for businesses and a mobile application for their drivers/delivery services. 
        The businesses can track their deliveries in realtime and the customers can see the arrival time of their delivery in realtime.

        The users get notified via their favourite messaging app when their delivery is about to arrive.
        That should help the users to carry on with their day right after accepting the delivery and not wait for the delivery to arrive all day at home.

        I'm currently working on this project together with a friend of mine and we are planning to launch it in the year 2024.
      ` */,
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
      # Freelytics: Freelance Tracking and Analysis App

**Freelytics** is a mobile application designed for freelancers to track, analyze, and improve their contracts, hours, and earnings.

## Core Features

- **Contract Management:** Easily track freelancing contracts in one place.  
- **Time Tracking:** Monitor hours worked across various projects.  
- **Earnings Analysis:** Get insights into your earnings to see how you’re performing.  

## Planned Enhancements

- **Advanced Analytics:** Analyze contracts, hours, and earnings to identify areas for improvement.  
- **AI-Powered Features:** Tools to help freelancers secure better contracts and increase their earnings.  
- **Non-AI Features:** Useful functionalities for freelancers who prefer non-AI-driven tools.

Stay tuned for updates as Freelytics evolves to empower freelancers to achieve more!
      `
      /* `
        Freelytics is an application for tracking and analyzing freelancing contracts. 
        It is a mobile application for freelancers to track their contracts, hours and earnings. 
        The freelancers can also analyze their contracts, hours and earnings to see how they are doing and where they can improve.

        Additionally some great features are planned (both with and without AI) to help freelancers to get better contracts and earn more money.
      ` */,
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
      # Word: A Support App for a Guessing Game

**Word** is a supporting app designed to enhance a fun guessing game and (hopefully) help me win more often against my wife! 🎮

## The Game

- **Objective:** Both players get a four-letter word and must guess the other player's word.  
- **How It Works:**  
  1. Each round, a player guesses a four-letter word.  
  2. The other player responds with a number (0–4) indicating how many letters are in the correct position.  
  3. The first player to guess the opponent's word wins the round.

## Why I Built It

My wife has won a few too many rounds, so I decided to create an app to level the playing field.  

- **Features:**  
  - The app generates a four-letter word for the game.  
  - It helps me deduce my wife's word using:  
    - A **German dictionary library for Node.js**.  
    - A **simple algorithm** to optimize guesses.  

## About the App

- **Web Application:** Compatible with all common screen sizes.  
- **Smart Evolution:** The app will get smarter over time with new features planned to make it even more effective.

Stay tuned as I continue to refine and improve Word!  

      `
      /* `
        Word is a supporting app for a guessing game. 
        The Game: Both players get a four letter word and have to guess the other players word.
        Each round each player guesses a word and the other player answers with a number between 0 and 4.
        The number indicates how many letters of the guessed word are in the other players word AND are at the correct position.
        The player who guesses the word first wins the round.

        My wife won a couple of times now, so I decided to create an app to help me win more often.
        The app generates a four letter word and helps me to guess the word of my wife by using a german dictionary library for node.js and a simple algorithm.

        The app is a web application that fits on any common screen.
        It should get smarter over time with more features to come.
      ` */,
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
      # Static QR Code Generator

The **Static QR Code Generator** is a free web application that allows users to create fully customizable static QR codes with logos and colors embedded.

## Features

- **Logo Embedding:** Place your own logo in the center of the QR code.  
- **Color Customization:** Change the colors of the QR code to match your branding or design needs.  
- **Logo Positioning:** Reposition the embedded logo for the perfect look.  

## File Downloads

- **SVG Format:** Download as an SVG file for unlimited resizing without quality loss.  
- **PNG Format:** Download as a PNG file for immediate use in projects.

## Accessibility

The tool is **free to use** and accessible via any web browser. Start generating customized QR codes for your projects today!  

      `
      /* `
        The Static QR Code Generator is a customization tool for generating static QR codes with logos and colors embedded.
        The tool is a web application that allows users to generate a QR code with their own logo in it's middle.
        The users can customize the QR code by changing the colors of the QR code and reposition the embedded logo.

        The users can also download the QR code as either an SVG file to resize it as they wish, or as a PNG file and use it for their projects.
        The tool is free to use.
      ` */,
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
    ),
    new Project(
      "captainfocus",
      "Captain Focus",
      "A pomodoro timer to help you stay focused on your tasks.",
      `
      # Captain Focus: A Pomodoro Timer to Stay Focused

**Captain Focus** is a pomodoro timer to help you stay focused on your tasks.

## Features

- **Pomodoro Timer:** 25 minutes of work, followed by a 5 minute break.
- **Break Timer:** 5 minutes of break, followed by a 25 minute work session.
- **Customizable:** Change the work and break times to your liking.
- **AI-Powered:** Create Pomodoro plans with AI.
    `,
      "/projects/captainfocus_light.svg",
      "/projects/captainfocus_dark.svg",
      new Date(2025, 3, 1),
      ProjectStatus.IN_PROGRESS,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT_NATIVE,
        Technologies.EXPO,
      ],
      "",
      "https://captainfocus.com",
    ),
    new Project(
      "showradar",
      "Showradar",
      "A tool for tracking and analyzing shows you are watching or interested in.",
      `
      # Showradar: A Tool for Tracking and Analyzing Shows you are watching or interested in

**Showradar** is a tool for tracking and analyzing shows you are watching or interested in.

## Features

- **Tracking:** Track shows you are watching or interested in.
- **Analyzing:** Analyze shows you are watching or interested in.
- **Recommendations:** Get recommendations for shows you might like.
- **Notifications:** Get notified when a new episode of a show you are interested in is available.

      `,
      "/projects/showradar_light.svg",
      "/projects/showradar_dark.svg",
      new Date(2025, 3, 18),
      ProjectStatus.IN_PROGRESS,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT_NATIVE,
        Technologies.EXPO,
      ],
      "",
      "",
    ),
    new Project(
      "weingartner-physio",
      "Weingartner Physio",
      "An info website for a physical therapist.",
      `
      # Weingartner Physio: Physical Therapy Information Website

**Weingartner Physio** is an information website for a physical therapist practice.

## Features

- **Information:** Comprehensive information about the physical therapy services offered.
- **Contact Details:** Easy access to contact information for appointments and inquiries.
- **Interactive Map:** Embedded map showing the location of the practice for easy navigation.

## Project Details

This website provides a professional online presence for the physical therapy practice, making it easy for potential patients to find information about services and contact the practice.

      `,
      "/projects/mw_physio.jpg",
      "/projects/mw_physio.jpg",
      new Date(2025, 4, 30), // May 30, 2025
      ProjectStatus.COMPLETED,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
      ],
      "",
      "https://www.mwphysiowien.at/",
      new Date(2025, 5, 4) // June 4, 2025
    ),
    new Project(
      "qiye-restaurant",
      "QiYe Restaurant",
      "An info website for the traditional Chinese restaurant 'QiYe'.",
      `
      # QiYe Restaurant: Traditional Chinese Cuisine Website

**QiYe Restaurant** is an information website for a traditional Chinese restaurant.

## Features

- **Restaurant Information:** Detailed information about the restaurant and its traditional Chinese cuisine.
- **Contact Details:** Easy access to contact information for reservations and inquiries.
- **Contact Form:** Interactive contact form for customer inquiries and feedback.
- **Slideshow:** Visual showcase of the restaurant's atmosphere and dishes.
- **Menu:** Complete menu with traditional Chinese dishes and pricing.
- **Interactive Map:** Embedded map showing the restaurant's location for easy navigation.

## Project Details

This website provides a comprehensive online presence for the QiYe restaurant, allowing customers to explore the menu, view photos, and easily make contact for reservations or inquiries.

      `,
      "/projects/qiye_restaurant.jpeg",
      "/projects/qiye_restaurant.jpeg",
      new Date(2025, 4, 26), // May 26, 2025
      ProjectStatus.IN_PROGRESS,
      [
        Technologies.TYPESCRIPT,
        Technologies.REACT,
        Technologies.NEXT_JS,
        Technologies.TAILWIND_CSS,
      ],
      "",
      "https://qiye.at/",
    )
  ];