import style from './formulario.module.css'

const Formulario = () => {
    const Inputs = [
        {
            titulo: 'Nombre',
            id: 'nombre',
            type: 'text',
            placeholder: 'Tu Nombre'
        },
        {
            titulo: 'E-mail',
            id: 'email',
            type: 'email',
            placeholder: 'Tu E-mail'
        }
    ]
    return Inputs.map((props, key) => (
        <div className={style.campo} key={key}>
            <label className={style.campoLabel} for={props.id}>{props.titulo}</label>
            <input
                className={style.campoField}
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
            />
        </div>
    ))
}
export default Formulario