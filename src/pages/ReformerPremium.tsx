import { MessageCircle, Award, TrendingUp, Wrench, GraduationCap, Zap, Heart, Wind, Sparkles, Shield, Truck, Factory, MapPin, Building2, Banknote, CreditCard, ArrowRight, Clock } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function ReformerPremium() {
  const whatsappNumber = '5493492271506';
  const whatsappMessage = encodeURIComponent('Hola! Quiero mi Reformer Armonía Premium Guatambú. ¿Podrían darme más información?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const specs = [
    { label: 'Estructura', value: 'Madera maciza de guatambú seleccionado, con secado natural' },
    { label: 'Dimensiones', value: '2.44m de largo, 70cm de ancho, 41cm de alto' },
    { label: 'Tablas', value: '32mm de espesor con laterales de 18cm de ancho y bordes redondeados' },
    { label: 'Terminación', value: 'Laqueada premium, acabado brillante espejado' },
    { label: 'Guía de deslizamiento', value: 'Caño cromado 40×40×2mm' },
    { label: 'Carro', value: 'Multilaminado con terminación en guatambú laqueado y refuerzo metálico' },
    { label: 'Ruedas', value: '8 Ruedas cónicas inyectadas con rulemanes blindados' },
    { label: 'Parantes', value: 'Guatambú laqueado con canaleta regulable' },
    { label: 'Soga', value: 'Náutica de 8mm con motones náuticos' },
    { label: 'Resortes', value: '1 juego (2 rojos, 1 amarillo, 1 azul, 1 verde)' },
    { label: 'Accesorios incluidos', value: 'Box, tabla de salto, par de agarres de manos, par de agarres de pies, cinta de seguridad' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f5f1ec] to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Badge de Plazo de Entrega */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 shadow-lg" style={{ backgroundColor: '#d4a574' }}>
            <Clock size={24} style={{ color: '#3a2f25' }} />
            <span className="text-lg font-medium" style={{ color: '#3a2f25' }}>
              PLAZO DE ENTREGA: 5 DÍAS APROXIMADAMENTE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6" style={{ color: '#6b5344' }}>
            REFORMER PREMIUM GUATAMBÚ
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-light" style={{ color: '#7d6b5a' }}>
            Excelencia en cada detalle
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Equipamiento de alta gama con estructura en madera maciza de guatambú seleccionado. Terminación premium con acabado brillante espejado para estudios que buscan lo mejor.
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

      {/* Presentación del Producto */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/img_3127-recuperado.jpg"
              alt="Reformer Premium Guatambú Armonía"
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#7b4b23' }}>
                CALIDAD PREMIUM PARA ESTUDIOS DE EXCELENCIA
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                Nuestro Reformer Premium Guatambú representa la máxima expresión de calidad y diseño en equipamiento de pilates. Fabricado con madera maciza seleccionada y acabado brillante espejado, este equipo está diseñado para estudios que buscan lo mejor en durabilidad, estética y performance.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Cada detalle ha sido cuidadosamente pensado para brindar una experiencia superior, desde las tablas de guatambu seleccionadas y secadas naturalmente durante un año hasta los tapizados con doble costuras, bordes redondeados en su estructura y detalles cromados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* En acción */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
              EN ACCIÓN
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Videos técnicos mostrando estructura, movimiento y terminaciones
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md">
              <video
                controls
                className="w-full"
                playsInline
                preload="metadata"
              >
                <source src="/reformer-premium-guatambu.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
              <div className="p-6" style={{ backgroundColor: '#f5f1ec' }}>
                <h3 className="text-xl font-light mb-2" style={{ color: '#6b5344' }}>Reformer Premium Guatambú</h3>
                <p className="text-gray-600 font-light">Estructura fabricada en madera maciza y terminaciones de alta calidad</p>
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
              BENEFICIOS DEL REFORMER PREMIUM
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Excelencia absoluta en cada aspecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: 'Formación profesional', desc: 'Ideal para certificaciones y entrenamientos avanzados' },
              { icon: Zap, title: 'Entrenamiento eficiente', desc: 'Maximiza resultados con precisión y control' },
              { icon: Heart, title: 'Ideal para rehabilitación', desc: 'Perfecto para fisioterapia y recuperación funcional' },
              { icon: Wind, title: 'Fluidez en el movimiento', desc: 'Deslizamiento premium con rulemanes blindados de última generación' },
              { icon: Sparkles, title: 'Estética premium', desc: 'Acabado brillante espejado que distingue tu estudio' }
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

      {/* Especificaciones Técnicas */}
      <section className="py-20" style={{ backgroundColor: '#f5f1ec' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
              ESPECIFICACIONES TÉCNICAS
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Diseño premium pensado para la excelencia
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {specs.map((spec, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-4 p-4 hover:bg-gray-50 transition-colors ${
                  index !== specs.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="font-medium" style={{ color: '#6b5344' }}>{spec.label}</div>
                <div className="text-gray-600 font-light">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-2xl text-center shadow-sm">
              <h4 className="text-lg mb-2 font-light" style={{ color: '#7b4b23' }}>Premium</h4>
              <p className="text-sm text-gray-600 font-light">Madera maciza guatambú</p>
            </div>
            <div className="p-6 bg-white rounded-2xl text-center shadow-sm">
              <h4 className="text-lg mb-2 font-light" style={{ color: '#7b4b23' }}>Terminación</h4>
              <p className="text-sm text-gray-600 font-light">Acabado brillante espejado</p>
            </div>
            <div className="p-6 bg-white rounded-2xl text-center shadow-sm">
              <h4 className="text-lg mb-2 font-light" style={{ color: '#7b4b23' }}>Reforzado</h4>
              <p className="text-sm text-gray-600 font-light">Guías cromadas y rulemanes</p>
            </div>
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

          {/* Destacado Plazo de Entrega */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="p-8 rounded-2xl text-center shadow-2xl" style={{ backgroundColor: '#d4a574' }}>
              <Clock size={48} className="mx-auto mb-4" style={{ color: '#3a2f25' }} />
              <h3 className="text-2xl md:text-3xl font-medium mb-3" style={{ color: '#3a2f25' }}>
                PLAZO DE ENTREGA
              </h3>
              <p className="text-lg font-light" style={{ color: '#3a2f25' }}>
                5 días aproximadamente. Equipá tu estudio con excelencia en tiempo récord.
              </p>
            </div>
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
            ¿LISTO PARA TRANSFORMAR TU ESTUDIO?
          </h2>
          <p className="text-xl text-white/80 font-light mb-12">
            Dá el siguiente paso hacia la profesionalización de tu espacio
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 text-xl bg-white rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
            style={{ color: '#6b5344' }}
          >
            Quiero mi Reformer Premium
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
