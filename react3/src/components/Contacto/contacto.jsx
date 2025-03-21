import style from './contacto.module.css'

import Formulario from './formulario/formulario'

const Contacto = () => (
    <main className={style.contenedor}>
        <h3 className={style.centrarTexto}>Contacto</h3>
        <div className={style.contactoBg}></div>
        <form className={style.formulario}>
            <Formulario />
            <div className={style.campo}>
                <label className={style.campoLabel} for="mensaje">Mensaje</label>
                <textarea
                    className={style.campoField}
                    id="mensaje"
                ></textarea>
            </div>

            <div className={style.campo}>
                <input type="submit" value="Enviar" className={style.boton} />
            </div>
        </form>
    </main>
)
export default Contacto