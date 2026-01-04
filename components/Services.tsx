'use client'

import { 
  Dumbbell, 
  User, 
  Clock,
  CreditCard
} from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Fitness Klub',
    description: 'Kompletně vybavené fitness s aerobní zónou, posilovacími stroji Grün sport a strečinkovou místností.',
    features: ['Běžecké pásy', 'Posilovací stroje', 'Strečinková zóna']
  },
  {
    icon: User,
    title: 'Osobní Trenér',
    description: '30 let praxe ve fitness a 22 let zkušeností v trenérství všech věkových kategorií včetně zdravotních potíží.',
    features: ['Individuální plány', 'Speciální programy', 'Trénink pro seniory']
  },
  {
    icon: Clock,
    title: 'Bez závazků',
    description: 'Všechny permanentky jsou časově neomezené a může je čerpat více cvičenců najednou.',
    features: ['Časově neomezené', 'Přenositelné', 'Flexibilní využití']
  },
  {
    icon: CreditCard,
    title: 'Platební možnosti',
    description: 'Přijímáme Multisport karty, SODEXHO PASS, TICKET poukázky, platby z FKSP a hotovost.',
    features: ['Multisport karty', 'SODEXHO PASS', 'TICKET poukázky', 'Hotovost']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            Služby
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Co nabízíme
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Komplexní péče o vaše tělo i duši. Od fitness přes osobní trénink 
            až po služby duly a zpracování placenty.
          </p>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-dark group"
            >
              <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-blue/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent-blue" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-text-light mb-5 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-text-light">
                    <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-12 bg-gradient-to-r from-light-blue to-accent-blue rounded-xl p-5 md:p-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-2">
            Speciální nabídka pro nové zákazníky
          </h3>
          <p className="text-primary-dark/80 mb-4 max-w-2xl mx-auto text-sm">
            Při zakoupení 1. permanentky u nového zákazníka získáte 
            <strong> 50% slevu</strong> na hodinu s trenérem + sestavení 
            individuálního tréninkového programu
          </p>
          <a href="#contact" className="inline-block bg-primary-dark text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-blue transition-colors">
            Začít cvičit
          </a>
        </div>
      </div>
    </section>
  )
}


