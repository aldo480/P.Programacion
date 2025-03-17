import style from './contenedor.module.css'
import img from './img/nosotros.jpg'

const NosotrosContenedor = () => (
    <main className={style.contenedor}>
        <h1>Nosotros</h1>
        <div className={style.nosotros}>

            <div className={style.nosotrosContenido}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Maecenas tellus est, auctor a viverra at, sodales sed enim. Ut ac tortor quis mauris viverra tincidunt. Duis congue hendrerit neque non finibus. Nullam ut varius nibh. Etiam at facilisis nibh, non scelerisque mauris. Sed pulvinar varius lacinia. Suspendisse efficitur mollis pellentesque. Praesent aliquam pretium dui eleifend auctor. Suspendisse potenti. Nunc at nulla tellus. Suspendisse blandit finibus metus, et fermentum justo hendrerit semper. Etiam fermentum porta sapien sit amet tincidunt. Etiam consequat nibh nec ante aliquam, sed semper sem consequat. Suspendisse iaculis dui convallis nisl suscipit, sed venenatis sapien interdum.
                </p>
            </div>

            <img className={style.nosotrosImg} src={img} alt="img nosotros" />
        </div>
    </main>
)
export default NosotrosContenedor