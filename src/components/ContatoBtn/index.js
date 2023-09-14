import './contatoBtn.css';
import RightArrow from '../../pages/imagens/icones/right-arrow.svg';
import {AiOutlineRight} from 'react-icons/ai';

function ContatoBtn(){
    return(
        <div>
            <div className='contato-btn'>
                <div></div>
                <a>CONTATE-NOS</a>
                <AiOutlineRight className='arrow-icon'/>
            </div>
        </div>
    )
}

export default ContatoBtn;