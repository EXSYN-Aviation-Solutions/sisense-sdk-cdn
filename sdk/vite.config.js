import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './index.js',
            formats: ['es'],
            fileName: () => 'sisense.bundle.js',
        },
        rollupOptions: {
            external: ['vue'],
        },
        outDir: '../',
        emptyOutDir: false,
        cssCodeSplit: false,
    },
    define: {
        'process.env.NODE_ENV': '"production"',
        global: 'globalThis',
    },
})
