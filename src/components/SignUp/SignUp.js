import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import logotipo from "../../img/logotipo.png";

export default function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")    
    const [disabled, setDisabled] = useState(false)
    const history = useHistory();

    function signUp(e){
        e.preventDefault();
        setDisabled(true);

        const body = {name, email, password, repeatPassword}
        const request = axios.post("http://localhost:4000/sign-up", body)
        console.log(body)        
        request.then( () => {
            //setIsOpen(true)
        })

        request.catch( (error) => {
            setDisabled(false);
            //error.response.status === 400 ? setStatus(400) : setStatus(409)
            //setIsOpen(true) 
        })
    }

    return(
        <Body>
            <Container>
                <Logo src={logotipo}/>
                <Form onSubmit={signUp}>
                    <Input 
                        placeholder="Nome" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={disabled}
                    />
                    <Input 
                        placeholder="E-mail" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={disabled}
                    />
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={disabled}
                    />
                    <Input 
                        placeholder="Confirme a senha" 
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                        disabled={disabled}
                    />
                    <Button disabled={disabled}>Cadastrar</Button>
                </Form>
                <Footer onClick={() => history.push('/sign-in')}>Já tem uma conta? Entre agora!</Footer>
            </Container>
        </Body>
    );
}

const Body = styled.div`
    background-color: #E40017;
    width: 100vw;
    height: 100vh;
`
const Container = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
    width: 90vw;
`
const Logo = styled.img`
    height: 190px;
    width: 200px;
`
const Header = styled.p`
    font-size: 30px;
    text-align: center;
    color: #fff;
    margin-bottom: 25px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    height: 58px;
    padding: 14px;
    font-size: 20px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    ::placeholder{
        color: #000;
        opacity: 0.8;
        font-size: 20px;
    }
`
const Button = styled.button`
    height: 46px;
    margin-bottom: 32px;
    background-color: #480085;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`
const Footer = styled.a`
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
`