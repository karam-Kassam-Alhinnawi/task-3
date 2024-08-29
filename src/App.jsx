import './App.css'
import { Route, Routes } from 'react-router-dom';

import { TopLinks } from './components/TopLinks/TopLinks';
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Details from './pages/Details/Details'; 
import Properties from './pages/Properties/Properties';
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
    <>
     <TopLinks/>
     <Navbar/>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/details' element={<Details/>}/>
       <Route path='/properties' element={<Properties/>}/>
       <Route path='/contact' element={<ContactPage/>}/>
     </Routes>

     <Footer/>
    </>
  )
}

export default App
