import style from './camisa.module.css'
import img from '../Contenedor/productos/img/3.jpg'
import Formalurio from './formulario/formulario'

const Camisa = () => (
    <main className={style.contenedor}>
        <h1>React js</h1>
        <div className={style.camisa}>
            <img className={style.camisaImagen} src={img} alt="camisa imagen" />
            <div className={style.camisaContenido}>
                <p>aecenas tellus est, auctor a viverra at, sodales sed enim.</p>
                <Formalurio />
            </div>
        </div>
    </main>
)
export default Camisa