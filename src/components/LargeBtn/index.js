import './largeBtn.css';
import {AiOutlineRight} from 'react-icons/ai';

function LargeBtn(props){
    return(
        <div>
            <button type='submit' className='large-btn'>
                <div></div>                
                {props.title}
                <AiOutlineRight className='arrow-icon'/>
            </button>
        </div>
    )
}

export default LargeBtn;