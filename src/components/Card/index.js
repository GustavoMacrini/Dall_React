import Almofada from '../../pages/imagens/embalagens/Almofada.svg';
import './card.css';
import { Link } from 'react-router-dom';

function Card(props){
    let element;
    
    if(props.link){
        element = (
            <Link to={`/produtos/${props.id}`} className='card-link'>
                <CardBase id={props.id} name={props.name} image={props.image} link={true}/>
            </Link> 
        )   
    }
    else{
        element = (
            <CardBase id={props.id} name={props.name} image={props.image} link={true}/>
        )   
    }

    return(
        <div className={props.link? 'card-hover' : ''}>
            {element}
        </div>
    )
}

function CardBase(props){
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