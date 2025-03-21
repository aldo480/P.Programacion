import style from './barraCursos.module.css'
import { Link } from 'react-router-dom'

const BarraCursos = () => {
    const NavCourses = [
        {
            titulo: 'Técnicas de Extracción de Café',
            precio: 'Gratis',
            cupos: 20
        },
        {
            titulo: '4 Recetas de Café para Principiantes',
            precio: '20$',
            cupos: 10
        }
    ]
    return NavCourses.map((props, key) => (
        <li className={style.widgetCurso} key={key}>
            <h4 className={style.noMargin}>{props.titulo}</h4>
            <p className={style.widgetCursoLabel}>Precio:
                <span className={style.widgetCursoInfo}>{props.precio}</span>
            </p>
            <p className={style.widgetCursoLabel}>Cupo:
                <span className={style.widgetCursoInfo}>{props.cupos}</span>
            </p>
            <Link to="/Entrada" className={style.boton}>Más Información</Link>
        </li>
    ))
}
export default BarraCursos