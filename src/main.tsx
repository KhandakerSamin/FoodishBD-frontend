import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavgate from './auth/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Router>
      <Auth0ProviderWithNavgate>
        <AppRoutes />
      </Auth0ProviderWithNavgate>
    </Router>
  </StrictMode>,
)
