import './sliderInicial.css';
import EmbalagemDemo from './embalagens-demo.svg';

function SliderInicial(){
    return (
        <section id="slider-inicial">
            <div className="wrapper">
                <div id="carouselExample" className="carousel slide" data-ride="carousel" >

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="2000">
                            <img src= {EmbalagemDemo} className="d-block w-100" alt="..."/>                        
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src="./imagens/embalagens/embalagens-demo.svg" className="d-block w-100" alt="..."/>                        
                        </div>
                        <div className="carousel-item ">
                            <img src="./imagens/embalagens/embalagens-demo.svg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
            
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
            
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </section> 
    )
}

export default SliderInicial;