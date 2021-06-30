import styled from "styled-components";
import {Link} from "react-router-dom";

export const Page = styled.div`
    background-color: #B03019;
    height: 100vh;
    overflow: auto;

    > div{
        > div {
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const BrandName = styled.div`
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 84px;
    letter-spacing: 0.05em;
    color: #2F475E;

    img {
        height: 60px;
    }

    @media (max-width: 330px) {
        font-size: 44px;    
    }
    @media (min-width: 760px) {
        font-size: 70px;    
    }
`;

export const Subtitle = styled.div`
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #FFF;
    text-align: center;

    @media (min-width: 760px) {
        font-size: 36px;    
    }
`;


export const StyledLink = styled(Link)`
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    text-decoration: none;
    pointer-events: ${props=> props.loading? "none": "auto"};
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    :disabled {
        filter: brightness(0.93);
    }
    input {
        width: 330px;
        height: 55px;
        border-radius: 6px;
        padding-left: 15px; 
        margin-bottom: 10px;
        border: 0;
        outline: 0;
        font-weight: bold;
        font-size: 22px;
        line-height: 33px;
        color:#2F475E;
        font-family: 'Arvo', serif;

        ::placeholder {
            color:#2F475E;
        }

        
    }

    button {
        width: 330px;
        height: 55px;
        border-radius: 6px;
        border: 0;
        background: #2F475E;
        color: #FFF;
        font-weight: bold;
        font-size: 22px;
        line-height: 40px;
        font-family: 'Arvo', serif;
    }

    @media (max-width: 330px) {
        input {
            width: 300px;
        }

        button {
            width: 300px;
        }
    }

    @media (min-width: 760px) {
        input {
            width: 360px;
        }

        button {
            width: 360px;
        }    
    }
`;