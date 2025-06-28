"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: {
    overview: string;
    challenges?: string;
    solutions?: string;
    features: string[];
  };
};

export function ExpandableProjectCards() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  useOutsideClick(ref, () => setActiveProject(null));

  return (
    <>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 flex items-center justify-center z-[60] p-6"> {/* Increased padding */}
            <motion.div
              layoutId={`card-${activeProject.id}-${id}`}
              ref={ref}
              className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col " // Added border with your color
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-72 object-cover" // Increased height
                />
                <motion.button
                  className="absolute top-6 right-6 bg-white/90 dark:bg-gray-700/90 rounded-full p-3 shadow-lg hover:scale-110 transition-transform" // Increased padding
                  onClick={() => setActiveProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CloseIcon />
                </motion.button>
              </div>

              <div className="p-8 overflow-y-auto flex-1"> {/* Increased padding */}
                <div className="flex flex-col lg:flex-row gap-8"> {/* Increased gap */}
                  <div className="flex-1">
                    <motion.h2 
                      layoutId={`title-${activeProject.id}-${id}`}
                      className="text-3xl font-bold text-gray-900 dark:text-[#D1F2EB] mb-4" // Used your color for dark mode
                    >
                      {activeProject.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeProject.id}-${id}`}
                      className="text-lg text-gray-700 dark:text-gray-300 mb-6" // Increased size
                    >
                      {activeProject.description}
                    </motion.p>

                    <div className="mb-8"> {/* Increased margin */}
                      <h3 className="font-semibold text-xl text-gray-800 dark:text-[#D1F2EB] mb-3"> {/* Used your color */}
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                        {activeProject.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="inline-block bg-[#D1F2EB] text-gray-800 px-4 py-2 rounded-full text-sm font-medium" // Used your color as background
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold text-xl text-gray-800 dark:text-[#D1F2EB] mb-3">
                        Project Overview
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"> {/* Improved readability */}
                        {activeProject.details.overview}
                      </p>
                    </div>

                    {activeProject.details.challenges && (
                      <div className="mb-8">
                        <h3 className="font-semibold text-xl text-gray-800 dark:text-[#D1F2EB] mb-3">
                          Challenges
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                          {activeProject.details.challenges}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-2/5">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg  "> {/* Added border */}
                      <h3 className="font-semibold text-xl text-gray-800 dark:text-[#D1F2EB] mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {activeProject.details.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-lg" // Increased size
                          >
                            <span className="text-[#D1F2EB] mt-1 text-xl">•</span> {/* Used your color */}
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 mt-8"> {/* Increased margin */}
                      {activeProject.githubUrl && (
                        <motion.a
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-800 hover:bg-gray-700 text-[#D1F2EB] px-6 py-4 rounded-lg text-center font-medium flex items-center justify-center gap-3 text-lg" // Used your color for text
                        >
                          <GithubIcon className="w-6 h-6" />
                          View Code
                        </motion.a>
                      )}
                      {activeProject.liveUrl && (
                        <motion.a
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#D1F2EB] hover:bg-[#b8e0d9] text-gray-800 px-6 py-4 rounded-lg text-center font-medium flex items-center justify-center gap-3 text-lg" // Used your color as background
                        >
                          <ExternalLinkIcon className="w-6 h-6" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6"> {/* Increased gap and padding */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}-${id}`}
            onClick={() => setActiveProject(project)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all" // Added hover border
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative h-56"> {/* Increased height */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6"> {/* Increased padding */}
                <motion.h3
                  layoutId={`title-${project.id}-${id}`}
                  className="text-2xl font-bold text-[#D1F2EB] mb-2" // Used your color
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.id}-${id}`}
                  className="text-[#D1F2EB]/90 text-lg" // Used your color
                >
                  {project.description}
                </motion.p>
              </div>
            </div>

            <div className="p-6"> {/* Increased padding */}
              <div className="flex flex-wrap gap-3 mb-4"> {/* Increased gap */}
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm bg-[#D1F2EB] text-gray-800 px-3 py-1.5 rounded-full font-medium" // Used your color
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[0.78rem] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-[#D1F2EB] px-3 py-1.5 rounded-full font-medium">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex gap-3 justi">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gray-800 hover:bg-gray-700 text-[#D1F2EB] px-4 py-2 rounded-lg font-medium" // Used your color
                  >
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-[#D1F2EB] hover:bg-[#b8e0d9] text-gray-800 px-4 py-2 rounded-lg font-medium" // Used your color
                  >
                    Live
                  </a>
                )}
                <button className="text-sm ml-auto bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-[#D1F2EB] px-4 py-2 rounded-lg font-medium">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-gray-800 dark:text-gray-200"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce.example.com",
    details: {
      overview: "A comprehensive e-commerce solution with product listings, cart functionality, user authentication, and payment processing. Built with modern web technologies to provide a seamless shopping experience.",
      challenges: "Implementing real-time inventory updates and ensuring secure payment processing were the main challenges.",
      solutions: "Used WebSockets for real-time updates and implemented Stripe's secure payment API with proper validation.",
      features: [
        "Product catalog with filters and search",
        "User authentication and profiles",
        "Shopping cart with persistent storage",
        "Checkout process with multiple payment options",
        "Order history and tracking",
        "Admin dashboard for product management"
      ]
    }
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management for teams",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/example/task-manager",
    liveUrl: "https://tasks.example.com",
    details: {
      overview: "A productivity application designed to help teams organize, prioritize, and track their work. Features real-time collaboration and customizable workflows.",
      challenges: "Achieving real-time sync across multiple clients while maintaining performance.",
      features: [
        "Real-time task updates",
        "Drag-and-drop interface",
        "Team collaboration spaces",
        "Customizable task statuses",
        "Due date reminders",
        "Activity history",
        "Mobile responsive design"
      ]
    }
  },
  {
    id: "3",
    title: "Health Tracker",
    description: "Monitor your fitness and nutrition goals",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/example/health-tracker",
    details: {
      overview: "A mobile application that helps users track their fitness activities, nutrition intake, and health metrics over time. Provides personalized recommendations based on user goals.",
      challenges: "Processing and visualizing large datasets of health metrics efficiently on mobile devices.",
      solutions: "Implemented data aggregation on the backend and used optimized charting libraries for smooth visualization.",
      features: [
        "Activity tracking with GPS",
        "Nutrition diary with barcode scanning",
        "Health metric tracking (weight, sleep, etc.)",
        "Personalized goal setting",
        "Progress visualization with charts",
        "Social sharing features",
        "Offline functionality"
      ]
    }
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Interactive showcase of creative work",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    liveUrl: "https://portfolio.example.com",
    details: {
      overview: "A visually stunning portfolio website featuring interactive 3D elements and smooth animations to showcase creative work in an engaging way.",
      features: [
        "3D model viewer",
        "Interactive animations",
        "Project showcase gallery",
        "Responsive design",
        "Dark/light mode toggle",
        "Contact form with validation",
        "Performance optimized"
      ]
    }
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "Generate marketing content using AI",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["Python", "FastAPI", "React", "OpenAI API"],
    githubUrl: "https://github.com/example/ai-content",
    details: {
      overview: "A web application that leverages AI to generate marketing content including blog posts, social media captions, and product descriptions based on user prompts.",
      challenges: "Managing API rate limits and providing meaningful output from AI responses.",
      features: [
        "Multiple content generation templates",
        "Customizable tone and style",
        "Content history and favorites",
        "Export options (text, HTML, DOCX)",
        "User feedback system to improve results",
        "Team collaboration features"
      ]
    }
  },
  {
    id: "6",
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with maps",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    techStack: ["Vue.js", "D3.js", "Mapbox", "Weather API"],
    githubUrl: "https://github.com/example/weather-app",
    liveUrl: "https://weather.example.com",
    details: {
      overview: "A comprehensive weather application providing current conditions, forecasts, and historical data with interactive maps and data visualizations.",
      features: [
        "Current weather conditions",
        "7-day forecast",
        "Interactive weather maps",
        "Historical data trends",
        "Severe weather alerts",
        "Location-based recommendations",
        "Customizable dashboard"
      ]
    }
  }
];