import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
input{
    padding: 5px 16px 10px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #149fff;
    outline: none;
    width: 100%;
    background: transparent;
    color: #fff;
}



button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 12px 16px 13px 16px;
    border: 3px solid #149fff;
    background: transparent;
    outline: none;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #149fff;
        color: white;
    }
}

    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: #fff;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
