// data/experiences.ts

import absenku1 from "../assets/projects/absenku/absenku1.webp";
import absenku2 from "../assets/projects/absenku/absenku2.webp";
import absenku3 from "../assets/projects/absenku/absenku3.webp";
import absenku4 from "../assets/projects/absenku/absenku4.webp";

import mindly1 from "../assets/projects/mindly/mindly1.webp";
import mindly2 from "../assets/projects/mindly/mindly2.webp";

import echolearn1 from "../assets/projects/echolearn/echolearn1.webp";
import echolearn2 from "../assets/projects/echolearn/echolearn2.webp";

import mealplanner1 from "../assets/projects/mealplanner/mealplanner1.webp";
import mealplanner1_1 from "../assets/projects/mealplanner/mealplanner1.png";
import mealplanner2 from "../assets/projects/mealplanner/mealplanner2.png";
import mealplanner3 from "../assets/projects/mealplanner/mealplanner3.png";
import mealplanner4 from "../assets/projects/mealplanner/mealplanner4.png";
import mealplanner5 from "../assets/projects/mealplanner/mealplanner5.png";
import mealplanner6 from "../assets/projects/mealplanner/mealplanner6.png";
import mealplanner7 from "../assets/projects/mealplanner/mealplanner7.png";
import mealplanner8 from "../assets/projects/mealplanner/mealplanner8.png";

import ucmarketplace1 from "../assets/projects/ucmarketplace/ucmarketplace1.png";
import ucmarketplace2 from "../assets/projects/ucmarketplace/ucmarketplace2.png";
import ucmarketplace3 from "../assets/projects/ucmarketplace/ucmarketplace3.png";
import ucmarketplace4 from "../assets/projects/ucmarketplace/ucmarketplace4.png";

import financehub0 from "../assets/projects/financehub/financehub0.png";
import financehub1 from "../assets/projects/financehub/financehub1.png";
import financehub2 from "../assets/projects/financehub/financehub2.png";
import financehub3 from "../assets/projects/financehub/financehub3.png";
import financehub4 from "../assets/projects/financehub/financehub4.png";

import financehub5 from "../assets/projects/financehub/financehub5.png";
import financehub6 from "../assets/projects/financehub/financehub6.png";
import financehub7 from "../assets/projects/financehub/financehub7.png";

import wasteapp1 from "../assets/projects/wasteapp/wasteapp1.png";
import wasteapp2 from "../assets/projects/wasteapp/wasteapp2.png";

export const workExperiences = [
  {
    period: "Aug 2024 - Sep 2024",
    type: "Part Time",
    position: "Algorithm and Programming Course Student Assistant",
    company: "Universitas Ciputra Surabaya• Surabaya",
    responsibilities: [
      "Assisting students in understanding fundamental concepts of algorithms and basic programming using Java through material explanation, practical session guidance, and support in completing assignments",
    ],
  },
  {
    period: "Feb 2025 - Sep 2025",
    type: "Part Time",
    position: "Web Programming Course Student Assistant",
    company: "Universitas Ciputra Surabaya• Surabaya",
    responsibilities: [
      "Assisting students in basic web programming and web design using modern web development tools and technologies, including HTML, CSS, Tailwind, javascript, and PHP.",
    ],
  },
  {
    period: "Feb 2024 - Sep 2025",
    type: "Part Time",
    position: "Database Course Student Assistant",
    company: "Universitas Ciputra Surabaya• Surabaya",
    responsibilities: [
      "Assisting students understand relational database fundamentals, SQL, ERD modeling, and the use of database management tools.",
    ],
  },
  {
    period: "Sep 2025 - Jan 2026",
    type: "Part Time",
    position: "Algorithm and Programming Course Student Assistant",
    company: "Universitas Ciputra Surabaya• Surabaya",
    responsibilities: [
      "Assisting students in understanding fundamental concepts of algorithms and basic programming using Java through material explanation, practical session guidance, and support in completing assignments",
    ],
  },
];

export const organizationExperiences = [
  {
    period: "Mar 2024 - April 2024",
    type: "Organization",
    position: "Guest Relation Officer Committee",
    company: "Universitas Ciputra Surabaya Awarding Night 2024",
    responsibilities: [
      "Orchestrated guest logistics by designing seating layouts and managing the on-site registration process to ensure a seamless event experience.",
    ],
  },
  {
    period: "Aug 2024 - Sep 2024",
    type: "Organization",
    position: "Advice and Mentoring Department Committee",
    company: "Orientation Week Universitas Ciputra Surabaya",
    responsibilities: [
      "Guided new students during Orientation Week to help them adapt to university life.",
    ],
  },
  {
    period: "Sep 2024 - June 2025",
    type: "Organization",
    position: "Student Mentor",
    company: "Mentoring Department Universitas Ciputra Surabaya",
    responsibilities: ["Membantu mahasiswa baru "],
  },
];
export const projects = [
  {
    id: "absenku",
    title: "Absenku",
    category: "Website", // atau "Web App"

    // Description: Singkat, padat, menjelaskan inti masalah & solusi (untuk tampilan Card)
    description:
      "A comprehensive extracurricular management system designed to replace manual Excel workflows. It connects schools with external vendors, automates attendance, and prevents scheduling conflicts during student registration.",

    // Full Description: Menjelaskan latar belakang masalah dan detail teknis (untuk Halaman Detail)
    fullDescription:
      "Absenku was a group project that was built to solve administrative chaos in managing school extracurricular activities. Previously, the school relied on manual Excel sheets, which led to data errors and allowed students to accidentally register for overlapping classes. \n\nThis platform digitizes the entire process by allowing external vendors to manage their own class data and attendance. The system features a smart registration logic that automatically detects and prevents schedule conflicts, ensuring students cannot book two activities at the same time. It also provides students with a personalized dashboard to view their daily schedules.",

    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    image: absenku1,
    url: "https://github.com/yourusername/absenku-repo", // Pastikan link repo benar
    demoUrl: "https://absenku-demo.vercel.app", // Jika ada

    // Features: Diperbaiki sesuai konteks Absenku (bukan Clicker Game lagi)
    features: [
      "Role-Based Access Control (Admin, External Vendor, Student)",
      "Smart Registration System with Schedule Conflict Detection",
      "Real-time Attendance Management for Vendors",
      "Personalized Student Dashboard & Schedule View",
    ],

    // Challenges: Tantangan teknis yang relevan dengan proyek ini
    challenges: [
      "Designing a database schema to handle complex scheduling relationships between vendors and students",
      "Implementing logic to detect overlapping time slots during registration",
      "Creating an intuitive interface for external vendors who may not be tech-savvy",
    ],

    images: [absenku2, absenku3, absenku4],
  },
  {
    id: "mindly",
    title: "Mindly",
    category: "IOS ",

    // Description: Highlight fitur utama + peranmu sedikit
    description:
      "A collaborative iOS mental health project powered by AI. I was responsible for building the CoreML-based journaling system and integrating DeepSeek API for personalized advice.",

    // Full Description: Dibagi menjadi 'Project Overview' dan 'My Role'
    fullDescription:
      "Mindly is a group project designed to help students manage their mental well-being using a hybrid AI approach. The app assesses anxiety levels and provides personalized activity recommendations.\n\nAs the Lead AI Engineer for this project, I was specifically responsible for the **Smart Journaling** feature. I curated the dataset and **trained the CoreML text classification model** to detect emotional states (Stress, Happy, Sad, Neutral) directly on-device. Furthermore, I handled the **backend integration with the DeepSeek API**, designing the logic to prompt the AI for advice based on the CoreML classification results.",

    techStack: ["Swift", "SwiftUI", "CoreML", "DeepSeek API", "AVFoundation"],
    image: mindly1,
    url: "https://github.com/yourusername/mindly-ios",
    demoUrl: "",

    features: [
      "AI-Powered Anxiety Assessment (PHQ-9)",
      "Smart Journaling (My Core Contribution)",
      "On-Device Sentiment Analysis using CoreML",
      "Context-Aware Advice via DeepSeek API Integration",
      "Interactive Breathing Sessions",
    ],

    challenges: [
      "Training the CoreML model to accurately distinguish between 'Neutral' and 'Sad' sentiments in short journal entries",
      "Designing an efficient prompt structure for DeepSeek API to generate relevant advice based on CoreML outputs",
      "Collaborating with my team to makse sure each features work as intended",
    ],

    images: [mindly2],
  },
  {
    id: "echolearn",
    title: "Echolearn",
    category: "Android",

    // Description: Tetap highlight kolaborasi & peran
    description:
      "A collaborative Android app for learning English through songs. In this 2-person project, I led the full-stack development of the Speaking feature and handled the API integration.",

    // Full Description: Menambahkan detail String Matching
    fullDescription:
      "Echolearn is an educational Android application built with **Kotlin Jetpack Compose** designed to help students learn English using music lyrics. The app features three main modules: Listening (fill-in-the-blanks), Speaking (pronunciation practice), and Vocabulary Notes.\n\nAs a core developer in this 2-person team**, I was responsible for the **Full-Stack development of the Speaking feature**. I implemented the assessment logic using **String Matching algorithms**: the app converts the user's spoken input into text (via Speech-to-Text) and compares it strictly against the original lyrics to validate pronunciation accuracy. Additionally, I built the backend using **Express.js (TypeScript)** and handled the API integration for the 'Take a Note' feature.",

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Express.js",
      "TypeScript",
      "Node.js",
    ],

    image: echolearn1,
    url: "https://github.com/yourusername/echolearn-repo",
    demoUrl: "",

    features: [
      "Speaking Practice with String Matching Validation", // Diperjelas
      "Listening Mode (Lyric Gap-Fill Game)",
      "Personal Vocabulary Notebook",
      "Full-Stack API Integration (Android & Express.js)",
    ],

    challenges: [
      "Implementing accurate string matching logic to handle variations in user speech-to-text results",
      "Establishing a seamless connection between Jetpack Compose and the Express.js backend",
      "Coordinating full-stack tasks effectively in a compact 2-person team",
    ],

    images: [echolearn2],
  },
  {
    id: "mealplanner",
    title: "Meal Planner",
    category: "Full Stack", // atau "Web App"
    
    // Description: Singkat, menjelaskan solusi AI untuk orang tua
    description:
      "A group project web application designed to help parents find healthy meal ideas for children (1-12 years). It uses DeepSeek AI to generate personalized recipes based on ingredients, allergies, and child biometrics.",
    
    // Full Description: Menjelaskan Logika AI & Peran Kamu
    fullDescription: 
      "Meal Planner is a web-based solution addressing the daily struggle of mothers in finding suitable recipes for their children. The app takes detailed inputs such as the child's age, height, weight, allergies, and current city to generate nutritionally appropriate meal plans.\n\n**My Core Responsibility:** I led the Full-Stack development of the AI Recipe Generator feature using **React** and **Express (TypeScript)**. I integrated the **DeepSeek API** to process user data. The system logic allows users to input available ingredients for specific recommendations; if no ingredients are provided, the AI suggests local dishes based on the user's city.\n\nOne of the biggest technical hurdles was ensuring the AI returned data in a valid JSON format. I implemented robust prompt engineering and backend parsing logic to handle inconsistent API responses, ensuring the frontend always receives structured recipe data.",
    
    // Tech Stack: Diperbaiki sesuai deskripsi (React, Express, DeepSeek)
    techStack: ["React", "TypeScript", "Express.js", "DeepSeek API", "Tailwind CSS"],
    
    image: mealplanner1, 
    url: "https://github.com/yourusername/mealplanner-repo", 
    demoUrl: "", // Isi jika ada
    
    features: [
      "AI-Powered Recipe Generator (DeepSeek Integration)",
      "Nutritional Personalization (Based on Age, Height, Weight)",
      "Smart Pantry Search (Generate based on available ingredients)",
      "Location-Based Recommendations (Fallback logic)",
      "Allergy & Meal Type Filtering"
    ],
    
    challenges: [
      "First-time integration of a Large Language Model (LLM) into a web app",
      "Handling non-deterministic AI responses (Prompt Engineering to force valid JSON outputs)",
      " designing a backend structure to bridge the React frontend with the DeepSeek API securely"
    ],
    
    images: [
      mealplanner1_1,
      mealplanner2,
      mealplanner3,
      mealplanner4,
      mealplanner5,
      mealplanner6,
      mealplanner7,
      mealplanner8,
    ],
},

  {
    id: "ucmarketplace", // ✅ HARUS string, bukan number
    title: "UC Marketplace",
    description:
      "Clicker game is a project website for my college final project web development course",
    fullDescription: "Detailed description of the Clicker Game project...",
    techStack: ["Laravel", "Tailwind CSS"],
    image: ucmarketplace1, // atau path ke gambar actual
    url: "https://github.com/yourusername/clicker-game",
    demoUrl: "https://clicker-game-demo.vercel.app",
    category: "Android/IOS/Multi Platform",
    features: [
      "Real-time click counter with animations",
      "Upgrade system with various power-ups",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing smooth animations for click feedback",
      "Managing complex state for upgrades and power-ups",
    ],
    images: [ucmarketplace2, ucmarketplace3, ucmarketplace4],
  },

  {
    id: "financehub", // ✅ HARUS string, bukan number
    title: "Finance Hub",
    description:
      "Clicker game is a project website for my college final project web development course",
    fullDescription: "Detailed description of the Clicker Game project...",
    techStack: ["Laravel", "Tailwind CSS"],
    image: financehub1, // atau path ke gambar actual
    url: "https://github.com/yourusername/clicker-game",
    demoUrl: "https://clicker-game-demo.vercel.app",
    category: "Website",
    features: [
      "Real-time click counter with animations",
      "Upgrade system with various power-ups",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing smooth animations for click feedback",
      "Managing complex state for upgrades and power-ups",
    ],
    images: [
      financehub0,
      financehub2,
      financehub3,
      financehub4,
      financehub5,
      financehub6,
      financehub7,
    ],
  },
  {
    id: "wasteapp", // ✅ HARUS string, bukan number
    title: "Waste Classifier App",
    description:
      "Clicker game is a project website for my college final project web development course",
    fullDescription: "Detailed description of the Clicker Game project...",
    techStack: ["Laravel", "Tailwind CSS"],
    image: wasteapp1, // atau path ke gambar actual
    url: "https://github.com/yourusername/clicker-game",
    demoUrl: "https://clicker-game-demo.vercel.app",
    category: "Android/IOS/Multi Platform",
    features: [
      "Real-time click counter with animations",
      "Upgrade system with various power-ups",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing smooth animations for click feedback",
      "Managing complex state for upgrades and power-ups",
    ],
    images: [wasteapp2],
  },
  // ... tambahkan projects lain dengan struktur yang sama
];
