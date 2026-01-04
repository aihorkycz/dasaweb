'use client'

import { Clock } from 'lucide-react'

const schedule = [
  { day: 'Pondělí', hours: '8:00 - 13:00, 14:00 - 21:00', isWeekend: false },
  { day: 'Úterý', hours: '7:00 - 12:30, 14:00 - 21:00', isWeekend: false },
  { day: 'Středa', hours: '8:00 - 13:00, 14:00 - 21:00', isWeekend: false },
  { day: 'Čtvrtek', hours: '6:00 - 12:30, 14:00 - 21:00', isWeekend: false },
  { day: 'Pátek', hours: '8:00 - 13:00, 14:00 - 20:00', isWeekend: false },
  { day: 'Sobota', hours: '7:30 - 13:00', isWeekend: true },
  { day: 'Neděle', hours: '7:30 - 13:00', isWeekend: true },
]

export default function Hours() {
  return (
    <section id="hours" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Otevírací doba
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Schedule */}
          <div className="card-dark">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-accent-blue" />
              <h3 className="text-xl font-bold text-white">Provozní doba</h3>
            </div>
            
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                    item.isWeekend 
                      ? 'bg-accent-blue/10 border-l-4 border-accent-blue' 
                      : 'bg-white/5 border-l-4 border-white/30'
                  }`}
                >
                  <span className="font-semibold text-white">
                    {item.day}
                  </span>
                  <span className="text-text-light">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-text-light text-sm mt-6 text-center italic">
              O svátcích otevřeno jako v neděli
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


