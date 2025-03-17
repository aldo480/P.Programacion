
import styles from './contenedor.module.css'
import Producto from './productos/productos'

export const Contenedor = () => {

    return (
        <main className={styles.contenedor}>
            <h1>Nuestro Producto</h1>
            <div className={styles.grid}>
                <Producto />
                <div className={styles.grafico1}></div>
                <div className={styles.grafico2}></div>
            </div>
        </main>
    )
}
