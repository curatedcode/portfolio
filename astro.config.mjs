import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		alpinejs({ entrypoint: "/src/entrypoint" }),
		AstroPWA({
			manifest: {
				name: "Zackary Fotheringham",
				short_name: "Zack F.",
				description:
					"Portfolio of Zackary Fotheringham, a software engineer specializing in intuitive UI/UX, and fast, accessible websites.",
				theme_color: "#0a192f",
				background_color: "#0a192f",
				display: "minimal-ui",
				id: "/",
				scope: "/",
				start_url: "/",
				icons: [
					{
						src: "/assets/icons/192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/assets/icons/512x512.png",
						sizes: "512x512",
						type: "image/png"
					},
					{
						src: "/assets/icons/512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any"
					},
					{
						src: "/assets/icons/512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable"
					}
				]
			}
		})
	]
});
