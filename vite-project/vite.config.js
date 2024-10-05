
import Inspect from 'vite-plugin-inspect'
import sass from 'rollup-plugin-scss'



export default({
  plugins: [
    Inspect(),
    sass(),
   
  ],
})

