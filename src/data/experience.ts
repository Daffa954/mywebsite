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
    position: "Mentor - Advice & Mentoring Division", // Nama divisi diperjelas
    company: "Orientation Week Universitas Ciputra Surabaya",
    responsibilities: [
      "Mentored a group of 10 incoming freshmen throughout the one-week intensive orientation program.",
      "Facilitated the adaptation process by introducing campus culture, academic systems, and university life to new students.",
      "Evaluated and provided constructive feedback on students' daily assignments and group projects.",
    ],
  },
  {
    period: "Sep 2024 - June 2025",
    type: "Organization",
    position: "Student Mentor",
    company: "Mentoring Department Universitas Ciputra Surabaya",
    responsibilities: [
      "Guided first-year students through their transition to university life, ensuring a smooth academic and social adaptation.",
      "Delivered structured soft-skill modules including Stress Management, Healthy Lifestyle, and Personal Finance.",
      "Conducted regular sharing sessions to listen to students' concerns and provided constructive advice to help them overcome challenges.",
    ],
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
    url: "https://github.com/elvernh/Absenku", // Pastikan link repo benar

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
    url: "https://github.com/Daffa954/ALP_Jevon_Carry_MAD",

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
    url: {
      Front_end: "https://github.com/yohanajocelyn/EchoLearn",
      "Back-end": "https://github.com/yohanajocelyn/EchoLearnBackend",
    },
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
    techStack: [
      "React",
      "TypeScript",
      "Express.js",
      "DeepSeek API",
      "Tailwind CSS",
    ],

    image: mealplanner1,
    url: {
      Front_end: "https://github.com/Daffa954/mealPlanner-backend",
      "Back-end": "https://github.com/Daffa954/mealPlanner-frontend",
    },

    features: [
      "AI-Powered Recipe Generator (DeepSeek Integration)",
      "Nutritional Personalization (Based on Age, Height, Weight)",
      "Smart Pantry Search (Generate based on available ingredients)",
      "Location-Based Recommendations (Fallback logic)",
      "Allergy & Meal Type Filtering",
    ],

    challenges: [
      "First-time integration of a Large Language Model (LLM) into a web app",
      "Handling non-deterministic AI responses (Prompt Engineering to force valid JSON outputs)",
      " designing a backend structure to bridge the React frontend with the DeepSeek API securely",
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
    id: "ucmarketplace",
    title: "UC Marketplace",
    category: "Mobile App", // Sesuaikan jika ini Flutter/React Native

    // Description: Fokus pada solusi masalah PO mahasiswa
    description:
      "A centralized marketplace app designed for Universitas Ciputra students to manage Food & Beverage Pre-Orders (PO). It solves the chaos of manual ordering by providing detailed pickup locations, real-time order tracking, and integrated digital payments.",

    // Full Description: Masalah -> Solusi -> Peran Kamu
    fullDescription:
      "UC Marketplace was developed to streamline the chaotic Pre-Order (PO) culture at Universitas Ciputra. Previously, buyers struggled with unclear pickup locations and untrackable orders, while sellers were overwhelmed by manual bank transfer checks and managing multiple PO batches.\n\n**My Core Responsibilities:**\nI was responsible for the **Payment System Integration** using **Midtrans Gateway**. My task was to ensure payment statuses (Pending, Success, Failed) were perfectly synchronized between Buyer and Seller in real-time. I also developed the **Seller Order Management** module, allowing sellers to process incoming orders efficiently.\n\nAdditionally, I attempted to build a 'Nearest PO' search feature using geolocation logic (Long/Lat), though it remains a prototype due to complex distance calculation challenges.",

    // Tech Stack: Saya tambahkan Midtrans & Google Maps (jika pakai maps)
    techStack: [
      "Flutter",

      "Midtrans Payment Gateway",
      "Open Street Maps API",
      "MySQL",
    ],

    image: ucmarketplace1,
    url: "https://github.com/Daffa954/uc_marketplace",

    features: [
      "Integrated Payment Gateway (Midtrans with QRIS Simulator)",
      "Multi-Tenant Seller Dashboard (Manage Multiple POs)",
      "Real-Time Order Status Tracking",
      "Detailed Pickup Location (Maps & Photo Evidence)",
      "In-App Chat between Buyer and Seller",
    ],

    challenges: [
      "Integrating Midtrans Sandbox environment and handling QR Code string simulation for testing payments",
      "Synchronizing payment status callbacks (Webhooks) between the payment provider and our database",
      "Implementing complex geolocation logic to sort tenants by nearest distance (Radius Search)",
    ],

    images: [ucmarketplace2, ucmarketplace3, ucmarketplace4],
  },

  {
    id: "financehub",
    title: "Finance Hub",
    category: "Full Stack", // atau "Web App"

    // Description: Singkat, padat, menonjolkan fitur unik (Activity-based & AI)
    description:
      "A smart financial management platform built with Laravel that uses a hybrid AI approach to analyze user spending habits. It distinguishes between daily expenses and specific activity-based costs (e.g., group projects) to provide context-aware financial health assessments.",

    // Full Description: Menjelaskan arsitektur "Hybrid AI" yang kamu buat di Controller
    fullDescription:
      "Finance Hub goes beyond simple expense tracking by introducing 'Activity-Based Costing' for personal finance. Users can link expenses to specific activities (like 'Work Trip' or 'Group Project'), preventing these one-time costs from skewing their daily spending analytics.\n\n**My Core Contribution:** I architected the **AI Analysis Engine** using a hybrid approach to solve the common 'LLM Math Hallucination' problem. Instead of sending raw data to DeepSeek AI and asking it to calculate totals (which consumes high tokens and is prone to errors), I built a robust **PHP Pre-computation Layer** in the `ReportController`.\n\nThis layer handles all heavy mathematical operations—calculating balance sheets, savings rates, identifying top spending categories, detecting financial anomalies (wasteful dates), and trend analysis—before sending a condensed, high-context summary to the AI. The AI then focuses solely on providing qualitative insights and financial health status (Safe/Warning/Danger) based on the user's job, location, and spending behavior.",

    // Tech Stack: Laravel + DeepSeek + Tailwind
    techStack: ["Laravel", "DeepSeek AI", "MySQL", "Tailwind CSS", "PHP"],

    image: financehub1,
    url: "https://github.com/Daffa954/alp-cc",
    demoUrl: "https://khufra.my.id/",

    features: [
      "Hybrid AI Analysis (PHP Calculation + DeepSeek Reasoning)",
      "Activity-Based Expense Tracking (Separating Daily vs Event Costs)",
      "Automated Anomaly Detection (Identifies Wasteful Days)",
      "Context-Aware Financial Health Scoring (Safe/Warning/Danger)",
      "Income Profile Analysis (Stable vs Freelance)",
    ],

    challenges: [
      "Mitigating AI 'Math Hallucinations' by offloading all calculations to a custom PHP logic layer",
      "Optimizing Token Usage: designing a compact JSON payload that provides maximum context with minimum tokens",
      "Engineering a prompt structure that forces the LLM to return valid, consistent JSON for the financial health status",
      "Handling complex data relationships between Incomes, Expenses, and Activities for accurate reporting",
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
    id: "wasteapp",
    title: "Waste Classifier App",
    category: "Mobile App (AI)",

    // Description: Singkat & Padat
    description:
      "An educational mobile app built with Flutter that uses Image Classification to identify 6 types of waste (Plastic, Glass, Metal, etc.). It integrates with Google Gemini API to provide eco-facts and recycling guides.",

    // Full Description: Menjelaskan Alur App & Peran Teknis Kamu
    fullDescription:
      "Waste Classifier is a group project designed to educate users about waste management. By simply taking a photo, the app classifies waste into 6 categories (Plastic, Glass, Textile, Metal, Paper, Organic) and uses the Google Gemini API to display 'Fun Facts' (e.g., decomposition time) and specific recycling steps.\n\n**My Core Responsibility:** I acted as the **Machine Learning Engineer**. I was responsible for the end-to-end model development using Teachable Machine. This involved curating and merging datasets from various sources to prevent underfitting/overfitting. I performed iterative **Hyperparameter Tuning** (adjusting Epochs, Learning Rate, and Batch Size) to optimize the model.\n\nTo ensure reliability, I validated the model using Python to generate a **Confusion Matrix**, achieving an accuracy score above 70% for all classes. I also handled the logic for interpreting Teachable Machine's output array, specifically managing confidence scores and index-based label mapping.",

    // Tech Stack: Flutter + TM + Gemini
    techStack: [
      "Flutter",
      "Teachable Machine (TFLite)",
      "Google Gemini API",
      "Python (for Validation)",
    ],

    image: wasteapp1,
    url: "https://github.com/FiuJ/alp_ai/tree/main/alp_ai",

    features: [
      "Real-time Image Classification (6 Waste Classes)",
      "AI-Generated Educational Content (Gemini API)",
      "Recycling Guidelines & Eco-Facts",
      "Confidence Score Analysis Logic",
    ],

    challenges: [
      "Curating a balanced dataset by merging multiple sources to ensure high accuracy across all 6 classes",
      "Iterative Hyperparameter Tuning (Epochs, Batch Size, LR) to achieve >70% precision in the Confusion Matrix",
      "Implementing logic to parse Teachable Machine's probability array and handle tie-breaking for similar confidence scores",
    ],

    images: [wasteapp2],
  },
  // ... tambahkan projects lain dengan struktur yang sama
];
