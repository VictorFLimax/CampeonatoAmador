import { useState } from "react";
import Botao from "../Botao";
import CampoText from "../CampoText";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"
const Formulario = () => {
    const [nome , setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [camisa, setCamisa] = useState('');

    const posiçaoPessoa = [
        "Goleiro",
        "Jogador",
        "Tecnico"
    ]

    const times = [
        "Time 1",
        "Time 2",
        "Time 3",
        "Time 4",
        "Time 5"
    ]
const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("salvo" + nome + apelido + camisa);

    setNome('');
    setApelido('');
    setCamisa('');

}
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar} >
            <h2>Preencha os dados para Formação do time</h2>
            
            <CampoText 
            obrigatorio={true} 
            label="Nome" 
            place="Digite seu Nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
            <CampoText 
            label="Apelido"
            place="Digite seu Apelido"
            valor={apelido}
            aoAlterado={valor => setApelido(valor)}/>
            <CampoText 
            obrigatorio={true} 
            label="Numero da Camisa"
            place="Digite o numero da camisa" 
            valor={camisa}
            aoAlterado={valor => setCamisa(valor)}/>
            
            <ListaSuspensa 
            label="Posição do Jogador" 
            itens={posiçaoPessoa} 
            />

            <ListaSuspensa 
            label="Seu Time" 
            itens={times} />

            <Botao>
               Enviar
            </Botao>
            </form>
        </section>
    );
}

export default Formulario;