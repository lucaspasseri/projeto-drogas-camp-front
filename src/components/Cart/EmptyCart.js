import { useHistory } from 'react-router'
import styled from 'styled-components'

export default function EmptyCart(){
    const history = useHistory()

    return(
        <Container>
        <Title>Seu Carrinho está vazio</Title>
        <Button onClick={() => history.push('/')}>Continue comprando</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h2`
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    padding: 35px 0;
`
const Button = styled.button`
    width: 30%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 25px;
    border: none;
    background-color: #323264;
    color: #fff;
    font-weight: 700;
`