import style from './barra.module.css'
import { Link } from 'react-router-dom'
import Nav from './nav/nav'

const Barra = () => (
    <div className={style.contenedor}>
        <div className={style.barra}>
            <Link className={style.logo} to="/">
                <h1 className={style.logoNombre}>Blog<span className={style.logoBold}>DeCafé</span></h1>
            </Link>
            <nav className={style.navegacion}>
                <Nav />
            </nav>
        </div>
    </div>
)
export default Barra