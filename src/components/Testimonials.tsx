import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Noelia Huser',
      role: 'Dueña del estudio Arte por Arte, Santa Fe',
      testimonial: 'Hace más de 15 años compre mi primer reformer Armonía y lo usamos a diario todavía en el estudio. Tengo 2 estudios con reformers Armonía y mi papá tiene un reformer Armonía en su casa. También en mis instructorados y formaciones los super recomiendo por la calidad del reformer y la atención que brindan'
    },
    {
      name: 'Mariana Chemez',
      role: 'Kinesióloga y Directora de Dolce Vita, Paraná',
      testimonial: 'Como kinesióloga, utilizo los Reformers Armonía para hacer rehabilitación con pacientes, clases terapéuticas, personalizadas y derivaciones médicas. Son equipos que brindan la seguridad necesaria tanto para tratamientos de salud como para el entrenamiento físico intenso.'
    },
    {
      name: 'Alicia Ruiz',
      role: 'Dueña de Estudio Solana, Córdoba',
      testimonial: 'Los Reformers me enamoraron, pero lo que realmente me conquistó fue el compromiso que tienen con sus clientes. Tenemos 3 estudios, uno tiene 2 reformers Armonía que tienen mas de 12 años, y en 2025 abrimos 2 sedes con 6 reformers Armonía en cada una.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#6b5344' }}>
            LO QUE DICEN LOS PROFESIONALES
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Experiencias reales de quienes ya confiaron en Armonía
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: '#f5f1ec' }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="#d4a574"
                    stroke="#d4a574"
                  />
                ))}
              </div>

              <p className="text-base italic mb-6 leading-relaxed" style={{ color: '#6b5344' }}>
                "{testimonial.testimonial}"
              </p>

              <div className="pt-6 border-t" style={{ borderColor: '#d4a574' }}>
                <p className="font-medium mb-1" style={{ color: '#6b5344' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm font-light" style={{ color: '#6b5344', opacity: 0.8 }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
