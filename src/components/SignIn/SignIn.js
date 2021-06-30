import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect  } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";

export default function SignIn(){

    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.user) {
          const userStorage = JSON.parse(localStorage.user);
          setUser(userStorage);
          history.push("/");
        }
    });

    function userLogin(event){
        event.preventDefault();

        const validEmail = email.trim().length > 2;
        const validPassword = password.trim().length > 2;

        if(validEmail && validPassword) {
            setLoading(true);

            const url = "http://localhost:4000/sign-in";
            const body = {
                email,
                password
            };

            const request = axios.post(url, body);
            request.then(response => console.log(response.data));
            request.catch(e => console.log(e.response));

            setLoading(false);
        } else {
            alert("Campo(s) incorreto(s) ou em branco.");
        }
    }

    return(
        <Page className="centralized">
           <div>
                <div>   
                    <BrandName>DrogasCamp<img src="../../assets/logo.png"/></BrandName>
                    <Subtitle>
                        Uma conta válida,<br></br> 
                        uma lista de produtos<br></br> 
                        e rápidas encomendas!
                    </Subtitle>
                </div>
                <div>
                    <StyledForm onSubmit={userLogin}>
                        <input 
                            disabled={loading}
                            placeholder="E - mail"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            type="email"
                            required
                        ></input>
                        <input
                            disabled={loading} 
                            placeholder="Password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            type="password"
                            required
                        ></input>
                        <button
                            type="submit"
                            disabled={loading}
                        >{loading? "Entrando...": "Entrar"}</button>
                    </StyledForm> 
                    <StyledLink to="/sign-up" loading={loading}>
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

    @media (min-width: 760px) {
        font-size: 36px;    
    }
`;

const BrandName = styled.div`
    font-family: 'Martel', serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 84px;
    letter-spacing: 0.05em;
    color: #2F475E;

    img {
        height: 60px;
    }

    @media (max-width: 330px) {
        font-size: 44px;    
    }
    @media (min-width: 760px) {
        font-size: 70px;    
    }
`;

const StyledLink = styled(Link)`
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    text-decoration: none;
    pointer-events: ${props=> props.loading? "none": "auto"};
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    :disabled {
        filter: brightness(0.93);
    }
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

    @media (max-width: 330px) {
        input {
            width: 300px;
        }

        button {
            width: 300px;
        }
    }

    @media (min-width: 760px) {
        input {
            width: 360px;
        }

        button {
            width: 360px;
        }    
    }
`;

const Page = styled.div`
    background-color: #B03019;
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