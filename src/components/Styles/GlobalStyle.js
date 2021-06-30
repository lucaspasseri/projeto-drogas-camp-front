import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

button {
    cursor: pointer;
}
.centralized {
    display: flex;
    align-items: center;
    justify-content: center;
}
.red {
    background-color: #B03019;
}

`;

export default GlobalStyle;