import './shortBtn.css';

function ShortBtn(props){ 
    return(        
        <div>            
            <div className='short-btn' onClick={props.onClick}>
                <a>{props.name}</a>
            </div>
        </div>
    )
}

export default ShortBtn;