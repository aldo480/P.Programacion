import style from './headerT.module.css'

const HeaderText = () => (
    <div className={style.headerTexto}>
        <h2 className={style.noMargin}>Blog de café con consejos y cursos</h2>
        <p className={style.noMargin}>Aprende de los expertos con las mejores recetas y consejos</p>
    </div>
)
export default HeaderText