import style from './home.module.css'
import Blog from './blog/blog'
import BarraCursos from './barraCursos/barraCursos'

const Home = () => (
    <div className={style.contenidoPrincipal}>
        <main className={style.blog}>
            <h3>Nuestro Blog</h3>
            <Blog />
        </main>
        <aside className={style.sidebar}>
            <h3>Nuestros Cursos y Talleres</h3>
            <ul className={style.cursos}>
                <BarraCursos />
            </ul>
        </aside>
    </div>
)

export default Home 