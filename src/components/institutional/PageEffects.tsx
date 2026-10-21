import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "@/data/company";
export default function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const product = pathname === "/produtos/retoma";
    const missing = pathname !== "/" && !product;
    const title = missing
      ? "Página não encontrada | Orvia Tech"
      : product
        ? "Retoma | Gestão de oportunidades comerciais — Orvia Tech"
        : "Orvia Tech | Tecnologia que impulsiona negócios";
    const description = product
      ? "Organize, acompanhe e recupere oportunidades comerciais relacionadas a orçamentos e propostas com o Retoma, um produto Orvia Tech."
      : "Soluções tecnológicas para empresas: software empresarial, plataformas SaaS B2B, automação comercial e inteligência artificial para conectar processos e negócios.";
    document.title = title;
    const set = (selector: string, value: string) =>
      document.querySelector(selector)?.setAttribute("content", value);
    set('meta[name="description"]', description);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', description);
    set('meta[property="og:url"]', company.origin + pathname);
    set('meta[name="robots"]', missing ? "noindex, follow" : "index, follow");
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", company.origin + pathname);
    if (hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          }),
      );
    } else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
