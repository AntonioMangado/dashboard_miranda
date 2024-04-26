import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from "./app/store.js";
import { AuthProvider } from './context/AuthContext.jsx'
import { SideBarContextProvider } from './context/SideBarContext.jsx'


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
