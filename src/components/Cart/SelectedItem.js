import axios from 'axios'
import styled from 'styled-components'
import {IoIosRemoveCircle} from 'react-icons/io'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useState, useContext } from 'react'
import UserContext from "../../contexts/UserContext";

export default function SelectedItem({i, item, setProducts, products}) {
    const {cart, setCart} = useContext(UserContext);
    const [productQuantity, setProductQuantity] = useState(item.quantity)
    const price = (item.price/100).toFixed(2).toString().replace(".",",")
    const totalValue = (productQuantity*item.price/100).toFixed(2).toString().replace(".",",")
    
    function addOrRemove(param){
        if(param === 'add') {
            setProductQuantity(productQuantity+1)
            item.quantity = productQuantity + 1
            products[i] = item
            setProducts([...products])
        } else if(param === 'remove'){
            setProductQuantity(productQuantity-1)
            item.quantity = productQuantity - 1
            products[i] = item
            setProducts([...products])
        }   
    }

    function removeProduct() {
        products.splice(i,1)
        setCart([...products])
    }
    
    return(
        <Item>
            <Hold>
                <Img src={item.image}/>
                <Text>
                    <Title>{item.name}</Title>
                    <Description>{item.description}</Description>
                    <UnitPrice>Valor unitário: R$ {price}</UnitPrice> 
                </Text>
            </Hold>
            <Order>
                <Remove onClick={removeProduct}>Remover</Remove>
                <ContainerQuantity>
                    <RemoveIcon onClick={() => addOrRemove('remove')} none={productQuantity}/>
                    <Quantity>
                        {productQuantity}
                    </Quantity>
                    <AddIcon onClick={() => addOrRemove('add')}/>
                </ContainerQuantity>
                <Price>R$ {totalValue}</Price>
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
    @media (max-width: 376px) {
        font-size: 15px;
        flex-direction: column;
        padding: 10px 10px;;
    }

`
const Hold = styled.div`
    display: flex;
`
const Img = styled.img`
    height: 120px;
    width: 120px;
    @media (max-width: 376px) {
        height: 75px;
        width: 75px;
    }
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
    @media (max-width: 376px) {
        flex-direction: row;
        height: 15%;
        align-items: center;
    }
`
const RemoveIcon = styled(IoIosRemoveCircle)`
    color: ${props => props.none !== 1 ? '#323264' : '#D9DADA'};
    font-size: 40px;
    cursor: pointer;
    pointer-events: ${props=> props.none === 1? "none": "auto"};
    @media (max-width: 376px) {
        font-size: 25px;
    }
`
const AddIcon = styled(AiFillPlusCircle)`
    color: #323264;
    font-size: 40px;
    cursor: pointer;
    @media (max-width: 376px) {
        font-size: 25px;
    }
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
    @media (max-width: 376px) {
        width: 25px;
        height: 25px;
    }
`
const ContainerQuantity = styled.div`
    display:flex;
`
const Price = styled.p`
    text-align: right;
    color: red;
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 376px) {
        font-size: 15px;
    }
`
const Remove = styled.p`
    text-align: right;
    color: #284B9B;
    cursor: pointer;
    font-size: 15px;
`