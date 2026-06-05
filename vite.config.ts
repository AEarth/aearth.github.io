import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from "@sveltejs/adapter-static";

// export default defineConfig({ plugins: [tailwindcss(), sveltekit()] });



/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
        },
        plugins: [tailwindcss(), sveltekit()]
    }
};

export default config;
