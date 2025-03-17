import React, { useState } from 'react'
import style from './nav.module.css'

import App from '../../App';

export const Nav = () => {

    return (
        <BrowserRouter>
            <nav className={`${style.navegador}`}>
                <Link className={`${style.navEnlace}`} to="/">Tienda</Link>
                <Link className={style.navEnlace} to="/Nosotros" >Nosotros</Link>
            </nav>
            <Routes>
                <Route path='/' element={<App />} />

            </Routes>
        </BrowserRouter >
    )
}
