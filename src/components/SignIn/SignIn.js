import { useHistory } from "react-router-dom";
import { useState, useContext, useEffect  } from "react";
import axios from "axios";
import AlertModal from '../Modal/AlertModal'
import Loader from 'react-loader-spinner'

import UserContext from "../../contexts/UserContext";
import {Page, Brand, Subtitle, StyledForm, StyledLink} from "../Styles/Components";

export default function SignIn(){

    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(0);

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
            request.then((response) => {
                console.log(response.data);
                setUser(response.data);
                localStorage.setItem("user", JSON.stringify({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.token
                }));
                history.push("/");
            });
            request.catch(e =>{
                setStatus(e.response.status)
                setIsOpen(true)
                console.log(e.response.status)
            });

            setLoading(false);
        } else {

            alert("Campo(s) incorreto(s) ou em branco.");
        }
    }

    return(
        <Page className="sign-in red">
        <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} status={status}/>
           <div>
                <div>   
                    <Brand>
                        <div>DrogasCamp</div>
                        <img alt="drogas_camp_logo" src="../../assets/logo.png"/>
                    </Brand>
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
                            placeholder="E-mail"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            type="email"
                            required
                        ></input>
                        <input
                            disabled={loading} 
                            placeholder="Senha"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            type="password"
                            required
                        ></input>
                        <button
                            type="submit"
                            disabled={loading}
                        >{loading? <Loader type="ThreeDots" color="#FFF" height={15}/>: "Entrar"}</button>
                    </StyledForm> 
                    <StyledLink to="/sign-up" loading={loading? true: undefined}>
                        <span>Não possui uma conta?<br></br> Crie agora mesmo!</span>
                    </StyledLink>
                </div>
           </div>
        </Page>
    );
}