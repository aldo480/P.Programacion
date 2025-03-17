import style from './header.module.css'
import img from './img/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => (
    <header className={style.header}>
        <Link to="/">
            <img className={style.headerLogo} src={img} alt="logotipo" />
        </Link>
    </header>
)

