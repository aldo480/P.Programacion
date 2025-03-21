import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Courses from './components/cursos/courses'
import Nosotros from './components/Nosotros/nosotros'
import Contacto from './components/Contacto/contacto'

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cursos' element={<Courses />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)
export default App