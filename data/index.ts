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

export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  details: {
    overview: string
    challenges?: string
    solutions?: string
    features: string[]
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce.example.com',
    details: {
      overview:
        'A comprehensive e-commerce solution with product listings, cart functionality, user authentication, and payment processing. Built with modern web technologies to provide a seamless shopping experience.',
      challenges:
        'Implementing real-time inventory updates and ensuring secure payment processing were the main challenges.',
      solutions:
        "Used WebSockets for real-time updates and implemented Stripe's secure payment API with proper validation.",
      features: [
        'Product catalog with filters and search',
        'User authentication and profiles',
        'Shopping cart with persistent storage',
        'Checkout process with multiple payment options',
        'Order history and tracking',
        'Admin dashboard for product management'
      ]
    }
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management for teams',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://tasks.example.com',
    details: {
      overview:
        'A productivity application designed to help teams organize, prioritize, and track their work. Features real-time collaboration and customizable workflows.',
      challenges:
        'Achieving real-time sync across multiple clients while maintaining performance.',
      features: [
        'Real-time task updates',
        'Drag-and-drop interface',
        'Team collaboration spaces',
        'Customizable task statuses',
        'Due date reminders',
        'Activity history',
        'Mobile responsive design'
      ]
    }
  },
  {
    id: '3',
    title: 'Health Tracker',
    description: 'Monitor your fitness and nutrition goals',
    image:
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['React Native', 'GraphQL', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/example/health-tracker',
    details: {
      overview:
        'A mobile application that helps users track their fitness activities, nutrition intake, and health metrics over time. Provides personalized recommendations based on user goals.',
      challenges:
        'Processing and visualizing large datasets of health metrics efficiently on mobile devices.',
      solutions:
        'Implemented data aggregation on the backend and used optimized charting libraries for smooth visualization.',
      features: [
        'Activity tracking with GPS',
        'Nutrition diary with barcode scanning',
        'Health metric tracking (weight, sleep, etc.)',
        'Personalized goal setting',
        'Progress visualization with charts',
        'Social sharing features',
        'Offline functionality'
      ]
    }
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Interactive showcase of creative work',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    liveUrl: 'https://portfolio.example.com',
    details: {
      overview:
        'A visually stunning portfolio website featuring interactive 3D elements and smooth animations to showcase creative work in an engaging way.',
      features: [
        '3D model viewer',
        'Interactive animations',
        'Project showcase gallery',
        'Responsive design',
        'Dark/light mode toggle',
        'Contact form with validation',
        'Performance optimized'
      ]
    }
  },
  {
    id: '5',
    title: 'AI Content Generator',
    description: 'Generate marketing content using AI',
    image:
      'https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI API'],
    githubUrl: 'https://github.com/example/ai-content',
    details: {
      overview:
        'A web application that leverages AI to generate marketing content including blog posts, social media captions, and product descriptions based on user prompts.',
      challenges:
        'Managing API rate limits and providing meaningful output from AI responses.',
      features: [
        'Multiple content generation templates',
        'Customizable tone and style',
        'Content history and favorites',
        'Export options (text, HTML, DOCX)',
        'User feedback system to improve results',
        'Team collaboration features'
      ]
    }
  },
  {
    id: '6',
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasts with maps',
    image:
      'https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Vue.js', 'D3.js', 'Mapbox', 'Weather API'],
    githubUrl: 'https://github.com/example/weather-app',
    liveUrl: 'https://weather.example.com',
    details: {
      overview:
        'A comprehensive weather application providing current conditions, forecasts, and historical data with interactive maps and data visualizations.',
      features: [
        'Current weather conditions',
        '7-day forecast',
        'Interactive weather maps',
        'Historical data trends',
        'Severe weather alerts',
        'Location-based recommendations',
        'Customizable dashboard'
      ]
    }
  }
]
