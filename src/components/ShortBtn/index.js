import { Link } from 'react-router-dom';
import './shortBtn.css';

function ShortBtn(props){ 
    return(        
        <div className='short-btn-wrapper'>            
            <Link to={props.to} className={props.darkmode? 'short-btn-dark' : 'short-btn-light'} onClick={props.onClick}>
                {props.name}
            </Link>
        </div>
    )
}

export default ShortBtn;