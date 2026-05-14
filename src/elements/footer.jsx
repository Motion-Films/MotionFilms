import './footer.css';

import { Link } from "react-router-dom";

//Importação de imagens
import logo_perfil from '../img/perfil.jpg';

//Importação de ícones
import icon_instagram from '../icones/instagram.png';
import icon_youtube from '../icones/youtube.png';
import icone_whats_min from '../icones/icon-whats-min.png';

function Footer() {
    return (
        <footer id="rodape">
            <div id='rodape-infos'>
                <div id='redes-sociais'>
                    <img id='logo-rodape' src={logo_perfil} alt="Logo Motion Films" />
                    <span id='ctn-icons'>
                        <Link className='icon-rede'><img src={icon_instagram} alt='Ícone Instagram' /></Link>
                        <Link className='icon-rede'><img src={icon_youtube} alt='Ícone YouTube' /></Link>
                    </span>
                </div>
                <div id='contato'>
                    <img src={icone_whats_min} alt="Ícone WhatsApp" />
                    <p><strong>Gabrielly: </strong>(43) 99137-8292</p>
                </div>
            </div>
            <hr />
            <p id='direitos'>&copy; Motion Films 2026. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;