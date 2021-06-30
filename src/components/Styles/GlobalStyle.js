import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

button {
    cursor: pointer;
}
.sign-in {
    display: flex;
    align-items: center;
    justify-content: center;

    > div{
        > div {
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
}

.red {
    background-color: #E54225;
}
.big-screen {
    @media (max-width: 560px){
        display: none;
    }
}
.small-screen {
    @media (min-width: 560px){
        display: none;
    }
}

`;

export default GlobalStyle;