export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: About text and photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
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
          </div>

          <div>
            <img
              src="/images/andy.jpg"
              alt="Andy Meira - Architect and 3D Artist"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom section: Technical Expertise and Notable Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            <div className="space-y-2 text-accent">
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
    </section>
  );
}
