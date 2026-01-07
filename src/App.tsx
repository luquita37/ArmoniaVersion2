import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReformerFinger from './pages/ReformerFinger';
import ReformerPremium from './pages/ReformerPremium';
import Accesorios from './pages/Accesorios';
import Repuestos from './pages/Repuestos';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reformer-finger" element={<ReformerFinger />} />
          <Route path="/reformer-premium" element={<ReformerPremium />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/repuestos" element={<Repuestos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
