'use client'

import { MapPin, Phone, Mail, Clock, Award, Users, Heart, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Jsme tu pro vás
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Máte otázky? Neváhejte nás kontaktovat. Rádi vám poradíme s výběrem 
            vhodné permanentky nebo cvičebního programu.
          </p>
          <div className="w-20 h-1 bg-accent-blue mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="card-dark">
            <h3 className="text-xl font-bold text-white mb-6">Kontaktní údaje</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Adresa</h4>
                  <p className="text-text-light">Budějovická 1542<br />Tábor</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Telefon</h4>
                  <p className="text-text-light">
                    Recepce: <a href="tel:602538529" className="text-accent-blue hover:underline">602 538 529</a><br />
                    Trenér: <a href="tel:606464145" className="text-accent-blue hover:underline">606 464 145</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:dagmar.kosikova@seznam.cz" 
                    className="text-accent-blue hover:underline"
                  >
                    dagmar.kosikova@seznam.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="card-dark">
            <div className="flex flex-col gap-6 items-center">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="/images/Dagmar.jpg"
                  alt="Dagmar Hedvika Sehnalová"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Dagmar Hedvika Sehnalová</h3>
                <p className="text-text-light leading-relaxed text-center">
                  Podpora a pomoc lidem je mým posláním. Během své 30 leté praxe jsem vytvořila 
                  fitness klub, ze kterého klienti odchází spokojení, jak po fyzické, tak i po 
                  psychické stránce.
                </p>
              </div>
            </div>

            {/* Qualification Cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-primary-blue/80 text-white p-4 rounded-xl">
                <Award className="w-8 h-8 text-accent-blue mb-2" />
                <h4 className="text-2xl font-bold mb-1">II.</h4>
                <p className="text-text-light text-xs">
                  Třída trenéra kulturistiky a instruktora fitness
                </p>
              </div>
              
              <div className="bg-primary-blue/60 text-white p-4 rounded-xl">
                <Users className="w-8 h-8 text-accent-blue mb-2" />
                <h4 className="text-2xl font-bold mb-1">30</h4>
                <p className="text-text-light text-xs">
                  Let praxe ve fitness a kondičním posilování
                </p>
              </div>
              
              <div className="bg-primary-blue/60 text-white p-4 rounded-xl">
                <Heart className="w-8 h-8 text-accent-blue mb-2" />
                <h4 className="text-2xl font-bold mb-1">22</h4>
                <p className="text-text-light text-xs">
                  Let praxe v trenérství všech věkových kategorií
                </p>
              </div>
              
              <div className="bg-light-blue/80 text-white p-4 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white mb-2" />
                <h4 className="text-2xl font-bold mb-1">22</h4>
                <p className="text-white/80 text-xs">
                  Let praxe při zdravotních potížích
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



