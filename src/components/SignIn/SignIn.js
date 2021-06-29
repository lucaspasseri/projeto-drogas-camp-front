import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function SignIn(){
    return(
        <Page className="centralized">
           <div>
                <div>
                    <BrandName>DrogasCamp</BrandName>
                    <Subtitle>
                        Uma conta válida,<br></br> 
                        uma lista de produtos<br></br> 
                        e rápidas encomendas!
                    </Subtitle>
                </div>
                <div>
                    <StyledForm>
                        <input placeholder="E - mail"></input>
                        <input placeholder="Password"></input>
                        <button>Entrar</button>
                    </StyledForm> 
                    <StyledLink to="/sign-up">
                        <span>Não possui uma conta?<br></br> Crie agora mesmo!</span>
                    </StyledLink>
                </div>
           </div>
        </Page>
    );
}
const Subtitle = styled.div`
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #FFF;
    text-align: center;
`;

const BrandName = styled.div`
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 84px;
    letter-spacing: 0.05em;
    color: #2F475E;
`;

const StyledLink = styled(Link)`
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    input {
        width: 330px;
        height: 55px;
        border-radius: 6px;
        padding-left: 15px; 
        margin-bottom: 10px;
        border: 0;
        outline: 0;
        font-weight: bold;
        font-size: 22px;
        line-height: 33px;
        color:#2F475E;
        font-family: 'Arvo', serif;

        ::placeholder {
            color:#2F475E;
        }
    }

    button {
        width: 330px;
        height: 55px;
        border-radius: 6px;
        border: 0;
        background: #2F475E;
        color: #FFF;
        font-weight: bold;
        font-size: 22px;
        line-height: 40px;
        font-family: 'Arvo', serif;
    }
`;

const Page = styled.div`
    background-color: #E54225;
    height: 100vh;
    overflow: auto;

    > div{
        > div {
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;