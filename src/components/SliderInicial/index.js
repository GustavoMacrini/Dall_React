
import EmbalagemDemo from './embalagens-demo.svg';
import Carousel from 'react-bootstrap/Carousel';
import './sliderInicial.css';

function SliderInicial(){
    return (
        <section id='slider-inicial'>
            <div className='wrapper'>
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item interval={2000}>
                        <img src={EmbalagemDemo} className="d-block w-100" alt="..."/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src={EmbalagemDemo} className="d-block w-100" alt="..."/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src={EmbalagemDemo} className="d-block w-100" alt="..."/>
                    </Carousel.Item>
                </Carousel>
            </div>            
        </section>
        
    )
}

export default SliderInicial;