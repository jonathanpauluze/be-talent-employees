import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'
import './assets/styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
)
