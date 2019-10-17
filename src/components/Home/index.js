import React from 'react';
import Header from '../Header';
import NavBar from '../Navbar';
import Conteudo from '../conteudo';
import Rodape from '../rodape';

function Home() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default Home;
