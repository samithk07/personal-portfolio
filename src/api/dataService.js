const API_BASE_URL = 'http://localhost:3001';

// Fallback data in case server fails
const FALLBACK_DATA = {
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern dashboard with real-time analytics, order management, and inventory tracking.",
      tech: ["React", "Tailwind CSS", "Chart.js", "Redux"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["web", "dashboard"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with drag & drop functionality.",
      tech: ["React", "Framer Motion", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["web", "productivity"]
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather forecasting application with location-based services.",
      tech: ["React", "OpenWeather API", "Geolocation API", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["web", "api"]
    },
    {
      id: 4,
      title: "Portfolio Template",
      description: "Modern portfolio template with dark mode and animated components.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "AOS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["web", "template"]
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with user authentication and file sharing.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["fullstack", "realtime"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Workout tracking application with progress visualization and scheduling.",
      tech: ["React Native", "Firebase", "Recharts", "Context API"],
      githubUrl: "#",
      liveUrl: "#",
      image: "",
      category: ["mobile", "health"]
    }
  ]
};

// Cache for storing fetched data
let cache = {
  projects: null,
  lastFetch: null,
  cacheDuration: 5 * 60 * 1000 // 5 minutes
};

// Check if cache is valid
const isCacheValid = () => {
  if (!cache.lastFetch || !cache.projects) return false;
  return Date.now() - cache.lastFetch < cache.cacheDuration;
};

// Fetch data from JSON server with caching
export const fetchData = async (endpoint) => {
  // Return cached data if valid
  if (isCacheValid() && cache[endpoint]) {
    console.log(`Returning cached ${endpoint}`);
    return cache[endpoint];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }
    
    const data = await response.json();
    
    // Update cache
    cache = {
      ...cache,
      [endpoint]: data,
      lastFetch: Date.now()
    };
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    
    // Return fallback data if available
    if (FALLBACK_DATA[endpoint]) {
      console.log(`Using fallback data for ${endpoint}`);
      return FALLBACK_DATA[endpoint];
    }
    
    throw error;
  }
};

// Get all projects
export const getProjects = () => fetchData('projects');

// Get unique technologies from projects
export const getUniqueTechs = (projects) => {
  if (!projects || !Array.isArray(projects)) return [];
  const allTech = projects.flatMap(project => project.tech || []);
  return [...new Set(allTech)].sort();
};