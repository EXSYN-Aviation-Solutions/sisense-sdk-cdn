import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: './index.js',
            formats: ['iife'],
            name: 'SisenseSDK',
            fileName: () => 'sisense.bundle.js',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
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
