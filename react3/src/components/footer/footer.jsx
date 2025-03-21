import { Link } from 'react-router-dom'
import style from './footer.module.css'

const Footer = () => (
    <footer className={style.footer}>
        <div className={style.contenedor}>
            <div className={style.barra}>
                <Link className={style.logo} to="/">
                    <h2 className={style.logoNombre}>Blog<span className={style.logoBold}>DeCafé</span></h2>
                </Link>

                <nav className={style.navegacion}>
                    <Link to="/Nosotros" className={style.navegacionEnlace}>Nosotros</Link>
                    <Link to="/Cursos" className={style.navegacionEnlace}>Cursos</Link>
                    <Link to="/Contacto" className={style.navegacionEnlace}>Contacto</Link>
                </nav>
            </div>
        </div>
    </footer>
)
export default Footer