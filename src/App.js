import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import SinglePostPage from './pages/SinglePostPage';
import Home from './pages/Home';
import Write from './pages/Write';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import { Context } from './context/Context';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  const { user } = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/Blog-Site-Frontend' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Login />} />
        <Route path='/post/:postId' element={<SinglePostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
