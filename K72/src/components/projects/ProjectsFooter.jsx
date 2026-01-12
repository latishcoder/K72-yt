import React from 'react'

const ProjectsFooter = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-10">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        
        {/* SOCIALS */}
        <div className="flex gap-3">
          {['FB', 'IG', 'IN', 'BE'].map((item) => (
            <div
              key={item}
              className="border border-white rounded-full px-5 py-2 text-xl font-medium cursor-pointer hover:bg-white hover:text-black transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="border border-white rounded-full px-8 py-2 text-xl font-medium cursor-pointer hover:bg-white hover:text-black transition">
          CONTACT ♥
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/20 my-10" />

      {/* BOTTOM BAR */}
      <div className="flex justify-between items-center flex-wrap gap-6 text-sm uppercase tracking-wide">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <span className="text-lg">🌍</span>
          <span>MONTREAL_09:30:21</span>
        </div>

        {/* CENTER */}
        <div className="flex gap-6 flex-wrap justify-center text-white/70">
          <span className="hover:text-white cursor-pointer">
            Politique de confidentialité
          </span>
          <span className="hover:text-white cursor-pointer">
            Avis de confidentialité
          </span>
          <span className="hover:text-white cursor-pointer">
            Rapport éthique
          </span>
          <span className="hover:text-white cursor-pointer">
            Options de consentement
          </span>
        </div>

        {/* RIGHT */}
        <div className="hover:text-white/70 cursor-pointer">
          Retour en haut
        </div>
      </div>
    </section>
  )
}

export default ProjectsFooter
