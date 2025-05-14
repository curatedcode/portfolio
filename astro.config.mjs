import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeMermaid from "rehype-mermaid";

const mermaidCustom = () =>
	rehypeMermaid({
		mermaidConfig: {
			theme: "default", // or 'neutral', 'base', 'dark'
			themeCSS: `
			#mermaid-0 .cluster rect {
				fill: none !important;
			}
		`
		}
	});

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	markdown: {
		rehypePlugins: [mermaidCustom],
		syntaxHighlight: false
	},
	integrations: [
		alpinejs({ entrypoint: "/src/entrypoint" }),
		expressiveCode({ themes: ["github-dark"] })
	]
});
