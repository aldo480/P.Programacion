import style from './blog.module.css'

import webp1 from './img/blog1.webp'
import jpg1 from './img/blog1.jpg'
import webp2 from './img/blog2.webp'
import jpg2 from './img/blog2.jpg'
import webp3 from './img/blog3.webp'
import jpg3 from './img/blog3.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
    const Articulos = [
        {
            webp: webp1,
            jpg: jpg1,
            lore: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?',
            titulo: 'Tipos de Grano de Café'
        },
        {
            webp: webp2,
            jpg: jpg2,
            lore: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?',
            titulo: '3 Deliciosas Recetas de Café'
        },
        {
            webp: webp3,
            jpg: jpg3,
            lore: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?',
            titulo: 'Beneficios del Café'
        }
    ]
    return Articulos.map((props, key) => (
        <article className={style.entrada} key={key}>
            <div className={style.entradaImagen}>
                <picture>
                    <source loading="lazy" srcSet={props.webp} type="image/webp" />
                    <img loading="lazy" src={props.jpg} alt="imagen blog" />
                </picture>
            </div>

            <div className={style.entradaContenido}>
                <h4 className={style.noMargin}>{props.titulo}</h4>
                <p>{props.lore}</p>
                <Link to="/Entrada" className={style.boton}>Leer Entrada</Link>
            </div>
        </article>
    )
    )
}
export default Blog