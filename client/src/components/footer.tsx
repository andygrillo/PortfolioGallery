export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Andy Meira. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
