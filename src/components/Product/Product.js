import styled from "styled-components";
import { useState } from "react";

export default function Product({id, product, setList, list}){

    const [selected, setSelected] = useState(false);
    const [units, setUnits] = useState(0);

    function selectProduct(){
        if(selected){
            setSelected(false);
            setUnits(0);
            //counter[id]=0;
            list[id] = {
                productId: id,
                quantity: 0
            };
            //setCounter([...counter]);
            setList([...list]);
        } else {
            setSelected(true);
            setUnits(1);
            //counter[id]=1;
            list[id] = {
                productId : id,
                quantity: 1
            };
            //setCounter([...counter]);
            setList([...list]);
        }
    }

    function quantityChanged(event){
        setUnits(Number(event.target.value));
        //counter[id]=event.target.value;
        list[id]={
            productId: id,
            quantity: Number(event.target.value)
        };
        //setCounter([...counter]);
        setList([...list]);
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