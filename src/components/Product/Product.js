import styled from "styled-components";
import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/UserContext";

export default function Product({id, product, setList, list}){

    const { setUser, setCart, cart} = useContext(UserContext);
    const [selected, setSelected] = useState(false);
    const [units, setUnits] = useState(0);


    useEffect(() => {
        if (localStorage.user) {
          const userStorage = JSON.parse(localStorage.user);
          setUser(userStorage);
        } 
        if(!!cart[id] && cart[id].quantity>0){
            setSelected(true);
            setUnits(cart[id]?.quantity);
        }
    }, [cart, id, setUser]);

    function selectProduct(){
        if(selected){
            setSelected(false);
            setUnits(0);
            list[id] = {
                productId: id,
                price: product.price,
                name: product.name,
                image: product.image,
                description: product.description,
                quantity: 0
            };
            setList([...list]);
            setCart([...list]);
        } else {
            setSelected(true);
            setUnits(1);
            list[id] = {
                productId : id,
                price: product.price,
                name: product.name,
                image: product.image,
                description: product.description,
                quantity: 1
            };
            setList([...list]);
            setCart([...list]);
        }
    }

    function quantityChanged(event){
        setUnits(Number(event.target.value));
        list[id]={
            productId: id,
            price: product.price,
            name: product.name,
            image: product.image,
            description: product.description,
            quantity: Number(event.target.value)
        };
        setList([...list]);
        setCart([...list]);
    }

    return(
        <Card selected={selected?true:undefined} onClick={selectProduct}>
            <Image url={product? product.image : ""}/>
            <Infos selected={selected?true:undefined}>
                <div className="description">{`${product.name} - ${product.description}`}</div>
                <div className="values">
                    <div>{`R$ ${(product.price/100).toFixed(2).replace('.', ',')}`}</div>
                    <div onClick={event=> event.stopPropagation()}>
                        <span>Qtd:</span>
                        <input
                            value={units}
                            onChange={quantityChanged}
                            type="number"
                            step="1" 
                            min="0"
                        ></input>
                    </div>
                </div>
            </Infos>
        </Card>
    );
}

const Card = styled.div`
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 320px;
    padding: 10px;
    margin: 0 0 10px 10px;
    border-radius: 6px; 
    box-shadow: ${props => props.selected?"0px 0px 0px 4px #7dff49": "none"};
`;

const Image = styled.div`
    height: 200px;
    background: ${props => `url('${props.url}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-clip: content-box;
    flex-shrink: 0;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .description {
        height: 60%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        margin-top: 18px;
    }

    .values {
        height: 40%;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        align-self: center;

        > div:first-of-type {
            font-weight: bold;
        }

        > div:last-of-type {
            display: ${props => props.selected?"block":"none"};
        } 
    }

    input {
        width: 60px;
    }
`;