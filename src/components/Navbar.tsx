import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-center gap-8">
      <Link
        to="/reformer-finger"
        className={`text-sm font-light transition-opacity ${
          pathname === "/reformer-finger"
            ? "opacity-100"
            : "opacity-50 hover:opacity-100"
        }`}
        style={{ color: "#7b4b23" }}
      >
        Reformer Finger
      </Link>

      <Link
        to="/reformer-premium"
        className={`text-sm font-light transition-opacity ${
          pathname === "/reformer-premium"
            ? "opacity-100"
            : "opacity-50 hover:opacity-100"
        }`}
        style={{ color: "#7b4b23" }}
      >
        Reformer Premium
      </Link>

      <Link
        to="/accesorios"
        className={`text-sm font-light transition-opacity ${
          pathname === "/accesorios"
            ? "opacity-100"
            : "opacity-50 hover:opacity-100"
        }`}
        style={{ color: "#7b4b23" }}
      >
        Accesorios
      </Link>

      <Link
        to="/repuestos"
        className={`text-sm font-light transition-opacity ${
          pathname === "/repuestos"
            ? "opacity-100"
            : "opacity-50 hover:opacity-100"
        }`}
        style={{ color: "#7b4b23" }}
      >
        Repuestos
      </Link>
    </nav>
  );
}
