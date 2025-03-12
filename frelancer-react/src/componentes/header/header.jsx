import styles from './header.module.css'

const Header = () => (
    <section className={styles.hero}>
        <div className={styles.contenidoHero}>
            <h2>Diseño y Desarrollo Web <span> Freelancer</span></h2>
            <div className={styles.ubicacion}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFC107" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <p>Guadalajara, Jalisco</p>
            </div>
            <a className={styles.boton} href="#">Contactar</a>
        </div>
    </section>
)
export default Header;