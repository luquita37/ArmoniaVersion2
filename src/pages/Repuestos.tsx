import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Award, TrendingUp, Wrench, Shield, Truck, Factory, MapPin, Building2, Banknote, CreditCard, ArrowRight, Package, Clock } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function Repuestos() {
  const whatsappNumber = '543492271506';
  const whatsappMessage = encodeURIComponent('Hola! Me interesan los repuestos originales Armonía. ¿Podrían darme más información?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const repuestos = [
    {
      imagen: '/repuestos-originales-armonia/9.jpg',
      alt: 'Ruedas para cama de pilates',
      titulo: 'Ruedas para cama de pilates',
      descripcion: 'Ruedas cónicas con rulemanes de alta calidad. Deslizamiento suave y silencioso para uso intensivo. Fabricadas con materiales de primera calidad que garantizan durabilidad.',
      caracteristicas: ['Rulemanes de alta calidad', 'Deslizamiento silencioso', 'Uso intensivo']
    },
    {
      imagen: '/repuestos-originales-armonia/7-fcd347741695c75a1717117195013812-1024-1024.jpg',
      alt: 'Juegos de resortes',
      titulo: 'Juegos de resortes',
      descripcion: 'Resortes originales en diferentes resistencias. Stock permanente de todos los colores: rojo, azul, verde y amarillo. Fabricados según especificaciones originales.',
      caracteristicas: ['Stock permanente', 'Todas las resistencias', 'Especificaciones originales']
    },
    {
      imagen: '/repuestos-originales-armonia/1.png',
      alt: 'Repuestos originales Armonía',
      titulo: 'Repuestos originales Armonía',
      descripcion: 'Amplio catálogo de repuestos fabricados por nosotros. Garantía de compatibilidad y calidad. Desde sogas náuticas hasta motones y mordazas profesionales.',
      caracteristicas: ['Fabricación propia', 'Garantía de compatibilidad', 'Catálogo completo']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % repuestos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + repuestos.length) % repuestos.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f1ec] to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6" style={{ color: '#6b5344' }}>
            REPUESTOS ORIGINALES
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-light" style={{ color: '#7d6b5a' }}>
            Respaldo postventa continuo
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Fabricamos nuestros propios repuestos. Stock permanente, service exclusivo y respaldo postventa continuo para mantener tu equipo en perfectas condiciones.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-1 text-white"
            style={{ backgroundColor: '#6b5344' }}
          >
            <MessageCircle size={24} />
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* Destacados */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Factory, label: 'Repuestos propios' },
              { icon: Package, label: 'Stock permanente' },
              { icon: Wrench, label: 'Service exclusivo' },
              { icon: Clock, label: 'Respaldo postventa' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl text-center" style={{ backgroundColor: '#f5f1ec' }}>
                <item.icon size={32} className="mx-auto mb-3" style={{ color: '#6b5344' }} />
                <span className="text-sm font-light" style={{ color: '#6b5344' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentación de Repuestos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#f8f5f2' }}>
              <img
                src={repuestos[currentIndex].imagen}
                alt={repuestos[currentIndex].alt}
                className="w-full aspect-[16/9] object-contain p-8"
              />
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                style={{ color: '#7b4b23' }}
                aria-label="Anterior"
              >
                <ChevronLeft size={28} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                style={{ color: '#7b4b23' }}
                aria-label="Siguiente"
              >
                <ChevronRight size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl mb-6 font-light text-center" style={{ color: '#7b4b23' }}>
                {repuestos[currentIndex].titulo}
              </h2>
              <p className="text-center text-lg text-gray-600 font-light mb-8 leading-relaxed">
                {repuestos[currentIndex].descripcion}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {repuestos[currentIndex].caracteristicas.map((caract, idx) => (
                  <div key={idx} className="p-4 rounded-xl text-center" style={{ backgroundColor: '#f5f1ec' }}>
                    <span className="text-sm font-light" style={{ color: '#6b5344' }}>{caract}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mb-12">
                {repuestos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-12'
                        : 'w-8 hover:opacity-70'
                    }`}
                    style={{ backgroundColor: index === currentIndex ? '#6b5344' : '#d1d5db' }}
                    aria-label={`Ir a ${repuestos[index].titulo}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir Armonía? */}
      <section className="py-20" style={{ backgroundColor: '#f5f1ec' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
              ¿POR QUÉ ELEGIR ARMONÍA?
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              La decisión inteligente para profesionales que buscan equipos pensados y diseñados para poder exigirlos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#6b5344' }}>
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#6b5344' }}>Materiales de alta calidad</h3>
              <p className="text-gray-600 font-light">Estructura firme, duradera y estable para uso profesional intensivo</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#6b5344' }}>
                <TrendingUp size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#6b5344' }}>Trayectoria real</h3>
              <p className="text-gray-600 font-light">Más de 20 años fabricando equipos profesionales para estudios de todo el país</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#6b5344' }}>
                <Wrench size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#6b5344' }}>Somos fabricantes</h3>
              <p className="text-gray-600 font-light">Contamos con servicio de postventa, services exclusivos y repuestos originales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
              VENTAJAS DE LOS REPUESTOS ORIGINALES
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Calidad garantizada directamente del fabricante
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Factory, title: 'Fabricación propia', desc: 'Fabricamos todos nuestros repuestos, garantizando compatibilidad perfecta con tu equipo' },
              { icon: Package, title: 'Stock permanente', desc: 'Disponibilidad inmediata de todos los repuestos más solicitados para tu reformer' },
              { icon: Award, title: 'Calidad original', desc: 'Mismos materiales y especificaciones que los componentes originales de fábrica' },
              { icon: Clock, title: 'Respaldo continuo', desc: 'Service exclusivo y atención postventa para mantener tu equipo como nuevo' }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl" style={{ backgroundColor: '#f5f1ec' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6b5344' }}>
                  <benefit.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2" style={{ color: '#6b5344' }}>{benefit.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tu Inversión Está Protegida */}
      <section className="py-20" style={{ backgroundColor: '#6b5344' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              TU INVERSIÓN ESTÁ PROTEGIDA
            </h2>
            <p className="text-lg text-white/80 font-light">
              Comprá con confianza y respaldo total
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: 'Garantía de fábrica' },
              { icon: Truck, text: 'Envíos a todo el país' },
              { icon: Factory, text: 'Somos fabricantes: repuestos originales siempre disponibles' },
              { icon: MapPin, text: 'Fabricación local con años de experiencia en el rubro' }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <item.icon size={32} className="mb-4" style={{ color: '#f5f1ec' }} />
                <p className="text-white font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Formas de Pago */}
      <section className="py-20" style={{ backgroundColor: '#f5f1ec' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
            FORMAS DE PAGO
          </h2>
          <p className="text-lg text-gray-600 font-light mb-12">
            Elegí la opción que más te convenga
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Building2, label: 'Transferencia' },
              { icon: Banknote, label: 'Efectivo' },
              { icon: CreditCard, label: 'Tarjeta de crédito' }
            ].map((method, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6b5344' }}>
                  <method.icon size={28} className="text-white" />
                </div>
                <span className="text-sm font-light" style={{ color: '#6b5344' }}>{method.label}</span>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg bg-white rounded-full transition-all hover:shadow-lg border-2"
            style={{ borderColor: '#6b5344', color: '#6b5344' }}
          >
            <MessageCircle size={24} />
            Cotizar ahora por WhatsApp
          </a>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ backgroundColor: '#6b5344' }}>
            <Factory size={40} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#6b5344' }}>
            QUIÉNES SOMOS
          </h2>
          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              Somos Armonía, fabricantes argentinos especializados en equipamiento profesional para pilates.
            </p>
            <p>
              Llevamos más de 20 años acompañando a estudios, kinesiólogos y entrenadores de todo el país, brindando equipos que combinan calidad, durabilidad y diseño profesional.
            </p>
            <p>
              Nuestra misión es simple: que cada profesional tenga acceso a herramientas de primer nivel, con el respaldo y la tranquilidad de trabajar directamente con el fabricante.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-[#6b5344] to-[#564530]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white leading-tight">
            ¿NECESITÁS REPUESTOS ORIGINALES?
          </h2>
          <p className="text-xl text-white/80 font-light mb-12">
            Mantené tu equipo en perfectas condiciones con repuestos de fábrica
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 text-xl bg-white rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
            style={{ color: '#6b5344' }}
          >
            Consultar repuestos disponibles
            <ArrowRight size={24} />
          </a>
          <div className="mt-8 flex items-center justify-center gap-3 text-white/80">
            <MessageCircle size={20} />
            <span className="text-sm font-light">Respondemos rápido. Atención personalizada.</span>
          </div>
        </div>
      </section>
    </>
  );
}
