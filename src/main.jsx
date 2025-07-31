import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter} from 'react-router-dom'
import { JobProvider } from './contexts/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <JobProvider>
      <App />
    </JobProvider>
    </HashRouter>
  </StrictMode>,
)
