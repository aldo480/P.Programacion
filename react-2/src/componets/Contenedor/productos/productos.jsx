import { useState } from 'react'
import style from './productos.module.css'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpg'
import img11 from './img/11.jpg'
import img12 from './img/12.jpg'
import img13 from './img/13.jpg'
import img14 from './img/14.jpg'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
const Producto = () => {
    const [productos, setProducto] = useState([
        {
            id: img1,
            nombre: 'Vuej',
            precio: '20$'
        },
        {
            id: img2,
            nombre: 'Angularjs',
            precio: '15$'
        },
        {
            id: img3,
            nombre: 'ReacJS',
            precio: '25$'
        },
        {
            id: img4,
            nombre: 'Redux',
            precio: '20$'
        },
        {
            id: img5,
            nombre: 'Nodejs',
            precio: '10$'
        },
        {
            id: img6,
            nombre: 'html5',
            precio: '20$'
        },
        {
            id: img7,
            nombre: 'gihub',
            precio: '25$'
        },
        {
            id: img8,
            nombre: 'BulmaCss',
            precio: '15$'
        },
        {
            id: img9,
            nombre: 'TipeScript',
            precio: '35$'
        },
        {
            id: img10,
            nombre: 'drupal',
            precio: '30$'
        },
        {
            id: img11,
            nombre: 'Javascript',
            precio: '10$'
        },
        {
            id: img12,
            nombre: 'graphql',
            precio: '25$'
        },
        {
            id: img13,
            nombre: 'hola',
            precio: '25$'
        },
        {
            id: img14,
            nombre: 'adios',
            precio: '25$'
        }
    ])

    return productos.map((props, index) => (
        <div className={style.productos} key={index}>
            <Link to='/Camisa'>
                <img className={style.productoImagen} src={props.id} alt="camisa" />
                <div className={style.productoInformacion}>
                    <p className={style.productoNombre}>{props.nombre}</p>
                    <p className={style.productoPrecio}>{props.precio}</p>
                </div>
            </Link>
        </div>
    ))
}
export default Producto