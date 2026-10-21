import { Link } from "react-router-dom";
import { Brand } from "./Header";
import { company, products } from "@/data/company";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" aria-label="Orvia Tech — início">
              <Brand />
            </Link>
            <p>Tecnologia que impulsiona negócios.</p>
            <span className="footer-note">
              Software. Inteligência. Possibilidades.
            </span>
          </div>
          <div>
            <h2>Empresa</h2>
            <Link to="/#sobre">Sobre a Orvia</Link>
            <Link to="/#contato">Contato</Link>
          </div>
          <div>
            <h2>Ecossistema</h2>
            <Link to="/#produtos">Produtos</Link>
            <Link to="/#solucoes">Soluções</Link>
            <Link to="/#tecnologia">Inteligência artificial</Link>
          </div>
          <div>
            <h2>Produtos</h2>
            {products.map((p) => (
              <Link key={p.slug} to={p.url}>
                {p.name} ↗
              </Link>
            ))}
          </div>
          <div>
            <h2>Conecte-se</h2>
            {company.contactUrl && (
              <a href={company.contactUrl}>WhatsApp comercial</a>
            )}
            {company.socials.map((s) => (
              <a key={s.url} href={s.url}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Orvia Tech. Todos os direitos
            reservados.
          </span>
          {company.privacyUrl ? (
            <a href={company.privacyUrl}>Política de Privacidade</a>
          ) : (
            <span>Desenvolvendo o próximo passo.</span>
          )}
        </div>
      </div>
    </footer>
  );
}
