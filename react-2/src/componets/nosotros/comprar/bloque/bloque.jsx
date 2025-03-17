import style from './bloque.module.css'
import img1 from '../../contenedor/img/icono_1.png'
import img2 from '../../contenedor/img/icono_2.png'
import img3 from '../../contenedor/img/icono_3.png'
import img4 from '../../contenedor/img/icono_4.png'


const Bloque = () => {
    const bloque = [
        {
            name: 'El Mejor Precio',
            src: img1,
            texto: 'Maecenas tellus est, auctor a viverra at, sodales sed enim.'
        },
        {
            name: 'Para Devs',
            src: img2,
            texto: 'Maecenas tellus est, auctor a viverra at, sodales sed enim.'
        },
        {
            name: 'envio Gratis',
            src: img3,
            texto: 'Maecenas tellus est, auctor a viverra at, sodales sed enim.'
        },
        {
            name: 'la mejor calidad',
            src: img4,
            texto: 'Maecenas tellus est, auctor a viverra at, sodales sed enim.'
        }
    ]
    return bloque.map((props, keys) => (
        <div className={style.bloque} key={keys}>
            <img className={style.bloqueImagen} src={props.src} alt="" />
            <h3 className={style.bloqueTitulo}>{props.name}</h3>
            <p>
                {props.texto}
            </p>
        </div>
    ))
}
export default Bloque