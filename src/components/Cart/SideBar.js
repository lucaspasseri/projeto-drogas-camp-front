import styled from 'styled-components'

export default function SideBar() {
    return (
        <OrderSummary> 
            <h2>Resumo do pedido</h2>
            <div>
                
            </div>
        </OrderSummary>
    )
}

const OrderSummary = styled.div`
    width: 30%;

    h2{
        font-size: 20px;
        font-weight: 700;
    }
`