'use client'

import { Activity, Move, Dumbbell, Target } from 'lucide-react'

const aerobicEquipment = [
  '3× Běžecké pásy',
  '1× Eliptický trenažer',
  '2× Cyklotrenažery',
  '1× Veslovací trenažer',
]

const stretchEquipment = [
  'Míče různých velikostí',
  'Balanční pomůcky',
  'Cvičební gumy',
  'Podložky',
]

const strengthEquipment = {
  nohy: [
    'Leg Press Universal',
    'Předkopávání profi',
    'Zakopávání vleže profi',
    'Roznožování',
    'Snožování s dopomocí',
    'Lýtka ve stoji',
    'Zadek ve stoji stroj',
  ],
  zada: [
    'Věž profi (kladky)',
    'Hrazda s dopomocí',
    'Butterfly / delt dec',
    'Žebřiny',
    'Žebřiny s hrazdou',
  ],
  hrudnik: [
    'Lavice polohovací',
    'Lavice tlak hlavou dolů',
    'Lavice rozpažování',
    'Lavice břicho',
    'Hyperextenze',
  ],
}


export default function Equipment() {
  return (
    <section id="equipment" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            Vybavení
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Naše fitness vybavení
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Posilovací stroje značky Grün sport a kompletní aerobní i strečinková zóna.
          </p>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mt-6" />
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Aerobic Zone */}
          <div className="card-dark">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Aerobní zóna</h3>
            <ul className="space-y-2">
              {aerobicEquipment.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-light text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stretching Zone */}
          <div className="card-dark">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Move className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Strečinková místnost</h3>
            <ul className="space-y-2">
              {stretchEquipment.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-light text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legs */}
          <div className="card-dark">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Dumbbell className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Nohy</h3>
            <ul className="space-y-2">
              {strengthEquipment.nohy.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-light text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Upper Body */}
          <div className="card-dark">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Záda & Hrudník</h3>
            <ul className="space-y-2">
              {[...strengthEquipment.zada.slice(0, 3), ...strengthEquipment.hrudnik.slice(0, 4)].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-text-light text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}


