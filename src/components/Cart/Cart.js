import styled from 'styled-components'
import SelectedItem from './SelectedItem';
import SideBar from './SideBar';
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { Page } from '../Styles/Components';
export default function Cart(){
    return(
        <Container>
            <Title>
                <BackToItems to="/"> <ArrowBackIcon/> Continue comprando</BackToItems>
                <h1>Carrinho de compras</h1>
            </Title>
            <Content>
                <ItemContainer>
                    <SelectedItem/>
                    <SelectedItem/>
                </ItemContainer>
                <SideBar/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 75vw;
    height: 100vh;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    h1{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 35px;
    }
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
`
const ItemContainer = styled.div`
    width: 65%;
`
const ArrowBackIcon = styled(IoIosArrowBack)`
    font-size: 20px;
`
const BackToItems = styled(Link)`
    color: #284B9B; 
    text-decoration: none;
    display: inline-block;
    margin-bottom: 15px;
`