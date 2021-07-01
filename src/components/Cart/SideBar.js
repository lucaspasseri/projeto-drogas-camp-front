import styled from 'styled-components'

export default function SideBar() {
    return (
        <OrderSummary> 
            <Title>Resumo do pedido</Title>
            <Div>
                <Subtitle>Produtos:</Subtitle>
                <Value>R$ 150,00</Value> 
            </Div>
            <Div>
                <Subtitle>Entrega:</Subtitle>
                <Value>Grátis</Value>
            </Div>
            <HorizontalLine/>
            <Div>
                <Subtitle>Total</Subtitle>
                <Value>R$ 150,00</Value>
            </Div>
            <Button>Finalizar compra</Button>
            <Rewards>DrogasCamp Rewards:<span> R$ 1,50</span></Rewards>
        </OrderSummary>
    )
}

const OrderSummary = styled.div`
    width: 30%;
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
const Subtitle = styled.p``
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