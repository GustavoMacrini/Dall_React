import './home.css';
import '../template.css';
import Logo from '../imagens/logos/logo.svg';
import EmbalagemDemo from '../imagens/embalagens/embalagens-demo.svg';
import Slider from '../../components/Slider';
import ShortBtn from '../../components/ShortBtn';

function Home(){
    return(
        <div className='home-wrapper'>
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
            
            {/* -- NOSSA HISTORIA -- */}
            <section id="nossa-historia">
                <div className="wrapper">

                    <div class="info-empresa-titulo">
                        <h1>
                            NOSSA HISTÓRIA
                        </h1>
                    </div>

                    <div class="info-empresa" >
                        <h1>+ DE 10 ANOS NO MERCADO</h1>
                        <h1>+ DE 100 CLIENTES</h1>
                        <h1>+ DE 20 PRODUTOS</h1>
                    </div>
                    
                </div>
            </section>

            {/* -- NOSSOS PRODUTOS -- */}
            <section id="nossos-produtos">
                <div className='wrapper'>

                    <div className='section-title'>
                        <h1>CONHEÇA OS</h1>
                        <h1 className='section-title-main'>NOSSOS PRODUTOS</h1>
                    </div>

                    <hr/>

                    <div className='slider-maquinas'>
                        <h2 className='product-title'>SISTEMAS DE EMPACOTAMENTO</h2>
                        <Slider product={2}/>
                        <div className='detalhes'>
                            <p>
                                Otimize o processo de empacotamento com nosso sistema eficiente. <br/>
                                Embale produtos de forma rápida e organizada, aumentando a produtividade da sua empresa.
                            </p>                
                            <ShortBtn name='+ DETALHES' to='/produtos'/>
                        </div>
                    </div>

                    <hr/>

                    <div className='slider-embalagens'>
                        <h2 className='product-title'>EMBALAGENS LAMINADAS</h2>
                        <Slider product={1}/>
                        <div className='detalhes'>
                            <p>
                                Os materiais usados nas embalagem laminadas oferecem uma barreira que protege os itens armazenados contra agressões externas como a luz, calor e umidade.
                            </p>
                            <ShortBtn name='+ DETALHES' to='/produtos'/>
                        </div>
                    </div>
                </div>
            </section>

            <section id='line'>
                <div className='wrapper'>
                    <hr/>
                </div>
            </section>

            {/* -- QUEM SOMOS -- */}
            <section id="quem-somos">                
                <div class="wrapper">
                    <div class="quem-somos-title">
                        <h1>QUEM SOMOS?</h1>
                    </div>

                    <div class="quem-somos-logo">
                        <img src={Logo} alt=""/>
                    </div>
                    
                    <div class="quem-somos-content">
                        <p>
                            Oferecemos soluções inteligentes em automatização industrial. Contamos com engenharia especializada, identificamos os objetivos e necessidades de nossos clientes, e assim customizamos soluções com excelente custo-benefício para o aumento de produtividade, lucratividade, participação no mercado, além da redução de desperdícios no processo para os mercados alimentício, farmacêutico, nutracêutico e cosméticos.
                        </p>  
                    </div>
                    
                    <div class="detalhes">
                        <ShortBtn name='+ DETALHES' to='/sobre'/>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;