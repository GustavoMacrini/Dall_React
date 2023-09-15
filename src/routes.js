import { HashRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import ProdutosDetalhe from './pages/ProdutosDetalhe';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Politica from './pages/Politica';
import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
    return(    
        <HashRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>} />
                <Route path='/produtos/:id' element={<ProdutosDetalhe/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/politica' element={<Politica/>}/>
                {/* <Route path='*' element={<Erro/>}/> */}
            </Routes>
            <Footer/>
        </HashRouter>

    )
}

export default RoutesApp;