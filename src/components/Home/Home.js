import {Page} from "../Styles/Components";
import styled from "styled-components";

export default function Home(){
    return(
        <Page>
            <TopBar className="red">
                <Brand>
                    <div><img src="../../assets/logo.png"/></div>
                    <div>DROGAS CAMP</div>
                </Brand>
                <SearchBar></SearchBar>
                <UserConfig></UserConfig>
            </TopBar>
            <Container>GALERY</Container>
        </Page>
    );
}

const TopBar = styled.div`
    height: 80px;
    width: 100vw;
`;

const Container = styled.div`
    background-color: #E5E5E5;
    height: calc(100vh - 80px);
`;

const Brand = styled.div`
    display: flex;
    border: 1px solid black;
    img {
        height: 60px;
    }
`;

const SearchBar = styled.div`
    height: 54px;
    width: 300px;
    background-color: #FFF;
`;

const UserConfig = styled.div``;