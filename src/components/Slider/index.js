import './slider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import Card from '../Card';
import CardData from './cardData.jsx';

function Slider(props){
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
      };
      
    const productData = CardData.filter(item => item.type == props.product && item.id != props.exclude).map(item =>(
      <div className='card-wrapper'>
        <Card id={item.id} name={item.name} image={item.image} link={props.link}/>
      </div>
    ))

    return(

      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
      >   
        {productData}   
      </Carousel>      
    )
}

export default Slider;