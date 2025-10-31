import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Services from './components/Services';
import NotFound from './components/NotFound';
import Login from './components/Login';


function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
