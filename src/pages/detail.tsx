import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeftIcon, 
  CodeBracketIcon, 
  GlobeAltIcon, 
  CheckCircleIcon, 
  BoltIcon 
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";
import FooterWeb from "../components/footer";
import { useEffect, useState } from "react";
import { projects } from "../data/experience"; 
import { motion, Variants, AnimatePresence } from "framer-motion";

// 1. UPDATE INTERFACE: url bisa String, Array, atau Object
interface ProjectType {
  id: string; 
  title: string;
  category: string;
  image: string; 
  images?: string[]; 
  description: string;
  fullDescription?: string;
  techStack: string[];
  
  // ✅ PENTING: Definisi tipe data URL yang fleksibel
  url: string | string[] | { [key: string]: string }; 
  
  demoUrl?: string;
  features?: string[];   
  challenges?: string[]; 
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projects.find(p => String(p.id) === id);
    setProject(foundProject as unknown as ProjectType);
    
    if (foundProject) {
      document.title = `${foundProject.title} - DKF Web`;
      setActiveImage(foundProject.image);
    }
    setLoading(false);
  }, [id]);

  // --- VARIANTS ANIMASI ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const listContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Project Not Found</h1>
            <Link to="/myprojects" className="text-blue-600 hover:underline">Back to Portfolio</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            
            <motion.div variants={fadeInUp}>
              <Link 
                to="/myprojects" 
                className="group inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* --- LEFT COLUMN: IMAGES --- */}
              <div className="space-y-4">
                  <motion.div 
                    className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-64 sm:h-80 md:h-96 flex items-center justify-center"
                    variants={fadeInUp}
                  >
                      <div className="absolute top-0 w-full h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 space-x-2 z-10">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      
                      <AnimatePresence mode="wait">
                        <motion.img 
                            key={activeImage}
                            src={activeImage || project.image} 
                            alt={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain p-4 mt-6 bg-gray-50 dark:bg-gray-900" 
                        />
                      </AnimatePresence>
                  </motion.div>

                  {project.images && project.images.length > 0 && (
                    <motion.div 
                      className="grid grid-cols-4 gap-2 sm:gap-4"
                      variants={listContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.button 
                        variants={listItem}
                        onClick={() => setActiveImage(project.image)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative rounded-lg overflow-hidden border-2 aspect-video transition-all ${activeImage === project.image ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <img src={project.image} alt="Main" className="w-full h-full object-cover" />
                      </motion.button>

                      {project.images.map((img, idx) => (
                        <motion.button 
                          key={idx}
                          variants={listItem}
                          onClick={() => setActiveImage(img)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative rounded-lg overflow-hidden border-2 aspect-video transition-all ${activeImage === img ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent opacity-70 hover:opacity-100'}`}
                        >
                          <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
              </div>

              {/* --- RIGHT COLUMN: INFO --- */}
              <div className="space-y-8">
                  <motion.div variants={fadeInUp}>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                              {project.category}
                          </span>
                      </div>
                      
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                          {project.title}
                      </h1>

                      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {project.fullDescription || project.description}
                      </div>
                  </motion.div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <motion.div 
                      className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30"
                      variants={listContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li key={idx} variants={listItem} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="mr-2 text-blue-500">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Challenges */}
                  {project.challenges && project.challenges.length > 0 && (
                    <motion.div 
                      variants={listContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <BoltIcon className="w-5 h-5 mr-2 text-yellow-500" />
                        Challenges & Solutions
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-1">
                        {project.challenges.map((challenge, idx) => (
                          <motion.li key={idx} variants={listItem} className="flex items-start">
                            <span className="mr-2 text-yellow-500">➜</span>
                            {challenge}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  <motion.div 
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                      <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                          Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                              <motion.span 
                                  key={index}
                                  variants={listItem}
                                  whileHover={{ scale: 1.1 }}
                                  className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm cursor-default"
                              >
                                  {tech}
                              </motion.span>
                          ))}
                      </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700"
                    variants={fadeInUp}
                  >
                      {/* --- LOGIKA URL DINAMIS --- */}
                      {(() => {
                        // KASUS 1: URL adalah Object (Key-Value)
                        if (typeof project.url === 'object' && !Array.isArray(project.url) && project.url !== null) {
                          return Object.entries(project.url).map(([key, link], idx) => (
                            <a 
                                key={idx}
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none justify-center inline-flex items-center px-6 py-3.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 capitalize"
                            >
                                <CodeBracketIcon className="w-5 h-5 mr-2" />
                                {key.replace(/_/g, ' ').replace(/-/g, ' ')}
                            </a>
                          ));
                        }

                        // KASUS 2: URL adalah Array
                        else if (Array.isArray(project.url)) {
                          return project.url.map((link, idx) => (
                            <a 
                                key={idx}
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none justify-center inline-flex items-center px-6 py-3.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <CodeBracketIcon className="w-5 h-5 mr-2" />
                                Repo {idx + 1}
                            </a>
                          ));
                        }

                        // KASUS 3: URL adalah String
                        else {
                          return (
                            <a 
                                href={project.url as string} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none justify-center inline-flex items-center px-6 py-3.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <CodeBracketIcon className="w-5 h-5 mr-2" />
                                View Code
                            </a>
                          );
                        }
                      })()}

                      {/* Tombol Live Demo */}
                      {project.demoUrl && (
                          <a 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 sm:flex-none justify-center inline-flex items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                          >
                              <GlobeAltIcon className="w-5 h-5 mr-2" />
                              Live Demo
                          </a>
                      )}
                  </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <FooterWeb />
    </div>
  );
}