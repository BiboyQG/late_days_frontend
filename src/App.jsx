import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import DisplayBox from './components/DisplayBox/DisplayBox';
import InputBox from './components/InputBox/InputBox';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
function App() {
  const [netid, setNetid] = useState('');
  const [lateDays, setLateDays] = useState(null);

  return (
    <Router>
      <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <NavBar />
        <div className="py-8 mt-16 flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="flex">
                <div className="w-[25%] pr-4">
                  <InputBox netid={netid} setNetid={setNetid} setLateDays={setLateDays} />
                </div>
                <div className="w-[75%] pl-4">
                  <DisplayBox netid={netid} lateDays={lateDays} />
                </div>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
