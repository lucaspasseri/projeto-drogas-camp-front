import axios from 'axios'
import styled from 'styled-components'
import {IoIosRemoveCircle} from 'react-icons/io'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useState } from 'react'

export default function SelectedItem() {
    const [qtd, setQtd] = useState(0)

    function incrementOrDecrement(param){
        console.log("oi")
        const request = axios.post(`http://localhost:4000/products/2/${param}`)
    }

    return(
        <Item>
            <Img src="https://pics.drugstore.com/prodimg/416805/220.jpg"/>
            <Title>
                Coca-Cola Soda, Fridge Pack 
            </Title>
            <Order>
                <Remove>Remove</Remove>
                <ContainerQuantity>
                    <RemoveIcon onClick={() => incrementOrDecrement('decrement')}/>
                    <Quantity>
                        {qtd}
                    </Quantity>
                    <AddIcon onClick={() => incrementOrDecrement('increment')}/>
                </ContainerQuantity>
                <Price>R$ 35,00</Price>
            </Order>
        </Item>
    )
}

const Item = styled.div`
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    width: 100%;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    margin-bottom: 20px;

`
const Img = styled.img`
    height: 120px;
    width: 120px;
`
const Title = styled.div`
    color: #284B9B;
    font-weight: 700;
    align-self: flex-start;
`
const Order = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const RemoveIcon = styled(IoIosRemoveCircle)`
    color: #D9DADA;
    font-size: 40px;
    cursor: pointer;
`
const AddIcon = styled(AiFillPlusCircle)`
    color: #323264;
    font-size: 40px;
    cursor: pointer;
`
const Quantity = styled.div`
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`
const ContainerQuantity = styled.div`
    display:flex;

`
const Price = styled.p`
    text-align: right;
    color: red;
    font-weight: 700;
    font-size: 20px;
`
const Remove = styled.p`
    text-align: right;
    color: #284B9B;
    cursor: pointer;
    font-size: 15px;
`