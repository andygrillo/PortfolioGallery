export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2>ABOUT</h2>
            <p className="text-lg text-accent mb-6 leading-relaxed">
              I am Andy Meira, RIBA registered architect and 3D artist with over 15 years 
              of experience in architectural visualization and 3D design. My work spans from 
              prestigious UK architectural projects to innovative hardware product visualization 
              featured in international publications.
            </p>
            <p className="text-lg text-accent mb-6 leading-relaxed">
              As CEO of Grillo, I developed compelling 3D product imagery featured in Wired 
              magazine and used by partners including Amazon and IBM. My professional foundation 
              was built at leading UK visualization agencies including Squint Opera, Virtual 
              Artworks, and Glass Canvas.
            </p>
            <p className="text-lg text-accent mb-8 leading-relaxed">
              Throughout my career, I've successfully managed relationships with prestigious 
              clients such as the Clinton Foundation, Deutsche Bank, and Royal Academy of Music, 
              consistently delivering high-quality visual projects that help secure commissions 
              and define architectural concepts.
            </p>

            <div className="space-y-6">
              <div>
                <h3>TECHNICAL EXPERTISE</h3>
                <div className="space-y-2 text-accent">
                  <div>• 3ds Max & Corona / Vray Renderer</div>
                  <div>• Unreal Engine and Unity 3D</div>
                  <div>• AutoCAD, Microstation & ArchiCAD</div>
                  <div>• Adobe Suite (Photoshop, After Effects, Premiere Pro)</div>
                  <div>• Stable Diffusion & AI integration</div>
                </div>
              </div>

              <div>
                <h3>NOTABLE CLIENTS</h3>
                <div className="text-accent space-y-1">
                  <div>• Clinton Foundation</div>
                  <div>• Deutsche Bank</div>
                  <div>• Royal Academy of Music</div>
                  <div>• Amazon & IBM</div>
                  <div>• Squint Opera</div>
                  <div>• John McAslan + Partners</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
              alt="Architectural workspace"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
