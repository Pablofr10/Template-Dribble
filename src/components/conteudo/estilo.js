import styled from 'styled-components';
import Imagem from '../../assets/serv.jpg';


export const ConteudoPage = styled.div`
margin-top: 50px;
width: 100%;
height: 100%;

    .info{
        margin: 0 10em;
        font-size: 1.1em;
        display: flex;
        flex-direction: row;
    }

    .esquerdo{
        margin-right: 2em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 calc(350px - 2em);
    }

    .detail{
        display: flex;
        font-weight: bold;
        color: #2e9feb;
        font-size: 18px;
        justify-content: center;
        align-items: center;
    }
    

    .detail > span{
        padding: 0 30px 18px 0;
        font-size: 1em;
    }

    .esquerdo > h1{
        margin-top: 30px;
        font-size: 2em;
        line-height: 2.3rem;
    }

    .esquerdo > h1 > span{
        color: #2e9feb;
    }

    .esquerdo > p{
        margin-top: 30px;
        text-align: justify;
        flex-wrap: wrap;
    }

    .esquerdo > a {
        margin-top: 50px;
        text-transform: uppercase;
    }

    .direito{
        margin-left: 2em;
        margin-top: 20px;
    }

    .img > img{
        width: 300px;
    }


`;

export const Servicos = styled.div`
margin: 0;
margin-top: 50px;
padding: 0;
width: 100%;
height: 40vh;
background: url(${Imagem}) no-repeat;
background-size: cover;
background-attachment: fixed;

    .container-serv{
        width: 50%;
        margin: 0 auto;
        padding-top: 50px;
    }
    .container-serv > p{
        font-size: 2em;
        text-align: center;
    }

    .detail > small{
        padding-right: 30px;
        font-size: 1em;
    }
`; 