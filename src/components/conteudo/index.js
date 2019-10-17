import React from 'react';
import { ConteudoPage, Servicos } from './estilo';
import Homem from '../../assets/homem.jpg';
 
function Conteudo() {
  return (
    <ConteudoPage>

      <div className="info">
        <section className="esquerdo">
          <div className="detail">
            <span>__  ____</span>
            <small>WHO WE ARE</small>
          </div>

          <h1> More than 23+ years who provide <span>IT solutions</span></h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
               industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
          </p>

          <a href="#">Conheça mais</a>

        </section>
        <section className="img">
          <img src={Homem} alt="homem" />
        </section>
        <section class="direito">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                 Aldus PageMaker including versions of Lorem Ipsum. </p>
        </section>

      </div>
      <Servicos>
        <div className="container-serv">
        <div className="detail">
            <span>_____</span>
            <small>SOBRE A EMPRESA</small>
            <span>_____</span>
          </div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>  
      </Servicos>

    </ConteudoPage>
  );
}

export default Conteudo;