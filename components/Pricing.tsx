'use client'

import React, { useState } from 'react'
import { Check, CreditCard, Calendar, Award, Clock } from 'lucide-react'

// Definice typu pro klíče tabů
type TabKey = 'vstupne' | 'mesicni' | 'dlouhodobe' | 'trener'

// Definice rozhraní pro položku ceníku
interface PricingItem {
  name: string;
  price: string;
  note: string;
  highlight: boolean;
  badge?: string;
  discounted?: string;
}

const tabs = [
  { id: 'vstupne' as TabKey, label: 'Vstupné', icon: CreditCard },
  { id: 'mesicni' as TabKey, label: 'Měsíční', icon: Calendar },
  { id: 'dlouhodobe' as TabKey, label: 'Dlouhodobé', icon: Award },
  { id: 'trener' as TabKey, label: 'Trenér', icon: Clock },
]

const pricingData: Record<TabKey, { title: string; description: string; items: PricingItem[]; benefits: string[] }> = {
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
      'Zvýhodněné ceny pro vybrané kategorie (studenti, senioři)',
    ],
  },
  mesicni: {
    title: 'Měsíční permanentky',
    description: 'Ideální pro pravidelné cvičení',
    items: [
      { name: 'Měsíční neomezená', price: '1 500 Kč', note: 'Platnost 30 dní', highlight: true, badge: 'POPULÁRNÍ' },
      { name: 'Měsíční 12 vstupů', price: '1 200 Kč', note: '100 Kč / vstup', highlight: false },
      { name: 'Měsíční 8 vstupů', price: '900 Kč', note: '112 Kč / vstup', highlight: false },
    ],
    benefits: [
      'Neomezený počet vstupů (u varianty neomezená)',
      'Flexibilní využití dle vašich časových možností',
      'Zvýhodněná cena oproti jednorázovým vstupům',
    ],
  },
  dlouhodobe: {
    title: 'Dlouhodobé permanentky',
    description: 'Maximální úspora pro věrné zákazníky',
    items: [
      { name: 'Roční permanentka', price: '15 000 Kč', note: 'Platnost 1 rok', highlight: true, badge: 'NEJVÝHODNĚJŠÍ' },
      { name: 'Pololetní permanentka', price: '9 900 Kč', note: 'Platnost 6 měsíců', highlight: false },
      { name: 'Čtvrtletní permanentka', price: '6 900 Kč', note: 'Platnost 3 měsíce', highlight: false },
    ],
    benefits: [
      'Celoroční pronájem šatní skříňky v ceně',
      'Při každé návštěvě iontový nápoj zdarma',
      'V den narozenin proteinový nápoj + tyčinka zdarma',
      'Každý měsíc 50% sleva na jednu hodinu s trenérem',
      'Zapůjčení ručníku při každé návštěvě zdarma',
    ],
  },
  trener: {
    title: 'Individuální trénink',
    description: 'Osobní přístup pro dosažení vašich cílů',
    items: [
      { name: '1 hodina s trenérem', price: '500 Kč', note: '+ cena vstupu', highlight: false },
      { name: 'Balíček 10 hodin', price: '4 500 Kč', note: '450 Kč / hodina', highlight: true, badge: 'DOPORUČUJEME' },
    ],
    benefits: [
      'Individuální tréninkový plán',
      'Dohled nad správnou technikou cviků',
      'Motivace a rychlejší dosahování výsledků',
      'Konzultace jídelníčku v ceně balíčku',
    ],
  },
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabKey>('vstupne')

  return (
    <section className="py-20 bg-[#0a192f]" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ceník služeb</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vyberte si variantu, která vám nejvíce vyhovuje. Nabízíme flexibilní vstupy i zvýhodněné dlouhodobé programy.
          </p>
        </div>

        {/* Přepínání kategorií */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-[#0a192f] shadow-lg shadow-cyan-500/20'
                    : 'bg-[#112240] text-gray-400 hover:text-white hover:bg-[#1d2d50]'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Karty s cenami */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {pricingData[activeTab].items.map((item: PricingItem, index: number) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all border ${
                  item.highlight
                    ? 'bg-[#112240] border-cyan-500 shadow-xl shadow-cyan-500/10 scale-105 z-10'
                    : 'bg-[#0a192f] border-gray-800 hover:border-gray-700'
                }`}
              >
                {item.highlight && item.badge && (
                  <span className="absolute -top-3 left-6 bg-cyan-500 text-[#0a192f] text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-cyan-400">{item.price}</span>
                  {item.discounted && (
                    <span className="text-lg text-gray-500 line-through">{item.discounted}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.note}</p>
                <div className="w-full py-2 px-4 rounded-lg bg-[#112240] text-center text-gray-300 text-sm">
                  {item.highlight ? 'Zvolit tuto variantu' : 'Více informací'}
                </div>
              </div>
            ))}
          </div>

          {/* Výhody a popis kategorie */}
          <div className="bg-[#112240] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">{pricingData[activeTab].title}</h3>
            <p className="text-gray-400 mb-8">{pricingData[activeTab].description}</p>
            
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Co získáte:</p>
              {pricingData[activeTab].benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-cyan-500/10 p-1 rounded-full">
                    <Check size={16} className="text-cyan-500" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 rounded-2xl bg-[#0a192f] border border-gray-800 text-center">
              <p className="text-sm text-gray-400">Máte dotaz k ceníku?</p>
              <a href="#contact" className="text-cyan-400 font-semibold hover:underline">Kontaktujte nás</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
