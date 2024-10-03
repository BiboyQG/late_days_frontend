import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import App from './App.jsx'
import './index.css'

axios.defaults.baseURL = 'http://localhost:8080/v1'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <ToastContainer />
  </Router>,
)
