import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-gray-200 rotate-45 opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light mb-6 hero-text leading-none">
            ANDY<br />
            <span className="text-accent">MEIRA</span>
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl sm:text-2xl text-gray-600 mb-6 leading-relaxed font-light">
            3D Art and Visualization
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-accent uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-primary">UK</div>
              <div className="text-sm text-accent uppercase tracking-wide">Registered Architect</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-primary">Global</div>
              <div className="text-sm text-accent uppercase tracking-wide">Client Base</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("work")}
            className="bg-primary text-white px-10 py-4 text-lg hover:bg-accent transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            VIEW PORTFOLIO
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-primary text-primary px-10 py-4 text-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium bg-white/80 backdrop-blur-sm"
          >
            START PROJECT
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Featured in: Wired, CNN, Architects Journal • Working with: Amazon, IBM, Squint Opera, McAslan&Partners</p>
        </div>
      </div>
    </section>
  );
}
