export const navItems = [
  { name: 'Home', link: '#hero' },
  { name: 'Projects', link: '#projects' },
  { name: 'About', link: '#about' },
  { name: 'Contact', link: '#contact' }
]

export const gridItems = [
  {
    id: 1,
    title: 'About me',
    description:
      'I’m Arushi Mittal, an MCA student at NIT Kurukshetra with experience in full-stack and mobile app development, team leadership, and project coordination. As an intern at iHub – AWaDH, IIT Ropar, I contributed to a biomass management platform, working across the stack and leading a team of developers.\nMy technical skills include JavaScript (Next.js, React, Node.js), Firebase, MongoDB, Flutter, basic Linux, and Framer Motion for UI animations. I thrive in collaborative environments and enjoy turning ideas into scalable, real-world applications.\nOn campus, I serve as the Student Placement Coordinator, where I’ve helped organize successful placement drives for companies like Goldman Sachs and DE Shaw. I also lead initiatives as the Secretary of Mexperts, the technical society of MCA and MBA students, contributing to tech-driven events and student engagement.\n Outside of tech, I’m an avid reader and enjoy painting—both of which help me stay creative and balanced. Whether it’s leading a team, building a product, or mentoring peers, I’m driven by a strong sense of purpose, collaboration, and curiosity.',
    className: ' md:col-span-2 md:row-span-2',
    imgClassName: '',
    titleClassName: '',
    img: '',
    spareImg: ''
  },

  {
    id: 3,
    title: 'Academic Path',
    description:
      'A journey from analytical thinking in Physics to hands-on software development in computer applications. ',
    className: 'md:col-span-1 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 5,
    title: '',
    description: '',
    className: 'md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: '',
    img: '',
    spareImg: ''
  },
  {
    id: 6,
    title: 'Let’s Paw-sibly Connect 🐾',
    description: '',
    className: 'md:col-span-2 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center text-center',
    img: '',
    spareImg: ''
  },
  {
    id: 2,
    title: '',
    description: '',
    className: 'md:col-span-1 md:row-span-1 ',
    imgClassName: '',
    titleClassName: 'justify-start ',
    img: '',
    spareImg: ''
  }
]

export type MediaItem = {
  id: number
  type: 'image' | 'video'
  src: string
  alt?: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  mediaItems?: MediaItem[]
  details: {
    overview: string
    contributions?: string[]
    solutions?: string
    features: string[]
    // <-- added media array here
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Virtual-Labs ',
    description:
      'Everything you or your faculy need for your college lab — assignments, tests and coding practice— all in one seamless, secure, and interactive platform',
    image:
      '/images/virtuallab/cover.png',
    techStack: [
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase Authentication',
      'Docker',
      'Nodemailer',
      '@monaco-editor/react'
    ],
    
    mediaItems: [
      {
        id: 14,
        type: 'image',
        src: '/images/virtuallab/login.png',
        alt: 'Login'
      },
      {
        id: 25,
        type: 'image',
        src: '/images/virtuallab/signup.png',
        alt: 'Signup'
      },
      {
        id: 19,
        type: 'image',
        src: '/images/virtuallab/password.png',
        alt: 'Password'
      },
      {
        id: 8,
        type: 'image',
        src: '/images/virtuallab/dashboard.png',
        alt: 'Dashboard'
      },

      {
        id: 15,
        type: 'image',
        src: '/images/virtuallab/newassign.png',
        alt: 'New Assignment'
      },
      {
        id: 16,
        type: 'image',
        src: '/images/virtuallab/newassign2.png',
        alt: 'New Assignment 2'
      },
      {
        id: 17,
        type: 'image',
        src: '/images/virtuallab/newassign3.png',
        alt: 'New Assignment 3'
      },
      {
        id: 6,
        type: 'image',
        src: '/images/virtuallab/codeEditor.png',
        alt: 'Code Editor'
      },
      {
        id: 7,
        type: 'image',
        src: '/images/virtuallab/codeEditor2.png',
        alt: 'Code Editor 2'
      },
      {
        id: 1,
        type: 'image',
        src: '/images/virtuallab/addlab.png',
        alt: 'Add Lab'
      },
      {
        id: 2,
        type: 'image',
        src: '/images/virtuallab/assignfaculty1.png',
        alt: 'Assign Faculty 1'
      },
      {
        id: 3,
        type: 'image',
        src: '/images/virtuallab/assignfaculty2.png',
        alt: 'Assign Faculty 2'
      },
      {
        id: 4,
        type: 'image',
        src: '/images/virtuallab/assignfaculty3.png',
        alt: 'Assign Faculty 3'
      },
      {
        id: 5,
        type: 'image',
        src: '/images/virtuallab/assignfaculty4.png',
        alt: 'Assign Faculty 4'
      },
      {
        id: 10,
        type: 'image',
        src: '/images/virtuallab/inviation2.png',
        alt: 'Invitation 2'
      },
      {
        id: 11,
        type: 'image',
        src: '/images/virtuallab/inviation3.png',
        alt: 'Invitation 3'
      },
      {
        id: 12,
        type: 'image',
        src: '/images/virtuallab/invitation.png',
        alt: 'Invitation'
      },
      {
        id: 13,
        type: 'image',
        src: '/images/virtuallab/invitation4.png',
        alt: 'Invitation 4'
      },
      {
        id: 20,
        type: 'image',
        src: '/images/virtuallab/peopleFaculty.png',
        alt: 'People Faculty'
      },

      {
        id: 24,
        type: 'image',
        src: '/images/virtuallab/search.png',
        alt: 'Search'
      },
      {
        id: 26,
        type: 'image',
        src: '/images/virtuallab/studentDeatil3.png',
        alt: 'Student Detail 3'
      },
      {
        id: 27,
        type: 'image',
        src: '/images/virtuallab/studentDeatil4.png',
        alt: 'Student Detail 4'
      },
      {
        id: 28,
        type: 'image',
        src: '/images/virtuallab/studentDetail.png',
        alt: 'Student Detail'
      },
      {
        id: 9,
        type: 'image',
        src: '/images/virtuallab/discussion.png',
        alt: 'Discussion'
      },

      {
        id: 18,
        type: 'image',
        src: '/images/virtuallab/notification.png',
        alt: 'Notification'
      },

      {
        id: 21,
        type: 'image',
        src: '/images/virtuallab/Schema_1.jpg',
        alt: 'Schema 1'
      },
      {
        id: 22,
        type: 'image',
        src: '/images/virtuallab/Schema_2.jpg',
        alt: 'Schema 2'
      },
      {
        id: 23,
        type: 'image',
        src: '/images/virtuallab/Schema_3.jpg',
        alt: 'Schema 3'
      }
    ],
    details: {
      overview:
        'Virtual-Labs is a comprehensive educational platform designed to facilitate remote laboratory experiences for students and instructors. It supports multiple user roles — Admin, Faculty, and Student — with robust Role-Based Access Control to securely manage access to lab assignments, coding tests, and interactive discussion panels. The platform integrates a dynamic front-end interface featuring a sidebar navigation and role-specific dashboards that adapt content based on user type. The system leverages Firebase Authentication for secure user management and email verification, while all protected routes are secured with backend JWT middleware. A key highlight is the integration of the Monaco Editor for rich code editing experiences and the use of Docker containers on the backend to safely compile and execute code submissions in multiple programming languages, including Python, C++, and Java.',
      contributions: [
        'Structured the backend folder and configured essential environment files.',
        'Integrated Firebase services in both frontend and backend repositories.',
        'Implemented Register and Login flows with token-based authentication secured by middleware.',
        'Ensured Firebase atomicity for consistent transactions.',
        'Enabled email verification via Nodemailer and added checks to prevent duplicate registrations.',
        'Redirected logged-in users away from login/register pages and applied middleware for route protection.',
        'Developed secure logout functionality to clear authentication tokens.',
        'Created assignment and classroom models with associated type files, and developed base controllers for managing these functionalities.',
        'Implemented data-fetching logic for user and classroom data, and corrected assignment structure for editor-side test case access.',
        'Used Next.js dynamic routing to support resource-specific pages and data fetching.',
        'Co-designed the database schema and module structure; created detailed user flow diagrams.',
        'Designed and implemented a role-based access control system for Admin, Faculty, and Student roles, including middleware and cookie-based role recognition.',
        'Enabled conditional rendering across the frontend based on user roles.',
        'Built the entire backend for the tests feature, including models, controllers, and routes for tests, questions, and submissions.',
        'Implemented test creation logic and UI, including the Test Details interface with question lists, code editors, persistent timer, and layout wrapper.',
        'Added basic proctoring controls such as enforced full-screen mode, blocked paste/right-click, and detection of tab switches.',
        'Fixed multiple authentication and route-related bugs; added Firebase-powered password recovery and change-password features.',
        'Rendered subject tabs dynamically based on user roles and developed static UI views for Faculty Test Dashboard and Faculty Assignment Dashboard.',
        'Maintained backend by cleaning database collections to remove malformed or redundant data and ensured schema consistency across the application.'
      ],
      solutions:
        'To address authentication and security, Firebase Authentication was combined with Express.js JWT middleware, ensuring tokens were securely managed and verified on every request. Role-based middleware protected sensitive routes and UI elements, providing a clean separation of privileges. For code execution, Docker containers were spun up on-demand for each submitted code snippet, ensuring isolated and secure environments tailored per programming language. Proctoring features were implemented using front-end event monitoring to detect tab switches, right-clicks, and paste attempts, coupled with real-time warnings and event logging for academic oversight. Notifications and discussion threads are managed with real-time capabilities to foster seamless communication between users. The frontend leverages React hooks for state management and the @monaco-editor/react package for a feature-rich coding environment supporting syntax highlighting, autocomplete, and multi-language editing.',
      features: [
        'Secure Login and Registration with Firebase Authentication and mandatory email verification',
        'Role-Based Access Control with Admin, Faculty, and Student dashboards and permissions',
        'Dynamic Sidebar Navigation offering quick access to Labs, Playground, Discussions, Notifications, and Profile',
        'Lab Management for Admins including lab creation, faculty assignment, and email invitations via Nodemailer',
        'Subject Screen with tab-based navigation for Assignments, Tests, and People, tailored views per user role',
        'Rich Code Editor integrated with Monaco Editor supporting multiple languages and themes',
        'Backend code execution using language-specific Docker containers ensuring secure and isolated runs',
        'Robust Testing Module with multi-question coding tests, proctoring features, timers, and hidden test cases',
        'Faculty grading interface allowing submission review, feedback provision, and grade assignment',
        'Discussion Panel supporting threaded, rich-text conversations with moderation tools (to be implemented)',
        'Real-time Notifications with read/unread statuses, delivered via websockets or polling (to be implemented)',
        'Comprehensive User Profile management and secure logout functionality',
        'Multi-layered security including HTTPS, JWT-based auth, client & server-side route protection, and behavior monitoring during exams',
        'Responsive design and mobile security considerations ensuring consistent behavior across devices'
      ]
    },
    


  },
  {
  id: 'voice-assistant-leo',
  title: 'Voice Assistant Leo',
  description: 'A Flutter-based AI voice assistant app integrating Google Gemini API for contextual conversational AI, voice recognition, and text-to-speech.',
  image: '/images/Leo/Leo-p.png',
  techStack: ['Flutter', 'Dart', 'Google Gemini API', 'speech_to_text', 'flutter_tts'],
  mediaItems: [
    {
      id: 1,
      type: 'video',
      src: '/images/leo/LEO.mp4',
      alt: 'Demo video showing voice assistant features'
    }
  ],
  details: {
    overview: `Voice Assistant Leo is a mobile app built with Flutter that allows users to interact with Google's Gemini AI via natural voice commands. It features speech-to-text transcription, text-to-speech responses, and context-aware conversation management.`,
    solutions: `The app solves the problem of hands-free AI interaction by combining voice recognition, AI chat, and text-to-speech in a seamless UI. It uses Gemini's chat API to maintain conversation context for coherent responses.In addition to all that you can browse dank memes on it as well`,
    features: [
      'Speech-to-text voice input using the speech_to_text package',
      'Text-to-speech output with flutter_tts for natural voice responses',
      'Contextual multi-turn chat leveraging Google Gemini API',
      'Image generation via external meme API',
      'Animated UI elements using animate_do package',
      'Reset and refresh conversation functionality',
      'Environment variable management for API key security',
      'meme-api integegrated for fun'
    ]
  }
},

  {
  id: "4",
  title: 'Mini Games Arcade',
  description: 'A Java Swing based desktop application with 5 classic mini games',
  image: '/images/minigamesarcade/game.jpg',
  techStack: ['Java', 'Swing', 'OOPs'],
  githubUrl: 'https://github.com/saksham069/MiniGames-Arcade',
  mediaItems: [
    {
      id: 3,
      type: 'image',
      src: '/images/minigamesarcade/game.jpg',
      alt: 'BrickBreaker Game Screenshot'
    },
    {
      id: 1,
      type: 'image',
      src: '/images/minigamesarcade/snake.jpg',
      alt: 'Snake Game Screenshot'
    },
    {
      id: 2,
      type: 'image',
      src: '/images/minigamesarcade/brick.jpg',
      alt: 'BrickBreaker Game Screenshot'
    },
     {
      id: 4,
      type: 'image',
      src: '/images/minigamesarcade/flappy.png',
      alt: 'BrickBreaker Game Screenshot'
    },
     {
      id: 5,
      type: 'image',
      src: '/images/minigamesarcade/simon.png',
      alt: 'BrickBreaker Game Screenshot'
    },
     {
      id: 6,
      type: 'image',
      src: '/images/minigamesarcade/doodle.png',
      alt: 'BrickBreaker Game Screenshot'
    },
     {
      id: 7,
      type: 'image',
      src: '/images/minigamesarcade/pause.png',
      alt: 'BrickBreaker Game Screenshot'
    },
  ],
  details: {
    overview: 'This application serves as a mini-games platform where users can select and play several classic games implemented in Java Swing. The architecture is modular, allowing easy addition of new games, and uses multithreading for smooth game loops and rendering.',
    contributions: [
      'Developed the Snake game including game logic, rendering, input handling, collision detection, and dynamic speed adjustment.',
      'Implemented the BrickBreaker game with ball and paddle mechanics, brick collision detection, scoring system, and a gradient-based UI.',
      'Prepared detailed documentation for the overall project architecture, setup instructions, and design decisions to assist future developers and collaborators.'
    ],
    features: [
      'Modular game architecture with an abstract Game class and individual game panels',
      'Dynamic UI panel swapping within a single JFrame window',
      'Support for multiple classic games including Snake and BrickBreaker',
      'Pause and resume functionality with overlay menus',
      'Collision detection using bounding rectangles',
      'Adaptive game speed to increase difficulty progressively',
      'Mouse and keyboard input handling for game controls'
    ]
  }
},

]
