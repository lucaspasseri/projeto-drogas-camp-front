import { useHistory } from "react-router-dom";
import { useState, useContext, useEffect  } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import {Page, BrandName, Subtitle, StyledForm, StyledLink} from "../Styles/Components";

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
            request.then(() => {
                history.push("/");
            });
            request.catch(e => alert(e.response.data));

            setLoading(false);
        } else {

            alert("Campo(s) incorreto(s) ou em branco.");
        }
    }

    return(
        <Page className="centralized red">
           <div>
                <div>   
                    <BrandName>DrogasCamp<img alt="drogas_camp_logo" src="../../assets/logo.png"/></BrandName>
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
                    <StyledLink to="/sign-up" loading={loading? "true": undefined}>
                        <span>Não possui uma conta?<br></br> Crie agora mesmo!</span>
                    </StyledLink>
                </div>
           </div>
        </Page>
    );
}