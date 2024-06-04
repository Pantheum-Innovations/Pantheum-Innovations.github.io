import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	base: "/",
	build: {
		outDir: "../dist",
		rollupOptions: {
			input: [
				"src/index.html",
				"src/oni.html",
				"src/deschool.html",
				"src/uploads.html",
			],
		},
	},
});
