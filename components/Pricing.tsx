'use client'

import React, { useState } from 'react'
import { Check, CreditCard, Calendar, Award, Clock } from 'lucide-react'

type TabKey = 'vstupne' | 'mesicni' | 'dlouhodobe' | 'trener'

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
  { id: 'trener' as TabKey, label: 'Hodiny s trenérem', icon: Clock },
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
      'Při každé třetí návště
