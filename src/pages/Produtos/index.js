import './style-produtos.css';
import EmbalagemDemo from '../imagens/embalagens/embalagens-demo.svg';
import Grid from '../../components/Grid';

function Produtos(){

    return(
        <div>
            <section id="video-inicial">
                <div className="wrapper">
                    <div className="video-inicial">
                        <img src={EmbalagemDemo} alt=""/>
                    </div>
                </div>
            </section>

            <section id="empacotamento">
                <div className="wrapper">

                    <div className='section-title'>
                        <h1>CONHEÇA OS NOSSOS</h1>
                        <h1 className='section-title-main'>SISTEMAS DE EMPACOTAMENTO</h1>
                    </div>
                    <hr/>
                    
                    <div className='grid-container-maquinas'>
                        <Grid product={2}/> 
                    </div>

                </div>                
            </section>

            <div className='wrapper' id='empacotamento-footer'>
                <div className='empacotamento-footer'>
                    <p>
                        Otimize o processo de empacotamento com nosso sistema eficiente. Embale produtos
    de forma  rápida e organizada, aumentando a produtividade da sua empresa
                    </p>
                    <button>MOSTRAR</button>
                </div>
            </div>        

            <section id="empacotamento">
                <div className="wrapper">

                    <div className='section-title'>
                        <h1>ESTÁ BUSCANDO POR</h1>
                        <h1 className='section-title-main'>EMBALAGENS LAMINADAS?</h1>
                    </div>
                    <hr/>
                    
                    <div className='grid-container-maquinas'>
                        <Grid product={1}/> 
                    </div>

                </div>

                
            </section>
            <div className='wrapper' id='empacotamento-footer'>
                    <div className='empacotamento-footer'>
                            <p>
                            Otimize o processo de empacotamento com nosso sistema eficiente. Embale produtos
    de forma  rápida e organizada, aumentando a produtividade da sua empresa
                            </p>
                            <button>MOSTRAR</button>
                        </div>
                </div>


        </div>
    )
}

export default Produtos;