import './produtos.css';
import Grid from '../../components/Grid';
import ShortBtn from '../../components/ShortBtn';
import LargeBtn from '../../components/LargeBtn';
import VideoPlayer from '../../components/VideoPlayer';

function Produtos(){

    function openGrid(product){
        if(product == 1){
            document.getElementById('container-embalagens').classList.toggle('grid-container-embalagens-height');
        }
        if (product == 2){
            document.getElementById('container-maquinas').classList.toggle('grid-container-maquinas-height');
        }
    }

    return(
        <div className='product-wrapper'>
            <section id="video-inicial">
                <div className="wrapper">
                    <div className="video-inicial">
                        <VideoPlayer className='player' videoUrl={'https://www.youtube.com/watch?v=WQKzFRAtj10'}/>
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
                    
                    <div className='grid-container-maquinas grid-container-maquinas-height' id='container-maquinas'>
                        <Grid product={2}/> 
                    </div>
                </div>                
            </section>

            <section id='empacotamento-footer'>
                <div className='wrapper'>
                    <div className='short-line'>
                        <hr/>                    
                    </div>
                    <div className='empacotamento-footer'>
                        <p>
                            Otimize o processo de empacotamento com nosso sistema eficiente. Embale produtos
        de forma  rápida e organizada, aumentando a produtividade da sua empresa
                        </p>
                        <div className='short-btn'>
                            <ShortBtn onClick={() => openGrid(2)} name='MOSTRAR +'></ShortBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section id="embalagem">
                <div className="wrapper">

                    <div className='section-title'>
                        <h1>ESTÁ BUSCANDO POR</h1>
                        <h1 className='section-title-main'>EMBALAGENS LAMINADAS?</h1>
                    </div>
                    <hr/>
                    
                    <div className='grid-container-embalagens grid-container-embalagens-height' id='container-embalagens'>
                        <Grid product={1}/> 
                    </div>

                </div>
            </section >

            <section id='embalagem-footer'>
                <div className='wrapper' >
                    <div className='short-line'>
                        <hr/>                    
                    </div>
                    <div className='embalagem-footer'>
                        <p>
                            Otimize o processo de empacotamento com nosso sistema eficiente. Embale produtos
        de forma  rápida e organizada, aumentando a produtividade da sua empresa
                        </p>
                        <div className='short-btn'>
                            <ShortBtn onClick={() => openGrid(1)} name='MOSTRAR +'></ShortBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contato'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>O QUE ESTÁ ESPERANDO?</h1>
                        <h1>FAÇA JÁ O SEU PEDIDO!</h1>
                    </div>
                    
                    <div className='botao'>
                        <LargeBtn title='CONTATE-NOS'/>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Produtos;