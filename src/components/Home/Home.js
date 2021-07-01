import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";

import {FaUser} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { ImForward } from "react-icons/im";
import logo from "../../assets/logo.png"
import {Page} from "../Styles/Components";
import UserContext from "../../contexts/UserContext";

import Product from "../Product/Product";

export default function Home(){
    
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [counterSelectedProducts, setCounterSelectedProducts] = useState([]);

    const { setUser, setCart, cart } = useContext(UserContext);

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
        const url = "http://localhost:4000/products"
        const request = axios.get(url);
        request.then(response => setProducts(response.data));
        request.catch(error => console.log(error));
    }

    const productsList = products.map((product, i) => {
        return <Product 
                    key={i}
                    id={product.id} 
                    product={product}
                    counter={counterSelectedProducts} 
                    setCounter={setCounterSelectedProducts}/>
        ;
    });

    function getTotal(lista){
        let total = 0;
        if(lista.length>0){
            for(let i = 0; i< lista.length; i++){
                if(lista[i]!==undefined){
                    total+=Number(lista[i]);
                }
            }
        }
        return total;
    }

    function goToCart(){
        console.log(counterSelectedProducts);
        const cleanProducts = counterSelectedProducts.slice(1, counterSelectedProducts.length);
        console.log(cleanProducts);
        console.log(cart);
        setCart([...counterSelectedProducts]);
        console.log(cart);
        history.push("/cart");
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
            <Container model={products.length===0?true:undefined}>
                <div>
                    <h1>Escolha o(s) produto(s) de interesse e a quantidade desejada:</h1>
                    <Cart onClick={goToCart} noProducts={getTotal(counterSelectedProducts)===0?true:undefined}>
                        <ImForward className="icon" size="32" fill="#7dff49"/>
                        <TiShoppingCart className="icon" size="40" fill="#7dff49"/>
                        <div>
                            {counterSelectedProducts.length>0?
                                getTotal(counterSelectedProducts) :
                                0
                            }
                        </div>
                    </Cart>
                </div>
                
                <div>
                    {products.length === 0 ?
                        "Nenhum produto cadastrado." :
                        productsList
                    } 
                </div>
            </Container>
        </Page>
    );  
} 

const Cart = styled.div`
    display: ${props => props.noProducts?"none":"flex"};
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 8px;
    background-color: #fff;
    padding: 2px 6px;

    > div {
        font-size: 20px;
        height: 26px;
        min-width: 26px;
        border-radius:100%;
        background-color: #E5E5E5;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 500px){
        margin-left: 0;
    }
`;

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
    padding: 30px;
    padding-top: 110px;

    h1 {
        font-weight: bold;
        font-size: 20px;
    }

    >div:first-of-type {
        display:flex;
        justify-content:space-between;
        margin-bottom: 10px;
        height:40px;

    }
    
    > div:last-of-type {
        min-height: Calc(100vh - 190px);
        height: 100%;
        width: 100%;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        justify-content: ${props => props.model?"center": "none"};
        align-items: ${props => props.model?"center": "none"};
        flex-wrap: wrap;
        padding: 20px 10px 10px 10px;
    }

    @media (max-width: 560px){
        padding-top: 180px;

        > div:last-of-type{
            min-height: Calc(100vh - 260px);
        }
    }

    @media (max-width:500px){
        h1 {
            display: none;
        }
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