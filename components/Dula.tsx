'use client'

import { Heart, Baby, Leaf, Clock, Award, CheckCircle } from 'lucide-react'

const packageItems = [
  '3 předporodní schůzky (1 hod)',
  '14 dní pohotovost před porodem',
  'Doprovod k porodu',
  '2 poporodní návštěvy',
]

const placentaServices = [
  { name: 'Kapsle z placenty', desc: 'Pro šestinedělí a regeneraci' },
  { name: 'Krém z placenty', desc: 'Proti vráskám a na suchou pokožku' },
  { name: 'Balzám z placenty', desc: 'Na opruzeniny a hojení' },
  { name: 'Tinktura z placenty', desc: 'Pro posílení imunity' },
  { name: 'Esence z placenty', desc: 'Energetické uzdravování' },
  { name: 'Homeopatika', desc: 'Pro matku i dítě' },
]

const qualifications = [
  'Akreditovaná DULA 1. stupně',
  'Členka Českých dul',
  'Členka spolku NAZEP',
  'Specialistka na zpracování placenty',
]

export default function Dula() {
  return (
    <section id="dula" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            Dula & Placenta
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Služby pro nastávající maminky
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Komplexní podpora během těhotenství, porodu a šestinedělí. 
            Doprovod v Jihočeském kraji a k porodům doma.
          </p>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dula Services */}
          <div className="card-dark">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center">
                <Baby className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Služby Duly</h3>
                <p className="text-text-light text-sm">Doprovod k porodu</p>
              </div>
            </div>

            {/* Package */}
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-white">Balíček služeb</h4>
                <span className="text-2xl font-bold text-accent-blue">7 500 Kč</span>
              </div>
              <ul className="space-y-3">
                {packageItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-text-light">
                    <CheckCircle className="w-4 h-4 text-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-light mt-4 italic">
                Cenu je možné po domluvě upravit dle délky porodu.
              </p>
            </div>

            {/* Additional */}
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-text-light">Seznamovací schůzka</span>
                <span className="text-accent-blue font-semibold">30 min zdarma</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-text-light">Schůzka před porodem</span>
                <span className="text-white font-semibold">450 Kč / hod</span>
              </div>
            </div>
          </div>

          {/* Placenta Services */}
          <div className="card-dark">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-light-blue/20 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zpracování placenty</h3>
                <p className="text-text-light text-sm">Využijte sílu placenty</p>
              </div>
            </div>

            <p className="text-text-light mb-6 leading-relaxed">
              Tradiční čínská medicína používá placentu po tisíce let. 
              Obsahuje hormony, vitamíny a kmenové buňky pro podporu regenerace.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {placentaServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-light-blue/50 transition-colors"
                >
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {service.name}
                  </h4>
                  <p className="text-text-light text-xs">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Special */}
            <div className="mt-6 bg-gradient-to-r from-light-blue/20 to-accent-blue/20 rounded-xl p-4 border border-accent-blue/30">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent-blue" />
                <div>
                  <h4 className="font-semibold text-white">Pupeční šňůra ve tvaru srdce</h4>
                  <p className="text-text-light text-sm">Památka na celý život</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-12 bg-primary-blue rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 justify-center mb-6">
            <Award className="w-6 h-6 text-accent-blue" />
            <h3 className="text-xl font-bold text-white">Kvalifikace</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 text-center border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-accent-blue mx-auto mb-2" />
                <p className="text-text-light text-sm">{qual}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


