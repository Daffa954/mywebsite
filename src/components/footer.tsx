export default function FooterWeb() {
  return (
    <footer className="border-t border-blue-600/30 dark:border-gray-700 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <p className="text-2xl font-bold italic text-white tracking-tight">DKF Web</p>
            </div>
            <p className="text-blue-100 dark:text-gray-300 max-w-md text-lg leading-relaxed">
              Creating beautiful and functional web experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/daffa954"
                className="text-blue-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 dark:hover:bg-gray-300/10 rounded-lg"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/daffa-khoirul-faiz-326a99255"
               
                className="text-blue-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 dark:hover:bg-gray-300/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 dark:hover:bg-gray-300/10 rounded-lg"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-blue-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200 text-base"
                >
                  Home
                </a>
              </li>
            
              <li>
                <a
                  href="myprojects"
                  className="text-blue-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200 text-base"
                >
                  My Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-blue-100 dark:text-gray-300">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>dkhoirul05@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Surabaya Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-600/30 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-blue-100 dark:text-gray-400 text-base mb-4 sm:mb-0">
            © 2025 <span className="text-white font-semibold">DKF Web</span>. All rights reserved.
          </span>
          <div className="text-blue-100 dark:text-gray-400 text-base">
            Handcrafted with <span className="text-red-400">❤</span> by Daffa
          </div>
        </div>
      </div>
    </footer>
  );
}