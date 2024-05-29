import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from "./app/store.js";
import { AuthProvider } from './context/AuthContext.jsx'
import { SideBarContextProvider } from './context/SideBarContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import the CSS



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <SideBarContextProvider>
          <App />
        </SideBarContextProvider>
        <ToastContainer />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
