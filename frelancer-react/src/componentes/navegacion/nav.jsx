import styles from './nav.module.css'

const Enlaces = (params) => (
    <>
        <header>
            <h1 className={styles.titulo}>Juan De la torre <span>Freelancer</span></h1>
        </header>
        <div className={styles.navBg}>
            <nav className={styles.navegacionPrincipal}>
                <a href="#">Inicio</a>
                <a href="#">Sobre Mi</a>
                <a href="#">Clientes</a>
                <a href="#">Contacto</a>
            </nav>
        </div>
    </>
);
const Datos = [
    {
        href: "#",
        name: "Titulo",
    },
    {
        href: "#",
        name: "Nosotros",
    },
];

export default Enlaces;
