import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const config = {
  plugins: [
	sveltekit(),
  VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'My App',
    short_name: 'App',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#222222',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  }
})
  ]
};

export default config;
