'use client'

import { Dumbbell, Award, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark via-primary-blue to-primary-dark pt-16">
      <div className="container-custom text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Dumbbell className="w-8 h-8 text-accent-blue" />
            <span className="text-accent-blue font-semibold tracking-wider uppercase text-sm">
              Fitness Tábor
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Váš osobní
            <span className="text-accent-blue"> fitness </span>
            klub
          </h1>
          
          <p className="text-xl md:text-2xl text-text-light mb-8 max-w-2xl mx-auto">
            30 let praxe ve fitness a kondičním posilování. 
            Individuální přístup pro všechny věkové kategorie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn-primary">
              Kontaktujte nás
            </a>
            <a href="#pricing" className="btn-secondary">
              Zobrazit ceník
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


