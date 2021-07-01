import axios from 'axios'
import styled from 'styled-components'
import {IoIosRemoveCircle} from 'react-icons/io'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useState } from 'react'

export default function SelectedItem({item}) {
    const [qtd, setQtd] = useState(0)

    function incrementOrDecrement(param){
        const request = axios.post(`http://localhost:4000/products/2/${param}`)
        param === 'increment' ? setQtd(qtd+1) : setQtd(qtd-1) 
    }

    return(
        <Item>
            <Hold>
                <Img src="https://pics.drugstore.com/prodimg/416805/220.jpg"/>
                <Text>
                    <Title>Coca-Cola Soda, Fridge Pack</Title>
                    <Description>40ml</Description>
                    <UnitPrice>Valor unitário: R$ 35,00</UnitPrice> 
                </Text>
            </Hold>
            <Order>
                <Remove>Remover</Remove>
                <ContainerQuantity>
                    <RemoveIcon onClick={() => incrementOrDecrement('decrement')} none={qtd}/>
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
    height: 170px;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    margin-bottom: 20px;
`
const Hold = styled.div`
    display: flex;
`
const Img = styled.img`
    height: 120px;
    width: 120px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`
const Title = styled.p`
    color: #284B9B;
    font-weight: 700;
    padding-bottom: 15px;
`
const Description = styled.p`
    color: #c5c5c5;
    font-weight: 700;
    font-size: 15px;
    padding-bottom: 15px;
`
const UnitPrice = styled.p`
    color: #c5c5c5;
    font-weight: 700;
    font-size: 15px;
`
const Order = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const RemoveIcon = styled(IoIosRemoveCircle)`
    color: ${props => props.none !== 0 ? '#323264' : '#D9DADA'};
    font-size: 40px;
    cursor: pointer;
    pointer-events: ${props=> props.none === 0? "none": "auto"};
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
    font-weight: 700;
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