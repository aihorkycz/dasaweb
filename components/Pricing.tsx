'use client'

import { useState } from 'react'
import { Check, Star, Clock, CreditCard, Calendar, Award } from 'lucide-react'

type TabKey = 'vstupne' | 'mesicni' | 'dlouhodobe' | 'trener'

const tabs = [
  { id: 'vstupne' as TabKey, label: 'Vstupné', icon: CreditCard },
  { id: 'mesicni' as TabKey, label: 'Měsíční', icon: Calendar },
  { id: 'dlouhodobe' as TabKey, label: 'Dlouhodobé', icon: Award },
  { id: 'trener' as TabKey, label: 'Hodiny s trenérem', icon: Clock },
]

const pricingData = {
  vstupne: {
    title: 'Vstupné',
    description: 'Jednorázové vstupy a krátkodobé permanentky',
    items: [
      { name: 'Jednorázový vstup (Po-Pá)', price: '170 Kč', discounted: '140 Kč', note: 'Běžná cena', highlight: false },
      { name: 'Jednorázový vstup (Víkend)', price: '140 Kč', discounted: '110 Kč', note: 'Víkendová cena', highlight: false },
      { name: '5 vstupů', price: '650 Kč', discounted: '600 Kč', note: '130 Kč / vstup', highlight: false },
      { name: '10 vstupů', price: '1 200 Kč', discounted: '1 100 Kč', note: '120 Kč / vstup', highlight: false },
      { name: '20 vstupů', price: '2 200 Kč', discounted: '2 000 Kč', note: '110 Kč / vstup', highlight: false },
      { name: '50 vstupů', price: '5 000 Kč', discounted: '4 500 Kč', note: '100 Kč / vstup', highlight: false },
    ],
    benefits: [
      'Časově neomezená platnost',
      'Přenositelná permanentka',
      'Více cvičenců na jednu permanentku',
      'Zvýhodněné ceny pro vybrané kategorie',
    ],
  },
  mesicni: {
    title: 'Měsíční permanentky',
    description: 'Ideální pro pravidelné cvičení',
    items: [
      { name: 'Měsíční neomezená', price: '1 500 Kč', note: 'Platnost 30 dní', highlight: false },
      { name: 'Měsíční 12 vstupů', price: '1 200 Kč', note: '100 Kč / vstup', highlight: false },
      { name: 'Měsíční 8 vstupů', price: '900 Kč', note: '112 Kč / vstup', highlight: false },
    ],
    benefits: [
      'Neomezený počet vstupů (u neomezené)',
      'Flexibilní využití',
      'Zvýhodněná cena za vstup',
    ],
  },
  dlouhodobe: {
    title: 'Dlouhodobé permanentky',
    description: 'Maximální úspora pro věrné zákazníky',
    items: [
      { name: 'Roční permanentka', price: '15 000 Kč', note: 'Platnost 1 rok', highlight: true, badge: 'NEJLEPŠÍ' },
      { name: 'Pololetní permanentka', price: '9 900 Kč', note: 'Platnost 6 měsíců', highlight: false },
      { name: 'Čtvrtletní permanentka', price: '6 900 Kč', note: 'Platnost 3 měsíce', highlight: false },
    ],
    benefits: [
      'Celoroční pronájem šatní skříňky',
      'Při každé návštěvě iontová dávka zdarma',
      'Při každé návštěvě tableta spalovače zdarma',
      'V den narozenin proteinový nápoj + müsli tyčinka',
      'Každý měsíc 50% SLEVA na hodinu s trenérem',
      'Zapůjčení ručníku zdarma',
      'Při každé třetí návštěvě proteinový nápoj v akci',
      'V den svátku iontový nápoj 0,4 l zdarma',
      'Pravidelné slevové poukázky od partnerů',
    ],
  },
  trener: {
    title: 'Hodiny s trenérem',
    description: 'Individuální trénink s osobním trenérem',
    items: [
      { name: '50 cvičení', price: '29 500 Kč', note: '590 Kč / hodina', highlight: true, badge: 'NEJLEPŠÍ' },
      { name: '25 cvičení', price: '16 250 Kč', note: '650 Kč / hodina', highlight: false },
      { name: '10 cvičení', price: '6 700 Kč', note: '670 Kč / hodina', highlight: false },
      { name: '5 cvičení', price: '3 500 Kč', note: '700 Kč / hodina', highlight: false },
      { name: '1 hodina', price: '750 Kč', note: 'Jednorázově', highlight: false },
    ],
    benefits: [
      'Individuální tréninkový plán',
      'Korekce techniky cvičení',
      'Motivace a podpora',
      'Sledování pokroku',
    ],
  },
}

const discountCategories = [
  'Senioři od 50 let',
  'Junioři do 17 let',
  'Ženy na mateřské',
  'Těhotné ženy',
  'Hendikepovaní',
  'Klientky duly',
]

const includedInPrice = [
  'Základní tréninkové programy',
  'Půjčení fénu',
  'Evidence váhy a měření tělesného tuku',
  'Měření krevního tlaku',
  'Pravidelné ochutnávky 2× týdně',
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabKey>('dlouhodobe')
  const currentData = pricingData[activeTab]

  return (
    <section id="pricing" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            CENÍK
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Nabízíme širokou škálu permanentek a služeb
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent-blue text-primary-dark shadow-lg'
                  : 'bg-primary-blue text-text-light hover:bg-primary-blue/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="card-dark mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {currentData.items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`bg-white/5 rounded-xl p-6 border transition-all ${
                  item.highlight
                    ? 'border-accent-blue shadow-lg relative'
                    : 'border-white/10'
                }`}
              >
                {item.highlight && 'badge' in item && item.badge && (
                  <span className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-white mb-4">
                  {item.name}
                </h3>
                <p className="text-3xl font-bold text-accent-blue mb-1">
                  {item.price}
                </p>
                {'discounted' in item && item.discounted && (
                  <p className="text-sm text-blue-400 font-semibold mb-1">
                    Zvýh.: {item.discounted}
                  </p>
                )}
                <p className="text-text-light text-sm">{item.note}</p>
              </div>
            ))}
          </div>

          {/* Additional items if more than 3 */}
          {currentData.items.length > 3 && (
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {currentData.items.slice(3).map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/5 rounded-xl p-6 border transition-all ${
                    item.highlight
                      ? 'border-accent-blue shadow-lg relative'
                      : 'border-white/10'
                  }`}
                >
                  {item.highlight && 'badge' in item && item.badge && (
                    <span className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-4">
                    {item.name}
                  </h3>
                  <p className="text-3xl font-bold text-accent-blue mb-1">
                    {item.price}
                  </p>
                  {'discounted' in item && item.discounted && (
                    <p className="text-sm text-blue-400 font-semibold mb-1">
                      Zvýh.: {item.discounted}
                    </p>
                  )}
                  <p className="text-text-light text-sm">{item.note}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="card-dark mb-8">
          <h3 className="text-xl font-bold text-white mb-6">
            Výhody {activeTab === 'dlouhodobe' ? 'dlouhodobých permanentek' : 'této nabídky'}:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {currentData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-text-light">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Discount Categories */}
        <div className="card-dark mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Zvýhodněné kategorie
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {discountCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 text-center border border-white/10"
              >
                <Check className="w-5 h-5 text-accent-blue mx-auto mb-2" />
                <p className="text-sm text-text-light">{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Included in Price */}
        <div className="card-dark mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            V ceně vstupného je zahrnuto
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {includedInPrice.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 text-center border border-white/10"
              >
                <p className="text-text-light text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-light text-sm mt-6">
            Půjčení ručníku: <span className="text-accent-blue font-semibold">20 Kč</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-light-blue to-accent-blue rounded-xl p-6 text-center">
          <p className="text-primary-dark">
            Pokud potřebujete poradit s výběrem vhodného typu permanentky, aby jste maximálně ušetřili, 
            <a href="#contact" className="font-bold text-green-600 hover:underline ml-1">
              neváhejte se na nás obrátit!
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}


