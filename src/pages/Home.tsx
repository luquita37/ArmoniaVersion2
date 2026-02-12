import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const whatsappNumber = '5493492271506';
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre el equipamiento profesional Armonía para mi estudio de pilates.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Lógica para el video automático
  const videoContainerRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Si el video es visible al 40%, activa la reproducción
        if (entry.isIntersecting) {
          setPlayVideo(true);
        }
      },
      { threshold: 0.4 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  // URL con parámetros de limpieza y autoplay
  // mute=1 es OBLIGATORIO para que funcione el autoplay en navegadores modernos
  const youtubeUrl = playVideo 
    ? "https://www.youtube.com/embed/Nxv6i8ga50E?autoplay=1&mute=1&modestbranding=1&controls=0&rel=0&showinfo=0"
    : "https://www.youtube.com/embed/Nxv6i8ga50E?mute=1&modestbranding=1&controls=0&rel=0&showinfo=0";

  return (
    <>
      <section className="py-32 md:py-48" style={{ backgroundColor: '#f8f5f2' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight" style={{ color: '#7b4b23' }}>
            Equipamiento profesional para estudios de pilates
          </h1>
          <p className="text-xl md:text-2xl mb-16 max-w-3xl text-gray-600 font-light leading-relaxed">
            Fabricación nacional. Más de 20 años de experiencia. Solución integral con respaldo real.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base border-2 rounded-full transition-all hover:opacity-80"
            style={{ borderColor: '#7b4b23', color: '#7b4b23' }}
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#7b4b23' }}>
                Solución integral
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Acompañamos todo el proceso: desde el equipamiento inicial hasta el mantenimiento y los repuestos originales.
              </p>
            </div>
            <div className="space-y-6">
              {[
                'Fabricación nacional',
                'Equipos profesionales',
                'Repuestos originales',
                'Asesoramiento continuo'
              ].map((item) => (
                <div key={item} className="border-l-2 pl-4" style={{ borderColor: '#ab7450' }}>
                  <span className="text-base" style={{ color: '#7b4b23' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: '#f8f5f2' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-16 max-w-2xl" style={{ color: '#7b4b23' }}>
            Diseñado para uso intensivo en estudios profesionales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <p className="text-5xl font-light mb-4" style={{ color: '#ab7450' }}>01</p>
              <h3 className="text-xl mb-2" style={{ color: '#7b4b23' }}>Durabilidad</h3>
              <p className="text-gray-600 font-light">Uso intensivo diario</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <p className="text-5xl font-light mb-4" style={{ color: '#ab7450' }}>02</p>
              <h3 className="text-xl mb-2" style={{ color: '#7b4b23' }}>Estética</h3>
              <p className="text-gray-600 font-light">Terminación profesional</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <p className="text-5xl font-light mb-4" style={{ color: '#ab7450' }}>03</p>
              <h3 className="text-xl mb-2" style={{ color: '#7b4b23' }}>Respaldo</h3>
              <p className="text-gray-600 font-light">Atención continua</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: '#7b4b23' }}>
        <div className="max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-2xl">
            Fabricamos nuestros propios repuestos
          </h2>
          <p className="text-lg mb-16 max-w-3xl opacity-90 font-light leading-relaxed">
            Disponibilidad real, service exclusivo y acompañamiento postventa continuo
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Repuestos propios',
              'Stock permanente',
              'Service exclusivo',
              'Respaldo postventa'
            ].map((item) => (
              <div key={item} className="p-4 rounded-xl bg-white/10">
                <span className="text-sm text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: '#f8f5f2' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-light mb-4" style={{ color: '#7b4b23' }}>
            En acción
          </h2>
          <p className="text-gray-600 mb-24 font-light">
            Videos técnicos mostrando estructura, movimiento y terminaciones
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Video 1 - Reformer Finger (Youtube) */}
            <div ref={videoContainerRef}>
              <div className="bg-white rounded-2xl overflow-hidden mb-6 flex justify-center">
                <iframe 
                  src={youtubeUrl}
                  title="Reformer Finger"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full max-w-[360px] aspect-[9/16] pointer-events-none"
                  frameBorder="0"
                  style={{ pointerEvents: 'none' }} // Esto evita clics accidentales ya que no hay controles
                ></iframe>
              </div>
              <h3 className="text-xl font-light text-center" style={{ color: '#7b4b23' }}>
                Reformer Finger
              </h3>
            </div>

            {/* Video 2 - Reformer Premium (Local) */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden mb-6 flex justify-center">
                <video
                  src="/reformer-premium-guatambu.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full max-w-[360px] aspect-[9/16] object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-center" style={{ color: '#7b4b23' }}>
                Reformer Premium Guatambú
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#f8f5f2' }}>
              <div className="text-6xl font-light mb-4" style={{ color: '#ab7450' }}>20+</div>
              <p className="text-gray-600 font-light">Años de experiencia</p>
            </div>
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#f8f5f2' }}>
              <div className="text-6xl font-light mb-4" style={{ color: '#ab7450' }}>100%</div>
              <p className="text-gray-600 font-light">Nacional</p>
            </div>
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#f8f5f2' }}>
              <div className="text-6xl font-light mb-4" style={{ color: '#ab7450' }}>★★★★★</div>
              <p className="text-gray-600 font-light">Satisfacción</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl" style={{ backgroundColor: '#f8f5f2' }}>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Garantía de fábrica, servicio postventa, repuestos originales y service exclusivo
            </p>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: '#f8f5f2' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#7b4b23' }}>
            Plazos de entrega
          </h2>
          <p className="text-lg mb-16 text-gray-600 font-light max-w-3xl">
            Tiempos de entrega por modelo
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="p-8 rounded-xl bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: '#ab7450' }}>
                  ENTREGA INMEDIATA
                </span>
              </div>
              <h3 className="text-xl font-medium mb-3 pr-32" style={{ color: '#7b4b23' }}>
                REFORMER PREMIUM GUATAMBÚ
              </h3>
              <p className="text-lg text-gray-600 font-light">
                5 días aproximadamente
              </p>
            </div>
            <div className="p-8 rounded-xl bg-white">
              <h3 className="text-xl font-medium mb-3" style={{ color: '#7b4b23' }}>
                REFORMER FINGER
              </h3>
              <p className="text-lg text-gray-600 font-light">
                Principio de Febrero
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-40" style={{ backgroundColor: '#ab7450' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-white leading-tight">
            Todo lo que tu estudio necesita
          </h2>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base border-2 border-white text-white transition-all hover:bg-white rounded-full"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#7b4b23'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
