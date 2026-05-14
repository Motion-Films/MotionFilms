import './portfolio.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//Importação de elementos
import Header from '../elements/header';
import Footer from '../elements/footer';
import { Wrapper, TituloH2 } from '../elements/styled';
import Trabalho from '../elements/trabalho';

function Portfolio() {
    const textRef = useRef([]);
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            wheelMultiplier: 1,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <div id='corpo-portfolio'>
            <Header />
            <section id='trabalhos'>
                <Trabalho />
                <Link to="/contato" className='link-visite' id='link-contato' href="">Solicite um orçamento</Link>
            </section>
            <Footer />
        </div>
    )
}

export default Portfolio;