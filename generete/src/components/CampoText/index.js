
import "./CampoText.css"
const CampoText = (props) => {

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

     return(
        <div className="campoText">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required = {props.obrigatorio} placeholder={props.place}/>
        </div>
     );
}

export default CampoText;