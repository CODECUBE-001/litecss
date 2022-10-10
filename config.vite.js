import { defineConfig} from 'vite'
import path from 'path'

module.exports = defineConfig({
    build:{
        lib:{
            entry:path.resolve(__dirname, "./src/style.scss"),
            assetsDir:'./',
            name:'litecss'
        }
    }
})