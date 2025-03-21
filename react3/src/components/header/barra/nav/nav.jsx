import style from './nav.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    const Enlaces = [
        {
            name: 'Nosotros'
        },
        {
            name: 'Cursos'
        },
        {
            name: 'Contacto'
        }
    ]
    return Enlaces.map((props, keys) => (
        <Link to={`/${props.name}`} className={style.navegacionEnlace} key={keys}>{props.name}</Link>
    ))
}
export default Nav