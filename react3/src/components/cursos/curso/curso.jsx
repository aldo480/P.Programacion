import style from './curso.module.css'

import img1 from './img/curso1.jpg'
import img2 from './img/curso2.jpg'
import img3 from './img/curso3.jpg'

const Course = () => {
    const Curso = [
        {
            img: img1,
            titulo: 'Técnicas de extracción de café',
            precio: '30$',
            cupo: '10',
            lore: 'Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.'
        },
        {
            img: img2,
            titulo: 'Taller para Tostar y Moler Granos',
            precio: 'gratis',
            cupo: '20',
            lore: 'Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.'
        },
        {
            img: img3,
            titulo: '4 Recetas de Café para Principiantes',
            precio: '20$',
            cupo: '15',
            lore: 'Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.'
        }
    ]
    return Curso.map((props, key) => (
        <div className={style.curso} key={key}>
            <div className={style.cursoImagen}>
                <img src={props.img} alt="Imagen del curso" />
            </div>
            <div className={style.cursoInformacion}>
                <h4 className={style.noMargin}>{props.titulo}</h4>
                <p className={style.cursoLabel}>Precio:
                    <span className={style.cursoInfo}>{props.precio}</span>
                </p>
                <p className={style.cursoLabel}>Cupo:
                    <span className={style.cursoInfo}>{props.cupo}</span>
                </p>
                <p className={style.cursoDescripcion}>
                    {props.lore}
                </p>
            </div>
        </div>
    ))
}
export default Course