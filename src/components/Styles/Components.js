import styled from "styled-components";
import {Link} from "react-router-dom";

export const Page = styled.div`
    height: 100vh;
    overflow: auto;

    .search-bar-container{
        display: flex;
        justify-content: center;
        padding: 10px 0;
        
        @media (min-width: 560px){
            display: none;
        }
    }
`;

export const Brand = styled.div`
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 84px;
    letter-spacing: 0.05em;
    color: #363380;
    display: flex;
    align-items: center;

    img {
        height: 60px;
        @media (max-width: 410px) {
            display:none;  
        }
    }
    @media (max-width: 340px) {
        font-size: 44px;    
    }
    @media (min-width: 760px) {
        font-size: 70px;
        img {
            height: 80px;
        }    
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
        color: #363380;
        font-size: 22px;
        line-height: 33px;
        font-family: 'Arvo', serif;

        ::placeholder {
            color: #363380;
        }

    }

    button {
        width: 330px;
        height: 55px;
        border-radius: 6px;
        border: 0;
        background:#363380;
        color: #FFF;
        font-weight: bold;
        font-size: 22px;
        line-height: 40px;
        font-family: 'Arvo', serif;
    }

    @media (max-width: 340px) {
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