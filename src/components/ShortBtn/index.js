import { Link } from 'react-router-dom';
import './shortBtn.css';

function ShortBtn(props){ 
    return(        
        <div>            
            <Link to={props.to} className='short-btn' onClick={props.onClick}>
                <a>{props.name}</a>
            </Link>
        </div>
    )
}

export default ShortBtn;