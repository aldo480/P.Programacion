import { Header } from "./componets/header/header";
import { Nav } from "./componets/nav/nav";
import Footer from "./componets/footer/footer";
import Nosotros from "./componets/nosotros/nosotros";
import { Contenedor } from "./componets/Contenedor/contenedor";
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import style from './componets/nav/nav.module.css';
import Camisa from "./componets/camisa/camisa";
import { useState } from "react";

const App = () => {
    let [activo, setActivo] = useState('')
    console.log(activo)
    return (
        <>
            <BrowserRouter>
                <Header />
                <nav className={`${style.navegador}`}>
                    <Link className={`${style.navEnlace} ${activo === 'home' ? 'activo' : ''}`} to="/" onClick={() => setActivo(activo = 'home')} id="tienda">Tienda</Link>
                    <Link className={`${style.navEnlace} ${activo === 'nosotros' ? 'activo' : ''}`} to="/Nosotros" onClick={() => setActivo(activo = 'nosotros')} id="nosotros">Nosotros</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Contenedor />} />
                    <Route path='/Nosotros' element={<Nosotros />} />
                    <Route path='/Camisa' element={<Camisa />} />
                </Routes>
            </BrowserRouter >

            <Footer />
        </>
    )
}
export default App