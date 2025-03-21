import style from './courses.module.css'

import Course from './curso/curso'

const Courses = () => (
    <main className={style.contenedor}>
        <h3 className={style.centrarTexto}>Nuestros Próximos Cursos y Talleres</h3>
        <Course />
    </main>
)
export default Courses