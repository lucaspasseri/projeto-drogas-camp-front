import styled from "styled-components";
import {DebounceInput} from 'react-debounce-input';

export default function SearchBar({bigscreen, value, setValue, filter}){

    return(
        <StyledInput    
            bigscreen={bigscreen}
            minLength={1}
            debounceTimeout={500}
            value={value}
            onChange={event => {
                setValue(event.target.value);
                filter(event.target.value);
            }}
            placeholder="Simplifique sua busca..."
        />
    );
}

const StyledInput = styled(DebounceInput)`
    width: 330px;
    height: 45px;
    border-radius: 6px;
    padding-left: 15px; 
    border: 0;
    outline: 0;
    font-size: 22px;
    line-height: 33px;
    color: #363380;
    font-family: 'Arvo', serif;

    ::placeholder {
        color: #363380;
    }

    @media (max-width: 560px){
        width: 300px;
        display:${props=> props.bigscreen?"none":"block"};
    } 
`;