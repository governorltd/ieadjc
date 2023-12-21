// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/ieadjc/',
        buildAssetsDir: 'assets'
    },
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
    },
    plugins: ["@/plugins/aos"]
})
