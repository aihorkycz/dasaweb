'use client'

import { MapPin, Phone, Mail, CreditCard, Banknote, Ticket, Award } from 'lucide-react'

const quickLinks = [
  { name: 'O nás', href: '#about' },
  { name: 'Služby', href: '#services' },
  { name: 'Ceník', href: '#pricing' },
  { name: 'Vybavení', href: '#equipment' },
  { name: 'Dula', href: '#dula' },
  { name: 'Kontakt', href: '#contact' },
]

const paymentMethods = [
  { name: 'Multisport', icon: CreditCard },
  { name: 'SODEXHO PASS', icon: Ticket },
  { name: 'TICKET', icon: Ticket },
  { name: 'FKSP', icon: Award },
  { name: 'Hotovost', icon: Banknote },
]

export default function Footer() {
  return (
    <footer className="bg-primary-blue pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-white">Fitness Tábor</h3>
            </div>
            <p className="text-text-light text-sm leading-relaxed">
              Váš osobní fitness klub v Táboře. Individuální přístup pro všechny 
              věkové kategorie a zdravotní stavy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-light hover:text-accent-blue transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-light text-sm">
                <MapPin className="w-4 h-4 text-accent-blue" />
                Budějovická 1542, Tábor
              </li>
              <li className="flex items-center gap-2 text-text-light text-sm">
                <Phone className="w-4 h-4 text-accent-blue" />
                602 538 529
              </li>
              <li className="flex items-center gap-2 text-text-light text-sm">
                <Mail className="w-4 h-4 text-accent-blue" />
                dagmar.kosikova@seznam.cz
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platební metody</h4>
            <ul className="space-y-2">
              {paymentMethods.map((method) => (
                <li key={method.name} className="flex items-center gap-2 text-text-light text-sm">
                  <method.icon className="w-4 h-4 text-accent-blue" />
                  {method.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-light text-sm">
              © {new Date().getFullYear()} Fitness Tábor. Všechna práva vyhrazena.
            </p>
            <p className="text-text-light text-sm">
              Dagmar Hedvika Sehnalová
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


