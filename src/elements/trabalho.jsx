import { useRef, useEffect, useState } from 'react';

import { Wrapper, TituloH2 } from '../elements/styled';

//Importação de imagens casamento
import c1 from '../img/casamento/imagem1.jpg';
import c2 from '../img/casamento/imagem2.jpg';
import c3 from '../img/casamento/imagem3.jpg';

//Casamentos
const casamentos = Object.values(
    import.meta.glob('../img/galeria/casamentos/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);

//Pré wedding
const pre_wedding = Object.values(
    import.meta.glob('../img/galeria/pre_wedding/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);

//15 anos
const aniversario_15 = Object.values(
    import.meta.glob('../img/galeria/15_anos/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);
const ensaio_15 = Object.values(
    import.meta.glob('../img/galeria/15_anos/ensaios/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);

//Infantil
const aniversario_infantil = Object.values(
    import.meta.glob('../img/galeria/infantil/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);
const ensaio_infantil = Object.values(
    import.meta.glob('../img/galeria/infantil/ensaio_infantil/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);

//Ensaios
const ensaios = Object.values(
    import.meta.glob('../img/galeria/ensaios/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    })
);

//Importação de imagens casamento
import a1 from '../img/aniversario/imagem1.jpg';
import a2 from '../img/aniversario/imagem2.jpg';
import a3 from '../img/aniversario/imagem3.jpg';

//Importação de imagens casamento
import e1 from '../img/ensaio/imagem1.jpg';
import e2 from '../img/ensaio/imagem2.jpg';
import e3 from '../img/ensaio/imagem3.jpg';

const img_casamento = [c1, c2, c3];
const img_15_sub1 = [a1, a2, a3];
const img_15_sub2 = [c1, c2, c3];
const img_ensaio = [e1, e2, e3];

const objTrabalho = [
    {
        nome: "Casamentos",
        des: ["Registramos cada detalhe do seu grande dia com sensibilidade e atenção. Desde os momentos mais emocionantes até os pequenos gestos que tornam a celebração única, nosso objetivo é transformar seu casamento em memórias visuais inesquecíveis."],
        img: [casamentos]
    },
    {
        nome: "Pré wedding",
        des: ["Cada aniversário merece ser celebrado e lembrado. Capturamos a alegria, as risadas e os momentos especiais da comemoração para que você possa reviver essa data importante sempre que quiser."],
        img: [pre_wedding]
    },
    {
        nome: "15 anos",
        titulo: ["Aniversários", "Ensaios"],
        des: ["Cada aniversário merece ser celebrado e lembrado. Capturamos a alegria, as risadas e os momentos especiais da comemoração para que você possa reviver essa data importante sempre que quiser.",
            "Cada detalhe de um ensaio de 15 anos carrega significado. É o momento de eternizar uma fase única, cheia de sonhos, personalidade e descobertas. Capturamos a essência, a leveza e a beleza dessa transição para que você possa reviver essa etapa especial sempre que quiser."],
        img: [aniversario_15, ensaio_15]
    },
    {
        nome: "Infantil",
        titulo: ["Aniversários", "Ensaios"],
        des: ["Cada aniversário infantil é um universo de alegria, cores e descobertas. São risadas espontâneas, olhinhos brilhando e momentos cheios de magia. Capturamos cada detalhe dessa comemoração especial para que essas memórias vivam para sempre no coração.",
            "A infância passa rápido, mas os momentos conosco são eternos. O ensaio infantil é sobre registrar a pureza, a imaginação e a essência de cada fase. Com leveza e naturalidade, transformamos sorrisos e brincadeiras em lembranças que você vai guardar para a vida toda."],
        img: [aniversario_infantil, ensaio_infantil]
    },
    {
        nome: "Ensaios",
        des: ["Cada ensaio é uma experiência pensada nos detalhes. Da direção à entrega final, nosso foco é capturar com sensibilidade e técnica aquilo que torna cada pessoa única. O resultado são imagens naturais, elegantes e atemporais — feitas para atravessar o tempo com significado."],
        img: [ensaios]
    }
]

function Trabalho() {
    var teste = [];
    for (let num = 0; num < objTrabalho.length; num++) {
        teste.push(0);
    }
    const [number, setNumber] = useState(teste);
    const [animate, setAnimate] = useState(0);
    const [loading, setLoading] = useState([5, 5, 5, 5, 5]);
    const textRef = useRef([]);
    const quadros = useRef([]);
    const locBt = useRef([]);
    const ctn_full = useRef();
    const img_full = useRef([]);
    const [fullscreen, setFullscreen] = useState(false);

    function testando() {
        console.log("ola");
    }
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('trabalhos-titulo')) {
                        entry.target.classList.add("anim");
                    }
                    if (entry.target.classList.contains('trabalho-des')) {
                        entry.target.classList.add("anim");
                    }
                }
            })
        });
        textRef.current.forEach((item) => {
            observer.observe(item);
        })
        console.log(quadros.current);
    }, []);
    useEffect(() => {
        console.log(animate);
        if (animate) {
            console.log(textRef.current[animate * 2 + 1]);
            textRef.current[animate * 2 + 1].classList.remove("anim");
            quadros.current[animate].classList.remove("ativo");
            requestAnimationFrame(() => {
                textRef.current[animate * 2 + 1].classList.add("anim");
                quadros.current[animate].classList.add("ativo");
            })
            setAnimate(0);
        }
    }, [animate]);

    useEffect(() => {
        if (fullscreen) {
            console.log(fullscreen[0]);
            if (fullscreen[0]) {
                console.log("para true");
                img_full.current.src = fullscreen[1].target.src;
                ctn_full.current.classList.add("open");
            } else {
                console.log("para false");
                ctn_full.current.classList.remove("open");
            }
        }
    }, [fullscreen]);
    return (
        objTrabalho.map((itemTrabalho, indexTrabalho) => (
            <article className='bloco-trabalho' key={indexTrabalho}>
                <Wrapper><TituloH2 className='trabalhos-titulo' ref={el => textRef.current[indexTrabalho * 2] = el}>{itemTrabalho.nome}</TituloH2></Wrapper>
                {itemTrabalho.titulo && (
                    <nav className='nav-trabalho'>
                        {itemTrabalho.titulo.map((bt, index) => (
                            <button key={index} onClick={() => {
                                setNumber(prev => {
                                    const novo = [...prev];
                                    novo[indexTrabalho] = index;
                                    return novo;
                                })
                                setAnimate(indexTrabalho);
                            }} className={index == number[indexTrabalho] ? 'bt-select ativo' : 'bt-select'}>{itemTrabalho.titulo[index]}</button>
                        ))}
                    </nav>
                )}
                <p className='trabalho-des' ref={el => textRef.current[indexTrabalho * 2 + 1] = el}>{itemTrabalho.des[number[indexTrabalho]]}</p>
                <figure ref={el => quadros.current[indexTrabalho] = el} className='ctn-imagens'>
                    {itemTrabalho.img[number[indexTrabalho]].slice(0, loading[indexTrabalho]).map((item, index) => (
                        <img loading='lazy' key={index} src={item} alt={itemTrabalho.nome} onClick={el => setFullscreen([true, el])} />
                    ))}
                </figure>
                <button className='bt-ver-mais' onClick={() => setLoading(prev => {
                    const novo = [...prev];
                    novo[indexTrabalho] += 5;
                    return novo;
                })}>Ver mais</button>
                <div className='ctn-full' ref={ctn_full}>
                    <img id='imagem-full' ref={img_full} alt="imagem fullscreen" />
                    <button onClick={() => setFullscreen(prev => {
                        let teste = [...prev];
                        teste[0] = false;
                        return teste;
                    })}>X</button>
                </div>
            </article >
        ))
    )
}

export default Trabalho;