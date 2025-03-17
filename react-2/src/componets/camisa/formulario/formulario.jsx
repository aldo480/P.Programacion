import style from './formulario.module.css'

const Formalurio = () => (
    <form className={style.formulario}>
        <select className={style.formularioCampo}>
            <option value="" disabled selected>--selecciona--</option>
            <option value="">Chica</option>
            <option value="">mediana</option>
            <option value="">grande</option>
        </select>
        <input className={style.formularioCampo} type="number" placeholder="Cantidad" min="1" />
        <input className={style.formularioSubmit} type="submit" value="agregar a carrito" />
    </form>
)
export default Formalurio