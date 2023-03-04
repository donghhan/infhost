import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${(props) => props.theme.fonts.prompt};
    }

    a {
        text-decoration: none;
    }

    span {
        display: inline-block;
    }

    input {
        border: transparent; 
        font-family: ${(props) => props.theme.fonts.prompt}

        &:focus {
            outline: none;
        }
    }

    button {
        border: transparent;
        cursor: pointer;
    }

    ul, li {
        list-style: none;
    }
`;

export default GlobalStyle;
