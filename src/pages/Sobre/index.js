import './sobre.css';
import Historia from '../../components/Historia';
import LargeBtn from '../../components/LargeBtn';
import Funcionario from '../../components/Funcionario';
import FuncionariosData from './funcionariosData.js';
import SliderInicial from '../../components/SliderInicial';

function Sobre(){

    const DownloadPresent = () => {
        window.open('https://drive.google.com/file/d/10PtzBnLSSVXKYSVwWzNNWfbVPiGOZdzx/view', '_blank');
    }

    const funcionarios = FuncionariosData.map(f => (
        <Funcionario id={f.id} nome={f.nome} cargo={f.cargo} imagem={f.imagem}/>
    ))

    return(
        <div className="sobre-wrapper">
            <section id='slide-inicial'>
                <SliderInicial/>
            </section>


            <section id='historia'>
                <Historia/>
            </section>

            <section id='apresentacao'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>A NOSSA HISTÓRIA</h1>
                    </div>
                    <div className='content-apresentacao'>
                        <p>
                            A Dall tech busca entender comercial e tecnicamente a necessidade mercadológica do produto em desenvolvimento e assim oferecer soluções inteligentes e econômicas aliadas a mais alta qualidade da embalagem e confiabilidade do processo.
                            Nos diferenciamos por buscar melhorias contínuas com nossos clientes desde a performance da embalagem em quesitos de barreira, resistência e demais aspectos, até o desempenho da produtividade de filmes laminados e sacos pré-formados.
                            Em nossa essência alinhamos valor agregado em nossas embalagens e reduções de custos em sua respectiva produção.A Tecnoplast Embalagens Flexíveis busca entender comercial e tecnicamente a necessidade mercadológica do produto em desenvolvimento e assim oferecer soluções inteligentes e econômicas aliadas a mais alta qualidade da embalagem e confiabilidade do processo.
                            Nos diferenciamos por buscar melhorias contínuas com nossos clientes desde a performance da embalagem em quesitos de barreira, resistência e demais aspectos, até o desempenho da produtividade de filmes laminados e sacos pré-formados.
                            Em nossa essência alinhamos valor agregado em nossas embalagens e reduções de custos em sua respectiva produção.                                                    
                        </p>
                    </div>

                    <div className='download'>
                        <LargeBtn title='BAIXAR APRESENTAÇÃO' onClick={DownloadPresent} download={true}/>
                    </div>
                </div>
            </section>

            <section id='line'>
                <div className='wrapper'>
                    <hr/>
                </div>
            </section>

            <section id='time'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>NINGUÉM É FORTE SOZINHO</h1>
                    </div>
                    <div className='subtitle'>
                        <h2>CONHEÇA O NOSSO TIME</h2>
                    </div>

                    <div className='funcionarios'>
                        {funcionarios}
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Sobre;