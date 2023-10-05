import './contato.css';
import LargeBtn from '../../components/LargeBtn';
import { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';

function Contato(){

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        window.location.href = `mailto:teste@gmail.com?subject=${`Contato Dall Website - ${name}`}&body=${message}`;
    }

    return(
        <div className="contato-wrapper">
            <section id='form-section'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>CONTATE-NOS</h1>
                    </div>

                    <form className='form' onSubmit={sendEmail}>
                        <div class="contato-campo nome-campo">
                            <label>NOME</label>
                            <input 
                                type="text" 
                                placeholder="INSIRA O SEU NOME"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div class="contato-campo">
                            <label>MENSAGEM</label>
                            <textarea 
                                cols="30" 
                                rows="10" 
                                placeholder="INSIRA A SUA MENSAGEM"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>
                        
                        <div className='btn-message'>
                            <LargeBtn title='ENVIAR MENSAGEM' type='submit'/>
                        </div>

                    </form>
                
                </div>
            </section>


            <section id='video'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>O QUE ESTÁ ESPERANDO?</h1>
                        <h1>FAÇA JÁ O SEU PEDIDO!</h1>
                    </div>

                    <div className="video-player">
                        <VideoPlayer className='player' videoUrl={'https://www.youtube.com/watch?v=WQKzFRAtj10'}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contato;