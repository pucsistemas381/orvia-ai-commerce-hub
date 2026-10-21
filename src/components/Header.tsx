import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export function Brand() {
  return (
    <span className="brand-asset">
      <img
        src="/lovable-uploads/bbc59210-47ba-46d0-982a-48ce9045a3da.png"
        alt="Orvia"
        width="814"
        height="814"
      />
    </span>
  );
}
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link to="/" aria-label="Orvia Tech — início">
          <Brand />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navegação principal"
        >
          {[
            ["Início", "inicio"],
            ["Soluções", "solucoes"],
            ["Produtos", "produtos"],
            ["Tecnologia", "tecnologia"],
            ["Sobre a Orvia", "sobre"],
            ["Contato", "contato"],
          ].map(([name, id]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
          <Link className="header-cta" to="/#contato">
            Falar com um especialista
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
