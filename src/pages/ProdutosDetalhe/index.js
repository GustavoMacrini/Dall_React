import './produtosDetalhe.css';
import { useParams } from 'react-router-dom';
import CardData from '../../components/Slider/cardData';
import ContatoBtn from '../../components/ContatoBtn';
import Slider from '../../components/Slider';

function ProdutosDetalhe (){
    const { id } = useParams();

    const produto = CardData.find(item => item.id == id);
    
    return(
        <div className='product-wrapper'>
            <section id='product-info'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>{produto.name}</h1>                        
                    </div>

                    <div className='product'>
                        <div>
                            <div className='imagem'>
                                <img src={produto.image} alt={produto.name}/>
                            </div>
                        </div>
                        <div className='product-content'>
                            <div className='product-content-description'>
                                <div className='line'>
                                    <hr/>
                                </div>

                                <div className='product-text'>
                                    <p>
                                        {produto.text}
                                    </p>
                                    <ul>
                                        {produto.textList.map(item => <li>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            <ContatoBtn/>                    
                        </div>
                    </div>
                </div>
            </section>
            <section id='sugestao'>
                <div className='wrapper'>
                    
                    <div className='line'>
                        <hr/>
                    </div> 

                    <div className='title'>
                        <h2>SUGESTÕES</h2>
                        <div className='title-main'>
                            <h2>PARA VOCÊ</h2>
                        </div>
                    </div>

                    <div className='line'>
                        <hr/>
                    </div>

                    <Slider product={produto.type} link={true} exclude={produto.id}/>

                </div>
            </section>

            <section id='contato'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>O QUE ESTÁ ESPERANDO?</h1>
                        <h1>FAÇA JÁ O SEU PEDIDO!</h1>
                    </div>
                    
                    <div className='botao'>
                        {/* <ContatoBtn/> */}
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default ProdutosDetalhe;