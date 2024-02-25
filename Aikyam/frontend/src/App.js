
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Learn from './pages/Learn';
import Locatefacility from './pages/Locatefacility';
import StartRecycling from './pages/StartRecycling';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <Login />
          } />


          <Route path='signup' element={
            <Signup />
          } />

          <Route path='learn' element={
            <Learn />
          } />
          <Route path='/locate' element={
            <Locatefacility />
          } />

          <Route path='/store' element={
            <StartRecycling />
          } />

          <Route path='/contact' element={
            <Contact />
          } />


          <Route path='/' element={
            <Home />
          } />

          <Route path='navbar' element={
            <Navbar />
          } />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
