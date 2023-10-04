import './home.css';
import '../template.css';
import Logo from '../imagens/logos/logo.svg';
import Slider from '../../components/Slider';
import ShortBtn from '../../components/ShortBtn';
import Historia from '../../components/Historia';
import SliderInicial from '../../components/SliderInicial';

function Home(){

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
      };

    return(
        <div className='home-wrapper'>

            <SliderInicial/>
            
            {/* -- NOSSA HISTORIA -- */}
            <Historia/>

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
                            <ShortBtn name='+ DETALHES' to='/produtos' onClick={handleLinkClick}/>
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
                            <ShortBtn name='+ DETALHES' to='/produtos' onClick={handleLinkClick} />
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
                        <ShortBtn name='+ DETALHES' to='/sobre' onClick={handleLinkClick} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;