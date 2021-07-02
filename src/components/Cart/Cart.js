import styled from 'styled-components'
import SelectedItem from './SelectedItem';
import SideBar from './SideBar';
import EmptyCart from './EmptyCart';

import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import logo from "../../assets/logo.png";
import UserContext from "../../contexts/UserContext";

export default function Cart(){
    const {cart} = useContext(UserContext);
    const selected = cart.filter(item => item !== undefined);
    const [products,setProducts] = useState([...selected]);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totals = products.length === 0 ? 0 : products.map( item => item.quantity*item.price/100).reduce(reducer);
    
    return(
        <>
        <Top/>
        <Container>
            { products.length !==0 ? 
            <><Title>
                <BackToItems to="/"><ArrowBackIcon/> Continue comprando</BackToItems>
                <h1>Carrinho de compras</h1>
            </Title>
            <Content>
                <ItemContainer>
                    {selected.map( item => item.quantity===0 ? null :<SelectedItem key={item.id} item={item} products={products} setProducts={setProducts} />)}
                </ItemContainer>
                <SideBar totals={totals} products={products}/>
            </Content></> : 
            <EmptyCart/> 
            }
        </Container>
        </>
    );
}

const Top = styled.div`
    height: 90px;
    background-color: #323264;
`
const Container = styled.div`
    width: 75vw;
    height: 100vh;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 376px) {
        width: 375px;
    }
    
`
const Title = styled.div`

    h1{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 35px;
    }
    @media (max-width: 376px) {
        margin: 0 auto;
    }
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 376px) {
        flex-direction: column;
        align-items: center;
    }
`
const ItemContainer = styled.div`
    width: 65%;
    @media (max-width: 376px) {
        width: 80%;
    }
`
const ArrowBackIcon = styled(IoIosArrowBack)`
    font-size: 20px;
`
const BackToItems = styled(Link)`
    color: #284B9B; 
    text-decoration: none;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`