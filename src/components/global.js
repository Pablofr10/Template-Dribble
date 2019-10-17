import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, border-style, #root{
    min-height: 100%;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
}

body{
    background: #ffffff;
}

a{
    color: #000000;
    text-decoration: none;
}

li{
    list-style: none;
}

button{
    padding: 10px 15px;
    color: #ffffff;
    background-color: #2e9feb;
    border-style: none;
    border-radius: 8px;
    font-weight: 800;
    transition: color 2s ease;
}

button:hover{
    cursor: pointer;
    opacity: .8;
}

`;