import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Award, TrendingUp, Wrench, Shield, Truck, Factory, MapPin, Building2, Banknote, CreditCard, ArrowRight, Package } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function Accesorios() {
  const whatsappNumber = '543492271506';
  const whatsappMessage = encodeURIComponent('Hola! Me interesan los accesorios profesionales Armonía. ¿Podrían darme más información?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const accesorios = [
    {
      imagen: '/1_(3).jpg',
      alt: 'Tabla de extensión',
      titulo: 'Tabla de extensión',
      descripcion: 'Amplia las posibilidades de ejercicios. Diseño ergonómico y terminación profesional que complementa perfectamente tu reformer.',
      caracteristicas: ['Diseño ergonómico', 'Terminación profesional', 'Compatible con todos los modelos']
    },
    {
      imagen: '/3_(3).jpg',
      alt: 'Box para pilates',
      titulo: 'Box',
      descripcion: 'Box profesional para diversificar ejercicios. Estructura reforzada para uso intensivo, tapizado premium y manijas laterales para fácil transporte.',
      caracteristicas: ['Uso intensivo', 'Tapizado premium', 'Manijas laterales']
    },
    {
      imagen: '/front_armonia_(5).jpg',
      alt: 'Tabla de pique',
      titulo: 'Tabla de pique',
      descripcion: 'Accesorio profesional para ejercicios específicos de pilates. Fabricada con materiales de primera calidad y diseño anatómico para máximo confort.',
      caracteristicas: ['Material de primera calidad', 'Diseño anatómico', 'Acabado profesional']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % accesorios.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + accesorios.length) % accesorios.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f1ec] to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6" style={{ color: '#6b5344' }}>
            ACCESORIOS PROFESIONALES
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-light" style={{ color: '#7d6b5a' }}>
            Complementa tu equipamiento
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Complementos profesionales para potenciar tu equipamiento. Fabricación nacional con los mismos estándares de calidad que nuestros reformers.
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

      {/* Presentación de Accesorios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#f8f5f2' }}>
              <img
                src={accesorios[currentIndex].imagen}
                alt={accesorios[currentIndex].alt}
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
                {accesorios[currentIndex].titulo}
              </h2>
              <p className="text-center text-lg text-gray-600 font-light mb-8 leading-relaxed">
                {accesorios[currentIndex].descripcion}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {accesorios[currentIndex].caracteristicas.map((caract, idx) => (
                  <div key={idx} className="p-4 rounded-xl text-center" style={{ backgroundColor: '#f5f1ec' }}>
                    <span className="text-sm font-light" style={{ color: '#6b5344' }}>{caract}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mb-12">
                {accesorios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-12'
                        : 'w-8 hover:opacity-70'
                    }`}
                    style={{ backgroundColor: index === currentIndex ? '#6b5344' : '#d1d5db' }}
                    aria-label={`Ir a ${accesorios[index].titulo}`}
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
              BENEFICIOS DE NUESTROS ACCESORIOS
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Calidad profesional en cada detalle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Package, title: 'Fabricación propia', desc: 'Diseñados y fabricados por nosotros con los mismos estándares de nuestros reformers' },
              { icon: Award, title: 'Calidad garantizada', desc: 'Materiales de primera calidad seleccionados para uso profesional intensivo' },
              { icon: Wrench, title: 'Compatibilidad total', desc: 'Perfectamente compatibles con todos nuestros modelos de reformers' },
              { icon: Factory, title: 'Stock permanente', desc: 'Disponibilidad inmediata de todos los accesorios para tu estudio' }
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
            ¿LISTO PARA COMPLEMENTAR TU EQUIPAMIENTO?
          </h2>
          <p className="text-xl text-white/80 font-light mb-12">
            Potenciá tu estudio con accesorios de calidad profesional
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 text-xl bg-white rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
            style={{ color: '#6b5344' }}
          >
            Quiero los accesorios Armonía
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
