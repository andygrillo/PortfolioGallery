export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">HOW PROJECTS WORK</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            A proven workflow developed over 15+ years, ensuring quality results 
            and clear communication throughout your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">BRIEF & CONSULTATION</h3>
            <p className="text-accent leading-relaxed">
              Initial discussion of your project requirements, timeline, and budget. 
              Review of reference materials and technical specifications.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">CONCEPT DEVELOPMENT</h3>
            <p className="text-accent leading-relaxed">
              Creating initial concepts and camera angles. Development of lighting 
              schemes and material studies based on your vision.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">REFINEMENT & APPROVAL</h3>
            <p className="text-accent leading-relaxed">
              Iterative refinement based on your feedback. Fine-tuning of 
              materials, lighting, and composition until vision is achieved.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-xl font-semibold mb-3">FINAL DELIVERY</h3>
            <p className="text-accent leading-relaxed">
              High-resolution rendering and post-production. Delivery of final 
              images in required formats with full usage rights.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">PROJECT TYPES</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent">Architectural Visualization</span>
                  <span className="font-medium">2-4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent">Product Rendering</span>
                  <span className="font-medium">1-2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent">Interior Visualization</span>
                  <span className="font-medium">2-3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent">Planning Permission Images</span>
                  <span className="font-medium">1-3 weeks</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">WHAT YOU PROVIDE</h3>
              <div className="space-y-2 text-accent">
                <p>• CAD drawings or technical plans</p>
                <p>• Material specifications and references</p>
                <p>• Inspiration images or mood boards</p>
                <p>• Project brief and key requirements</p>
                <p>• Preferred viewing angles or shots</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-accent mb-6">
            Ready to start your project? Let's discuss your requirements.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-primary text-white px-8 py-3 rounded hover:bg-accent transition-colors duration-300 font-medium"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}