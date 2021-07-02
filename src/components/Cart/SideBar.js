import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ConfirmationModal from '../Modal/ConfirmationModal'
import { useState, useContext } from 'react'

import UserContext from "../../contexts/UserContext";

export default function SideBar({totals}) {
    const {user, cart} = useContext(UserContext);
    const selected = cart.filter(item => item !== undefined);
    const [status, setStatus] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const total = totals.toFixed(2).toString().replace(".",",")
    const rewards = (totals*0.01).toFixed(2).toString().replace(".",",")

    function proceedToCheckout(){
        const body ={products: selected, totals}
        const request = axios.post('https://drogas-camp.herokuapp.com/sales',body)
        
        request.then(() => {
            setStatus(200)
            setIsOpen(true)

        }) 
    }
    
    return (
        <OrderSummary> 
            <ConfirmationModal isOpen={isOpen} setIsOpen={setIsOpen} status={status}/>
            <Title>Resumo do pedido</Title>
            <Div>
                <Subtitle>Produtos:</Subtitle>
                <Value>R$ {total}</Value> 
            </Div>
            <Div>
                <Subtitle>Entrega:</Subtitle>
                <Value>Grátis</Value>
            </Div>
            <HorizontalLine/>
            <Div>
                <Subtitle><span>Total:</span></Subtitle>
                <Value>R$ {total}</Value>
            </Div>
            <Button onClick={proceedToCheckout}>Finalizar compra</Button>
            <Rewards>DrogasCamp Rewards:<span> R$ {rewards}</span></Rewards>
        </OrderSummary>
    )
}

const OrderSummary = styled.div`
    width: 30%;
    @media (max-width: 376px) {
        width: 80%;
        margin-bottom: 50px;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const HorizontalLine = styled.div`
    height: 1px;
    margin-bottom: 20px;
    background-color: #c5c5c5;
`
const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
    display: inline-block;
    padding-bottom: 25px;
`
const Subtitle = styled.p`
    span{
        font-weight: 700;
    }
`
const Value = styled.p``
const Button = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 25px;
    border: none;
    background-color: #323264;
    color: #fff;
    font-weight: 700;
`
const Rewards = styled.p`
    font-size: 15px;
    text-align: center;
    span{
        font-weight: 700;
    }
`