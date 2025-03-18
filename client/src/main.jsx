import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext'; // Import AppContextProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider> {/* Wrap App inside AppContextProvider */}
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
