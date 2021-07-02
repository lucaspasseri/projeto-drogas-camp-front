import styled from 'styled-components'
import SelectedItem from './SelectedItem';
import SideBar from './SideBar';
import EmptyCart from './EmptyCart';

import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart(){
    
    const items = [
        {
            id: 1, name: 'Coca-Cola Soda, Fridge Pack', description: '350ml', price: 3500, inStock: 15, image: 'https://pics.drugstore.com/prodimg/416805/220.jpg', quantity: 0
        },
        {
            id: 2, name: 'Covid-19 test', description: 'the best', price: 1500, inStock: 15, image: 'https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2021/03/shutterstock_1656883729-1.jpg', quantity: 0
        },
        {
            id: 3, name: 'Covid-19 test', description: 'the best', price: 1500, inStock: 15, image: 'https://www.medicaldevice-network.com/wp-content/uploads/sites/11/2021/03/shutterstock_1656883729-1.jpg', quantity: 0
        }
    ]
    const [products,setProducts] = useState(items)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totals = products.map( item => item.quantity*item.price/100).reduce(reducer);
    
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
                    {items.map( item => <SelectedItem key={item.id} item={item} products={products} setProducts={setProducts} />)}
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