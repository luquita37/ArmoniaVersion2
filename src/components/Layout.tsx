import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const whatsappNumber = '5493492271506';
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre el equipamiento profesional Armonía para mi estudio de pilates.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="flex justify-center mb-4">
            <img
              src="/armonia_claro.png"
              alt="ARMONÍA"
              className="h-8"
            />
          </Link>
          <nav className="flex justify-center gap-8 flex-wrap">
            <Link
              to="/reformer-finger"
              className={`text-sm font-light transition-all ${
                isActive('/reformer-finger') ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              style={{ color: '#7b4b23' }}
            >
              Reformer Finger
            </Link>
            <Link
              to="/reformer-premium"
              className={`text-sm font-light transition-all ${
                isActive('/reformer-premium') ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              style={{ color: '#7b4b23' }}
            >
              Reformer Premium
            </Link>
            <Link
              to="/accesorios"
              className={`text-sm font-light transition-all ${
                isActive('/accesorios') ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              style={{ color: '#7b4b23' }}
            >
              Accesorios
            </Link>
            <Link
              to="/repuestos"
              className={`text-sm font-light transition-all ${
                isActive('/repuestos') ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
              style={{ color: '#7b4b23' }}
            >
              Repuestos
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        {children}
      </main>

      <footer className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {[
              'Fabricación nacional',
              'Garantía de fábrica',
              'Repuestos originales',
              'Servicio postventa',
              'Atención directa'
            ].map((item) => (
              <div key={item}>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400">© 2024 ARMONÍA</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 text-white transition-all hover:opacity-80 rounded-full shadow-lg"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}
