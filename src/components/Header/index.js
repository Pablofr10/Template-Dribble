import React from 'react';
import { Banner } from './estilo';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Banner>
      <div className="conteudo-header">
        <section className="esquerda">
          <h1>Melhores soluções de TI para sua empresa.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi nemo magnam
             distinctio dolore explicabo molestias consequatur facilis in odio iure saepe hic non dignissimos consectetur modi quam aliquam quos.</p>
          <div className="botoes-header">
            <button>SAIBA MAIS <FaArrowRight /></button>
            <Link to="/">Como isso funciona.</Link>
          </div>
        </section>
        <section className="botao-play">
          <FaPlayCircle size={60} />
        </section>
      </div>
    </Banner>
  );
}

export default Header;
