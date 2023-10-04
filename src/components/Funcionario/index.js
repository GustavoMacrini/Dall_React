import './funcionario.css';


function Funcionario (props){

    return(
        <div>
           <div className='container-func'>
                <img src={props.imagem} alt={props.nome}/>
                <div className='info'>
                    <h3>{props.nome}</h3>
                    <span>{props.cargo}</span>
                </div>
            </div>
        </div>
    )
}

export default Funcionario;