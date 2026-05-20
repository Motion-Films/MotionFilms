import './App.css'
import { useEffect, useRef } from "react";
import Scene from '../assets/scenePage';

import { Link } from 'react-router-dom';

//importação de elementos
import Header from '../elements/header';
import Footer from '../elements/footer';

//importação de vídeos
import video_fundo from '../videos/fundo-app3.mp4';

//Fotos carrossel
import foto1 from '../img/carrossel/foto1.jpg';
import foto2 from '../img/carrossel/foto2.jpg';
import foto3 from '../img/carrossel/foto3.jpg';
import foto4 from '../img/carrossel/foto4.jpg';
import foto5 from '../img/carrossel/foto5.jpg';
import foto6 from '../img/carrossel/foto6.jpg';
import foto7 from '../img/carrossel/foto7.jpg';
import foto8 from '../img/carrossel/foto8.jpg';
import foto9 from '../img/carrossel/foto9.jpg';
import foto10 from '../img/carrossel/foto10.jpg';

function App() {
  const carrossel = [
    {
      img: foto1,
      titulo: "Luana e Samir",
      des: "Celebraram o amor com uma cerimônia cheia de significado, emoção e sorrisos sinceros. Cada olhar trocado e cada detalhe da decoração refletiam a conexão única do casal, resultando em registros leves, naturais e inesquecíveis."
    },
    {
      img: foto2,
      titulo: "Geovanna e Vinicius",
      des: "Viveram um dia intenso e especial, marcado por abraços apertados e momentos espontâneos. A energia contagiante dos dois transformou cada clique em uma memória cheia de verdade e alegria."
    },
    {
      img: foto3,
      titulo: "Ana e Leandro",
      des: "Ambos disseram “sim” em uma celebração repleta de romantismo e cumplicidade. Entre risadas, lágrimas de felicidade e muita emoção, cada instante foi eternizado com sensibilidade e autenticidade."
    },
    {
      img: foto4,
      titulo: "Maria Eduarda",
      des: "Viveu um casamento encantador, onde cada detalhe foi pensado com carinho. A leveza do seu sorriso e a emoção do grande dia criaram registros delicados e cheios de personalidade."
    },
    {
      img: foto5,
      titulo: "Izabela e André",
      des: "Eles protagonizaram uma cerimônia marcante, cheia de olhares apaixonados e promessas sinceras. A conexão do casal tornou cada momento ainda mais especial, resultando em imagens intensas e cheias de sentimento."
    },
    {
      img: foto6,
      titulo: "Manu e André",
      des: "Celebraram o amor em um dia vibrante e inesquecível. A alegria contagiante e a sintonia entre eles fizeram com que cada registro transmitisse a essência verdadeira da história dos dois."
    },
    {
      img: foto7,
      titulo: "Isabella Sanches",
      des: "Ela viveu um dos dias mais importantes da sua vida com elegância e emoção. Cada detalhe, do making of à cerimônia, foi capturado com delicadeza, revelando a beleza e a intensidade do momento."
    },
    {
      img: foto8,
      titulo: "Isabella Sanches",
      des: "Em um dia repleto de significado, celebrou o amor cercada de pessoas especiais. A atmosfera leve e emocionante resultou em registros naturais e cheios de autenticidade."
    },
    {
      img: foto9,
      titulo: "Naty e Igor",
      des: "Os dois transformaram o casamento em uma celebração cheia de alegria e espontaneidade. Entre sorrisos, abraços e muita energia boa, cada momento foi eternizado de forma única e verdadeira."
    },
    {
      img: foto10,
      titulo: "Anne e Léo",
      des: "Viveram um dia mágico, onde o amor foi o grande protagonista. A harmonia do casal e a emoção da cerimônia criaram memórias inesquecíveis, registradas com sensibilidade e cuidado."
    }
  ]

  const video = useRef();
  const observerRef = useRef([]);
  const mainRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("area-video")) {
            video.current.style.transform = 'scale(1)';
          }
          if (entry.target.classList.contains("titulo-historia")) {
            entry.target.classList.add("anim");
          }
        } else {
          if (entry.target.classList.contains("area-video")) {
            video.current.style.transform = 'scale(1.3)';
          }
        }
      });
    }, { threshold: 0.8 });
    observerRef.current.forEach(item => {
      observer.observe(item);
    });
  }, []);

  return (
    <div>
      <Header />
      <section className='area-video' ref={el => observerRef.current[0] = el}></section>
      <main id='principal-app'>
        <div id='ctn-video' ref={video}>
          <video autoPlay muted loop playsInline webkit-playsinline="true">
            <source src={video_fundo} type='video/mp4' />
          </video>
        </div>
        <div id='sob-principal'>
          <h1>Motion Films</h1>
          <p>Nossa essência é contar sua história em forma de registro</p>
        </div>
      </main>
      <div id='pos-main' ref={mainRef}>
        <div id="pos-main-content">
          <section id='sec-carrossel'>
            <div id='ctn-carrossel-imgs'>
              {carrossel.map((item, index) => (
                <article className='card' key={index}>
                  <figure><img src={item.img} className='imagem' alt={item.titulo}></img></figure>
                  <h2>{item.titulo}</h2>
                  <figcaption>{item.des}</figcaption>
                </article>
              ))}
              {carrossel.map((item, index) => (
                <article className='card' key={index}>
                  <figure><img src={item.img} className='imagem' alt={item.titulo}></img></figure>
                  <h2>{item.titulo}</h2>
                  <figcaption>{item.des}</figcaption>
                </article>
              ))}
            </div>
          </section>
          <section id='historia' ref={sectionRef}>
            <div id='text-historia'>
              <h1>Quem somos nós</h1>
              <br />
              <p>Formada por Gaby e Alisson, a Motion Films é idealizada por um casal apaixonado por contar histórias através da fotografia e do vídeo desde 2019.</p>
              <br />
              <p>Registramos casamentos, pré-weddings, 15 anos, ensaios e eventos infantis com um olhar sensível, técnico e autêntico. Mais do que imagens, entregamos narrativas que preservam a essência de cada momento.</p>
              <br />
              <p>Do planejamento à entrega final, seguimos um processo organizado para garantir qualidade, identidade e propósito em cada projeto. Acreditamos que toda história é única e nosso trabalho é transformá-la em um registro atemporal através de <strong>cores reais e autenticidade</strong>.</p>
            </div>
            <Scene mainRef={mainRef} />
          </section>
          <section id='sec-historia'>
            <div className='grid' id='grid-1'>
              <img src={foto1} alt="Homem e mulher casamento" />
              <img src={foto2} alt="Mulheres sorrindo" />
            </div>
            <div className='grid' id='grid-2'>
              <img src={foto3} alt="Noivos se olhando" />
              <img src={foto4} alt="Noiva pronta com seu vestido" />
              <img src={foto5} alt="Mulher sentada com vestido branco para seu casamento" />
            </div>
          </section>
          <Link to="/portfolio" className='link-visite'>Visite</Link>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
