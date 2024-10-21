import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './app'
import {GoogleOAuthProvider} from "@react-oauth/google";
import {REACT_GOOGLE_API_TOKEN} from "./shared/utils/authList.ts";
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GoogleOAuthProvider clientId={REACT_GOOGLE_API_TOKEN}>
          <App />
      </GoogleOAuthProvider>
  </StrictMode>,
)
