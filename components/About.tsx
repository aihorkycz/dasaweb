'use client'

import { CheckCircle } from 'lucide-react'

const features = [
  'Senioři (až 75 let)',
  'Těhotné ženy',
  'Ženy po porodu',
  'Lidé se zdravotními obtížemi',
  'Cvičenci po chemoterapii',
  'Začátečníci i pokročilí',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            O nás
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Vítejte ve Fitness Tábor
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </div>

        {/* Dagmar's Description */}
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-lg text-text-light leading-relaxed">
            Fitness klub jsem vytvořila tak, aby každý člověk, který k nám přijde cvičit, 
            se u nás cítil vítaný, bylo mu dobře a odcházel od nás spokojený, jak po fyzické, 
            tak i po psychické stránce.
          </p>
          
          <p className="text-lg text-text-light leading-relaxed">
            Obzvláště je otevřené pro ty, kteří by do klasického fitness vůbec nezavítali. 
            Trénink sestavuji tak, aby byl nejen účinný, ale aby měl cvičenec z pohybu radost.
          </p>

          <div className="bg-accent-blue/10 border-l-4 border-accent-blue p-6 rounded-r-lg">
            <p className="text-white italic">
              „Důraz je kladen na pohodu, příjemné prostředí a vstřícnost vůči zákazníkovi."
            </p>
            <p className="text-accent-blue font-semibold mt-3">
              — Dagmar Hedvika Sehnalová
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Našimi klienty jsou:
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <span className="text-text-light">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


