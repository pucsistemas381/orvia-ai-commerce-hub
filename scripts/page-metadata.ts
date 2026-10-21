import type { Plugin } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

/** Emit a real HTML entry so social crawlers see product metadata without JavaScript. */
export function productMetadata(): Plugin {
  let outputDirectory = "";
  return {
    name: "orvia-product-metadata",
    apply: "build",
    configResolved(config) {
      outputDirectory = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const title = "Retoma | Gestão de oportunidades comerciais — Orvia Tech";
      const description =
        "Organize, acompanhe e recupere oportunidades comerciais relacionadas a orçamentos e propostas com o Retoma, um produto Orvia Tech.";
      const html = (
        await readFile(path.join(outputDirectory, "index.html"), "utf8")
      )
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(
          /(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*/g,
          `$1${description}`,
        )
        .replace(
          /(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*/g,
          `$1${title}`,
        )
        .replace(
          /(<link\s+rel="canonical"\s+href=")[^"]*/g,
          "$1https://orviatech-siteorvia.aj9jbc.easypanel.host/produtos/retoma",
        )
        .replace(
          /(<meta\s+property="og:url"\s+content=")[^"]*/g,
          "$1https://orviatech-siteorvia.aj9jbc.easypanel.host/produtos/retoma",
        );
      const directory = path.join(outputDirectory, "produtos/retoma");
      await mkdir(directory, { recursive: true });
      await writeFile(path.join(directory, "index.html"), html);
    },
  };
}
