import style from './formulario.module.css'

const Formulario = () => {
    const inputs = [
        {
            id: 1,
            type: 'text',
            text: 'Nombre',
            placeholder: 'Tu Nombre'
        },
        {
            id: 2,
            type: 'tel',
            text: 'Teléfono',
            placeholder: 'Tu Teléfono'
        },
        {
            id: 3,
            type: 'email',
            text: 'Gmail',
            placeholder: 'Tu Gmail'
        }
    ]
    return inputs.map((props) => (
        <div className={style.campo} key={props.id} >
            <label htmlFor={props.text}>{props.text}</label>
            <input id={props.text} className={style.inputText} type={props.type} placeholder={props.placeholder} />
        </div>
    ))
}
export default Formulario
