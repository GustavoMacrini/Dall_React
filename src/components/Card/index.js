import Almofada from '../../pages/imagens/embalagens/Almofada.svg';
import './card.css';

function Card(props){
    return(
        <div className='card'>
            <div className='image'>
                    <img src={props.image} alt={props.name}></img>
            </div>            
            <div className='content'>
                <h2>Dall Tech</h2>
                <h1>{props.name}</h1>
            </div>
        </div>        
    )
}

export default Card;