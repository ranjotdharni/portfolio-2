import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <head>
      <meta name="theme-color" content="#080808" />
    </head>
    <App />
  </StrictMode>,
)
