import styled from 'styled-components';
import Imagem from '../../assets/img-header.jpg';




export const Banner = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: row;
background: url(${Imagem}) no-repeat;


    img{
        position: relative;
        width: 100%;
        height: 70%;
        
    }
    .conteudo-header{
        max-width: 900px;
        margin: auto;
        display: flex;
        flex-direction: row;
        color: #ffffff;
    }

    .conteudo-header > section{
        justify-content: space-around;
    }

    .esquerda{
        padding-right: 400px;
    }
    
    .conteudo-header > h1, p, div{
        padding-bottom: 1em;
    }

    .conteudo-header > section > h1{
        display: flex;
        font-size: 2.5em;
        flex-wrap: wrap;
    }

    .botoes-header{
        margin-top: 2em;
        display: flex;
    }

    .botoes-header a{
        margin-left: 5em;
        color: white;
        align-self: center;
        text-decoration: underline;
    }

    .botao-play > svg{
        margin-top: 100px;
        color: #ffffff;
        align-self: flex-end;
    }

    .botao-play > svg:hover{
        color: #2e9feb;
        cursor: pointer;
    }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    
}

`;