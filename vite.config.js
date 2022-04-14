import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    esbuild: {
        jsxFactory: "jsx.createElement",
        jsxFragment: "jsx.Fragment",
        jsxInject: "import jsx from \"jsx\";",
    },
    resolve: {
        alias: {
            "jsx": resolve(__dirname, "src/jsx.js"),
            "onnxruntime-web": resolve(__dirname, "node_modules/onnxruntime-web/dist/ort.es6.min.js"),
        }
    }
})
