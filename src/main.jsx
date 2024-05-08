import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import { store } from "./app/store.ts";
import { AuthProvider } from './context/AuthContext.tsx'
import { SideBarContextProvider } from './context/SideBarContext.tsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <SideBarContextProvider>
          <App />
        </SideBarContextProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
