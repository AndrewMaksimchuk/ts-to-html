/// <reference types="vitest/config" />
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(import.meta.dirname, "src/main.js"),
			fileName: "tstohtml",
			formats: ["es"],
		},
	},
	test: {
		includeSource: ["src/**/*.ts"],
	},
	define: {
		"import.meta.vitest": "undefined",
	},
});
