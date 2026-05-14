import './header.css';
import { Link } from 'react-router-dom';

//importação de imagens
import img_perfil from '../img/perfil.jpg'

function Header() {
    return (
        <header id='cabecalho'>
            <Link to="/"><img src={img_perfil} alt="Logo Motion Films" /></Link>
            <nav id='navigation'>
                <Link to="/">Início</Link>
                <Link to="/portfolio">Portfólio</Link>
                <Link to="/contato">Orçamento</Link>
            </nav>
        </header>
    )
}

export default Header;