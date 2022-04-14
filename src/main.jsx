import './style.scss'

// await import("./model")

document.querySelector(".lds-spinner").remove()

const app = document.querySelector('#app')

app.appendChild(
  <>
    <div className="app-bar">
      MMIST web
    </div>
    <div className="container">
      <div className="card">
        <h1>Hello Vite 2!</h1>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
      </div>
    </div>
  </>
)
