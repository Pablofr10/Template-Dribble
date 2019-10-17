import styled from 'styled-components';

export const ContainerTop = styled.div`
    width: 100%;
    height: 35px;
    background: #e0e3e3;
    color: #676767;
`;

export const Items = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 10px 0;
    display: flex;
`;

export const Contatos = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;

    section{
        display: flex;
        flex: 1 0 33%;
    }
`;

export const Social = styled.div`
    width: 30%;
    align-content: space-between;
    display: flex;

    svg{
        margin-right: 10px;
    }

    svg:hover{
        color: #2a9eea;
        transition: color .5s ease;
    }

    .idioma {
        margin-left: 40px;
        display: flex;
        align-content: space-between;
    }

    .idioma  > span{
        margin: 2px 0 0 8px;
    }
    
    .idioma > svg{
        margin-top: 5px;
        margin-left: 0;
        font-size: 12px;
    }

    .idioma > img{
        width: 20px;
    }

`;