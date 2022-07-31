import {Link} from 'react-router-dom'

import imgFunko from '../images/funko-logo.svg'
import imgCapa from '../images/imagem-capa.png'

import '../styles/home.css'

function Home() {
    return (
        <>
          <header className='header'>
            <img className="logo" src={imgFunko} alt="Imagem Funko"/>
    
            <nav>
              <ul >
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/">Listar Personagens</Link>
              </ul>
            </nav>
    
          </header>
    
          <div className="imagem_capa">  
            <img className="img" src={imgCapa} alt="Imagem de capa "/>
          </div>
        </>
        )
}

export default Home;