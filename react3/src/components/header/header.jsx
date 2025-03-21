import style from './header.module.css'
import Barra from './barra/barra'
import HeaderText from './headerText/headerText'

const Header = () => (
    <header className={style.header}>
        <Barra />
        <HeaderText />
    </header>
)
export default Header