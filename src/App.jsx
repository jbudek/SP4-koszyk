import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="main">
        <h2>SKlepik szkolny</h2>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Notes – 12.50 zł
            <button type="button" class="btn btn-sm btn-primary">Do koszyka</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Długopis – 3.20 zł
            <button type="button" class="btn btn-sm btn-primary">Do koszyka</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Plecak – 89.00 zł
            <button type="button" class="btn btn-sm btn-primary">Do koszyka</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Kalkulator – 45.90 zł
            <button type="button" class="btn btn-sm btn-primary">Do koszyka</button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
              Zakreślacz – 4.75 zł
            <button type="button" class="btn btn-sm btn-primary">Do koszyka</button>
          </li>
        </ul>

        <h3>Koszyk (0 pozycji)</h3>
        <table class="table">
          <thead>
            <tr><th scope="col">Produkt</th><th scope="col">Ilość</th><th scope="col">Cena</th><th scope="col">Suma</th><th scope="col">Akcja</th></tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
        Suma: 0 zł
      </section>
    </>
  )
}

export default App
