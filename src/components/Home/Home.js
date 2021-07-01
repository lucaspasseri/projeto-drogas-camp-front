import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext} from "react";

import {FaUser} from "react-icons/fa";
import logo from "../../assets/logo.png"
import {Page} from "../Styles/Components";
import UserContext from "../../contexts/UserContext";

import Gallery from "../Gallery/Gallery";


export default function Home(){
    
    const [products, setProducts] = useState([]);

    const { setUser } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.user) {
          const userStorage = JSON.parse(localStorage.user);
          setUser(userStorage);
        } 
        if(products.length===0){
            getProducts();
        } 
    });

    function getProducts(){
        //axios get "/products"
        const url = "http://localhost:4000/products"
        const request = axios.get(url);
        request.then(response => setProducts(response.data));
        request.catch(error => console.log(error));
    }

    return(
        <Page>
            <FixedContainer>
                <TopBar className="red">
                    <Brand>
                        <div><img alt="drogas_camp_logo" src={logo}/></div>
                        <div>DROGASCAMP</div>
                    </Brand>
                    <SearchBar className="big-screen" placeholder="Encontre seu produto..."/>
                    <UserConfig><FaUser size="26" fill="#363380"/></UserConfig>
                </TopBar>
                <div className="search-bar-container red">
                    <SearchBar className="small-screen" placeholder="Encontre seu produto..."/>
                </div>
            </FixedContainer>
            <Container>
                <h1>Escolha o(s) produto(s) de interesse e a quantidade desejada:</h1>
                <div>
                    {products.length === 0 ?
                        "Nenhum produto cadastrado." :
                        <Gallery products={products}/> 
                    } 
                </div>
            </Container>
        </Page>
    );  
}

const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    -webkit-box-shadow: 0px 1px 6px 1px #000000; 
    box-shadow: 0px 1px 6px 1px #000000;
`;

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100vw;
    padding-right: 18px;
    padding-left: 10px;

`;

const Container = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    padding: 30px;
    padding-top: 110px;

    h1 {
        margin-bottom: 10px;
        font-weight: bold;
    }
    
    > div {
        height: 100%;
        width: 100%;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Brand = styled.div`

    display: flex;
    img {
        height: 60px;
    }
    div:last-of-type {
        align-self: center;
        color: #363380;
        font-family: 'Martel', serif;
        font-size: 32px;
        font-weight: bold;
        margin-top: 8px;

        @media (max-width: 715px){
            display: none;
        }
        @media (max-width: 560px){
            display: block;
            font-size: 24px;
        }
    }

    @media (max-width: 560px){
        margin-top: 10px;

    } 
`;

const SearchBar = styled.input`
    width: 330px;
    height: 45px;
    border-radius: 6px;
    padding-left: 15px; 
    border: 0;
    outline: 0;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    color: #363380;
    font-family: 'Arvo', serif;

    ::placeholder {
        color: #363380;
    }

    @media (max-width: 560px){
        width: 300px;
    } 
`;

const UserConfig = styled.div`
    height: 48px;
    width: 48px;
    border-radius: 100%;
    background-color: #FFF;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;

    @media (max-width: 560px){
        margin-top: 10px;
    } 
`;