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

// 1. Update Interface sesuai data "absenku"
interface ProjectType {
  id: string; // Sudah dipastikan string
  title: string;
  category: string;
  image: string; // Gambar utama
  images?: string[]; // Array gambar tambahan (Gallery)
  description: string;
  fullDescription?: string;
  techStack: string[];
  url: string;
  demoUrl?: string;
  features?: string[];   // Tambahan
  challenges?: string[]; // Tambahan
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  
  // State untuk Gallery (Gambar yang sedang aktif ditampilkan)
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const foundProject = projects.find(p => String(p.id) === id);
    
    // Casting ke any dulu jika data aslinya belum strict, lalu ke ProjectType
    setProject(foundProject as unknown as ProjectType);
    
    if (foundProject) {
      document.title = `${foundProject.title} - DKF Web`;
      // Set gambar default pertama kali load
      setActiveImage(foundProject.image);
    }
    
    setLoading(false);
  }, [id]);

  // --- STATE: LOADING ---
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        </main>
      </div>
    );
  }

  // --- STATE: NOT FOUND ---
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

  // --- STATE: SUCCESS ---
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Button */}
          <Link 
            to="/myprojects" 
            className="group inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* --- KOLOM KIRI: IMAGE GALLERY --- */}
            <div className="space-y-4">
                {/* Main Image Preview */}
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="h-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <img 
                        src={activeImage || project.image} 
                        alt={project.title}
                        className="w-full h-auto object-contain bg-gray-50 dark:bg-gray-900 transition-all duration-300" 
                    />
                </div>

                {/* Thumbnail List (Hanya muncul jika ada images array) */}
                {project.images && project.images.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {/* Tampilkan gambar utama asli sebagai thumbnail pertama */}
                    <button 
                      onClick={() => setActiveImage(project.image)}
                      className={`relative rounded-lg overflow-hidden border-2 aspect-video ${activeImage === project.image ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <img src={project.image} alt="Main" className="w-full h-full object-cover" />
                    </button>

                    {/* Loop array images */}
                    {project.images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative rounded-lg overflow-hidden border-2 aspect-video ${activeImage === img ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
            </div>

            {/* --- KOLOM KANAN: DETAIL INFO --- */}
            <div className="space-y-8">
                <div>
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
                </div>

                {/* Key Features Section (Baru) */}
                {project.features && project.features.length > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30">
                    <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="mr-2 text-blue-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges Section (Baru) */}
                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <BoltIcon className="w-5 h-5 mr-2 text-yellow-500" />
                      Challenges & Solutions
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-1">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                    <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                        Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none justify-center inline-flex items-center px-6 py-3.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        View Code
                    </a>

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
                </div>
            </div>

          </div>
        </div>
      </main>

      <FooterWeb />
    </div>
  );
}