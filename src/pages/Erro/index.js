import './erro.css';
import ShortBtn from '../../components/ShortBtn';

function Erro(){
    return(
        <div>
            <section id='erro'>
                <div className="wrapper">
                    <div className='title'>
                        <h1>ERRO 404</h1>
                        <div className='subtitle'>
                            <h2>Oops! Ocorreu um erro!</h2>
                        </div>
                    </div>
                    <p>Página não encontrada.</p>
                    <ShortBtn name='Voltar' to='/' darkmode={true}/>
                </div>
            </section>
        </div>
    )
}

export default Erro;