import style from './servicio.module.css'
import Servicio from '../servicios/servicios'
import Formulario from '../formulario/formulario'

const Servicios = () => {
    return (
        <main className={style.contenedors}>
            <h2>Mis Servicios</h2>
            <div className={style.servicios}>
                <Servicio />
            </div>
            <section>
                <form action="submit" className={style.formulario}>
                    <fieldset>
                        <legend>Contactános llenando todos los campos</legend>
                        <div className={style.contenedorCampos}>
                            <Formulario />
                            <div className={style.campo}>
                                <label>Mensaje</label>
                                <textarea className={style.inputText}></textarea>
                            </div>
                        </div>
                        <div className={style.flex}>
                            <input className={style.boton} type="submit" value="Enviar" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}
export default Servicios