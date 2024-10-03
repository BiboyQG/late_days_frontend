import { Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { fetchLateDays } from "./utils/index";
import { app } from "./utils/firebase";
import './App.css'
import DisplayBox from './components/DisplayBox/DisplayBox';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  const [lateDays, setLateDays] = useState(null);

  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      console.log(user);
      
      if (!user) {
        navigate("/");
      }
      setUser(!!user);
      if (user) { 
        const email = user.email;
        const id = email.split('@')[0];
        setUserName(user.displayName);
        fetchLateDays(id).then(({ data }) => {
          setLateDays(data.days);
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, setUser, navigate]);

  function handleClick() {
    const auth = getAuth(app);
    auth.signOut();
  }

  return (
    <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
      <NavBar user={user} handleClick={handleClick} />
      <div className="py-8 mt-16 flex-grow">
        <Routes>
          <Route path="/home" element={
            <div className="w-[100%]">
              <DisplayBox lateDays={lateDays} userName={userName} />
            </div>
          } />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
