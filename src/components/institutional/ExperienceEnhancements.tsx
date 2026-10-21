import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { conversationUrl } from "@/data/marketing";

export default function ExperienceEnhancements() {
  const { pathname } = useLocation();
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    setShowContact(false);
    if (!("IntersectionObserver" in window)) return;
    const hero = document.querySelector(
      pathname === "/" ? ".hero .actions" : ".product-hero .actions",
    );
    const contact = document.getElementById("contato");
    if (!hero || !contact) return;
    let heroPassed = false;
    let contactVisible = false;
    const visibility = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero)
          heroPassed =
            !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
        if (entry.target === contact) contactVisible = entry.isIntersecting;
      });
      setShowContact(heroPassed && !contactVisible);
    });
    visibility.observe(hero);
    visibility.observe(contact);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animations: Animation[] = [];
    const reveal =
      !reduceMotion &&
      new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (typeof entry.target.animate === "function")
                animations.push(
                  entry.target.animate(
                    [
                      { opacity: 0, transform: "translateY(20px)" },
                      { opacity: 1, transform: "translateY(0)" },
                    ],
                    { duration: 550, easing: "cubic-bezier(.2,.7,.2,1)" },
                  ),
                );
              if (reveal) reveal.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 },
      );
    if (reveal)
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => reveal.observe(el));
    return () => {
      visibility.disconnect();
      if (reveal) reveal.disconnect();
      animations.forEach((a) => a.cancel());
    };
  }, [pathname]);
  return (
    <aside
      className="mobile-contact-bar"
      aria-label="Contato rápido"
      hidden={!showContact}
    >
      <a
        href={conversationUrl(
          pathname === "/produtos/retoma"
            ? "o Retoma para minha empresa"
            : "tecnologia para minha empresa",
        )}
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>Vamos falar do seu próximo passo?</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </aside>
  );
}
