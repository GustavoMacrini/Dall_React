import './largeBtn.css';
import {AiOutlineRight} from 'react-icons/ai';
import {HiOutlineDocumentArrowDown} from 'react-icons/hi2';

function LargeBtn(props){
    return(
        <div>
            <button type='submit' className='large-btn' onClick={props.onClick}>
                <div></div>                
                {props.title}
                {props.download? <HiOutlineDocumentArrowDown className='download-file'/> : <AiOutlineRight/>}
            </button>
        </div>
    )
}

export default LargeBtn;