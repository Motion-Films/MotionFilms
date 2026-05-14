import './orcamento.css';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

//3D
import '@google/model-viewer';
import Scene from '../assets/scenePage';

import a7 from '../assets/a7iii_3D.glb';

//Importação de elementos
import Header from '../elements/header';
import Footer from '../elements/footer';
import { Wrapper, TituloH2, Para } from '../elements/styled';

//Importação de imagens
import logo_whats from '../icones/logo-whats.png';

function Orcamento() {
    const nomeRef = useRef("Nome não definido");
    const dataRef = useRef("");
    const cidadeRef = useRef("Cidade não definida");
    const redeRef = useRef("");

    return (
        <div>
            <Header />
            {/*<div className='wrapper-text'><h1 id='teste'>Testando...</h1></div>*/}
            <section id='page-orcamento'>

                <Wrapper><h1 className='anim-text' id='titulo-contato'>Fale conosco</h1></Wrapper>
                <div id='opcoes-contato'>
                    <article className='bloco-infos' id='info-tel'>
                        <TituloH2>Informações:</TituloH2>
                        <Para>Fale com a gente através das informações abaixo:</Para>
                        <Para><strong>Gabrielly: </strong>(43) 99137-8292</Para>
                    </article>
                    <article className='bloco-infos' id='info-whatsapp'>
                        <TituloH2>Envie uma mensagem</TituloH2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            /*
                            console.log(dataRef.current.value);
                            const data = dataRef.current.value.split("-");
                            console.log(data.current);
                            if (dataRef.current) {
                                console.log("é isso...");
                                dataRef.current = `${data[2]}/${data[1]}/${data[0]}`;
                            }*/
                            let dataFinal;
                            let dataFormat;
                            if (dataRef.current.value) {
                                dataFormat = dataRef.current.value.split("-");
                                dataFinal = `${dataFormat[2]}/${dataFormat[1]}/${dataFormat[0]}`;
                            } else {
                                dataFinal = "Data ainda não definida";
                            }
                            const CidadeFinal = cidadeRef.current.value ? cidadeRef.current.value : "Cidade ainda não definida";
                            dataRef.current.value = "ola";
                            console.log(dataFinal);
                            window.open(`https://wa.me/5543991378292?text=Olá Gaby, meu nome é ${nomeRef.current.value}, conheci vocês ${redeRef.current.value}. Para adiantar esse atendimento, tenho as seguintes informações:%0AData do meu evento: ${dataFinal}%0ACidade do meu evento: ${CidadeFinal}`, "_blank");
                        }
                        } id='form-contato'>
                            <div className='ctn-info-form'>
                                <label htmlFor="name">Nome:</label>
                                <input required type="text" placeholder='Digite seu nome...' ref={nomeRef} />
                            </div>
                            <div className='ctn-info-form'>
                                <label htmlFor="name">Data do meu evento:</label>
                                <input type="date" id='calendario' ref={dataRef} />
                            </div>
                            <div className='ctn-info-form'>
                                <label htmlFor="name">Cidade do meu evento:</label>
                                <input type="text" placeholder='Digite a cidade...' ref={cidadeRef} />
                            </div>
                            <div className='ctn-info-form'>
                                <label htmlFor="">Onde nos conheceu?</label>
                                <select ref={redeRef} name="" id="">
                                    <option value="pelo site">Selecione</option>
                                    <option value="no Instagram">Instagram</option>
                                    <option value="no Facebook">Facebook</option>
                                    <option value="no YouTube">Youtube</option>
                                    <option value="em outra plataforma">Outro</option>
                                </select>
                            </div>
                            <button type='submit' id='link-whatsapp'>
                                <img id='icon-link' src={logo_whats} alt="" />
                                Nosso Whatsapp Oficial
                            </button>
                        </form>
                    </article>
                </div>
            </section >
            <Footer />
        </div >
    )
}

export default Orcamento;