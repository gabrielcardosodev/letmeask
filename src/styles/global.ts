import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --background: #F8F8F8;
        --details: #FEFEFE;
        --black: #29292E;
        --shadow: #050206;
        --purple: #835AFD;
        --danger: #E73F5D;

        --gray-dark: #737380;
        --gray-medium: #A8A8B3;
        --gray-light: #DBDCDD;

        --pink-dark: #E559F9;
        --pink-light: #D67EE2;

        --hover-purple: #6F4BD8;
        --hover-danger: #D73754;
        --hover-gray-medium: #7E7E86;
        --hover-gray-light: #CECECE;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (min-width: 720px) {
            font-size: 87.5%;
        }
    }
    
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
       font: 400 1rem 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;
