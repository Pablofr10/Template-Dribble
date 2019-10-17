import styled from 'styled-components';

export const ContainerNavBar = styled.div`
    max-width: 900px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .menu{
    display: flex;
    align-items: center;
    text-align: center;
    }
    ul{
        display: flex;
        justify-content: flex-end;
        height: 100%;
    }
    .menu ul li{
        display: flex;
        flex: 1 0 100px;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        
    }

    .menu ul li:hover{
        border-bottom: 5px #2e9feb solid;
        transition: .1s ease;
        color: #2e9feb;
        cursor: pointer;
    }
    
    ul > li > a{
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-weight: 600;    
        
    }
    ul li a:hover{
        color: #2e9feb;
        font-size: 16px;
        
    }
`;