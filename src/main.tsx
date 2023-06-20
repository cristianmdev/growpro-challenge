import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { createStore, Provider } from 'jotai';
import "./index.css"

/**
 * @desc Tienda del estado
 */
const store = createStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
