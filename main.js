import './style.css'
import './root.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>

  </div>
`

setupCounter(document.querySelector('#counter'))


