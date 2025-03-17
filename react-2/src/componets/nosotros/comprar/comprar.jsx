import style from './comprar.module.css'
import Bloque from './bloque/bloque'

const Comprar = () => (
    <section className={style.contenedor}>
        <h2 className={style.comprarTitulo}>
            ¿Por que comprar?
        </h2>
        <div className={style.bloques}>
            <Bloque />
        </div>
    </section>
)
export default Comprar