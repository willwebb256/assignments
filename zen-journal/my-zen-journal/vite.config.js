import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
server: {
proxy: {
'/api': {
target: "http://localhost:9000",
changeOrigin: true,
secure: false
},
'/auth': {
target: 'http://localhost:9000',
changeOrigin: true,
secure: false,
},
// '/profile': {
// target: 'http://localhost:9000',
// changeOrigin: true,
// secure: false,
// },
// '/public': {
// target: 'http://localhost:9000',
// changeOrigin: true,
// secure: false,
// }
},
},
plugins: [react()],
})
