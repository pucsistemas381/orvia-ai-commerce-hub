import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "@/App";
let root: Root;
let host: HTMLDivElement;
beforeEach(() => {
  window.history.replaceState({}, "", "/");
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  window.scrollTo = vi.fn();
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  });
  Element.prototype.scrollIntoView = vi.fn();
  document.head.innerHTML =
    '<meta name="description"><meta property="og:title"><meta property="og:description"><meta property="og:url"><meta name="twitter:title"><meta name="twitter:description"><meta name="robots"><link rel="canonical">';
  host = document.createElement("div");
  document.body.append(host);
  root = createRoot(host);
});
afterEach(() => {
  act(() => root.unmount());
  host.remove();
  vi.unstubAllGlobals();
});
const render = (path = "/") => {
  window.history.replaceState({}, "", path);
  act(() => root.render(<App />));
};
describe("Site institucional Orvia", () => {
  it("apresenta os três pilares, as seções e apenas o produto confirmado", () => {
    render();
    expect(host.querySelectorAll("h1")).toHaveLength(1);
    expect(host.querySelector("h1")?.textContent).toContain(
      "Tecnologia que transforma operações.",
    );
    for (const id of [
      "inicio",
      "ecossistema",
      "produtos",
      "solucoes",
      "tecnologia",
      "sobre",
      "contato",
      "resultados",
    ])
      expect(host.querySelector(`#${id}`)).not.toBeNull();
    expect(host.querySelectorAll(".pillar")).toHaveLength(3);
    expect(host.querySelectorAll(".product-feature")).toHaveLength(1);
    expect(host.querySelectorAll('a[href="#"]')).toHaveLength(0);
    expect(
      host.querySelector('a[href="https://wa.me/5511977536165"]'),
    ).not.toBeNull();
    expect(host.querySelector("form")).toBeNull();
  });
  it("abre e fecha o menu com Escape e devolve o foco", () => {
    render();
    const toggle = host.querySelector(".menu-toggle") as HTMLButtonElement;
    act(() => toggle.click());
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    act(() =>
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })),
    );
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(toggle);
  });
  it("navega ao Retoma, atualiza SEO e oferece o destino público real", () => {
    render();
    const productLink = host.querySelector(
      ".product-feature a",
    ) as HTMLAnchorElement;
    act(() => productLink.click());
    expect(window.location.pathname).toBe("/produtos/retoma");
    expect(document.title).toContain("Retoma |");
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    ).toMatch(/\/produtos\/retoma$/);
    expect(
      host.querySelector('a[href="https://retoma.orviabr.tech/"]'),
    ).not.toBeNull();
    expect(host.querySelectorAll("h1")).toHaveLength(1);
    expect(host.textContent).toContain(
      "sem representar telas ou etapas obrigatórias",
    );
  });
  it("fecha o menu ao navegar e mantém os destinos de seção", () => {
    render("/produtos/retoma");
    const toggle = host.querySelector(".menu-toggle") as HTMLButtonElement;
    act(() => toggle.click());
    act(() =>
      (
        host.querySelector('nav a[href="/#solucoes"]') as HTMLAnchorElement
      ).click(),
    );
    expect(window.location.pathname).toBe("/");
    expect(window.location.hash).toBe("#solucoes");
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(host.querySelector("#solucoes")).not.toBeNull();
  });
  it("mantém a rota 404 em português e sem indexação", () => {
    render("/pagina-inexistente");
    expect(host.textContent).toContain("Página não encontrada");
    expect(
      document.querySelector('meta[name="robots"]')?.getAttribute("content"),
    ).toBe("noindex, follow");
  });
  it("recomenda soluções conforme o desafio e prepara a conversa correta", () => {
    render();
    const buttons = Array.from(
      host.querySelectorAll<HTMLButtonElement>(".challenge-options button"),
    );
    expect(buttons).toHaveLength(3);
    act(() => buttons[1].click());
    expect(buttons[1].getAttribute("aria-pressed")).toBe("true");
    expect(buttons[0].getAttribute("aria-pressed")).toBe("false");
    const recommendation = host.querySelector("#challenge-recommendation")!;
    expect(recommendation.textContent).toContain("Menos ilhas de informação.");
    const contact = recommendation.querySelector<HTMLAnchorElement>(
      'a[href^="https://wa.me/"]',
    )!;
    expect(new URL(contact.href).searchParams.get("text")).toContain(
      "integrações e automação da minha operação",
    );
    act(() => buttons[2].click());
    expect(recommendation.textContent).toContain("Quando o desafio é único");
    const projectLink = recommendation.querySelector<HTMLAnchorElement>("a")!;
    expect(new URL(projectLink.href).searchParams.get("text")).toContain(
      "uma solução de software para minha empresa",
    );
  });
  it("apresenta respostas de FAQ acessíveis sem depender de envio de dados", () => {
    render();
    const details = host.querySelector<HTMLDetailsElement>(".faq-item")!;
    expect(details.open).toBe(false);
    act(() => details.querySelector("summary")!.click());
    expect(details.open).toBe(true);
    expect(details.textContent).toContain(
      "IA é uma das capacidades do ecossistema",
    );
    expect(host.querySelectorAll(".faq-item")).toHaveLength(5);
    expect(host.querySelector("form")).toBeNull();
  });
});
