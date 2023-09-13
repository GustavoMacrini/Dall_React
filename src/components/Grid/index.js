import './grid.css';
import Card from '../Card';
import CardData from '../Slider/cardData';

function Grid(props){

    const productData = CardData.filter(item => item.type == props.product).map(item =>(
        <Card name={item.name} image={item.image} />
    ))
  

    return(
        <div className='product-grid'>
            {productData}
        </div>
    )
}

export default Grid;