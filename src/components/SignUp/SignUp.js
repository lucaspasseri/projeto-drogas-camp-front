import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import logo from "../../assets/logo.png"
import AlertModal from '../Modal/AlertModal'

export default function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")    
    const [disabled, setDisabled] = useState(false)
    const [status, setStatus] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const history = useHistory();

    function signUp(e){
        e.preventDefault();
        setDisabled(true);

        const body = {name, email, password, confirmPassword}
        const request = axios.post("http://localhost:4000/sign-up", body)
       
        request.then( () => {
            setStatus(201)
            setIsOpen(true)
        })

        request.catch( (error) => {
            setDisabled(false);
            error.response.status === 400 ? setStatus(400) : setStatus(409)
            setIsOpen(true) 
        })
    }

    return(
        <Body>
            <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} status={status}/>
            <Container>
                <Logo src={logo}/>
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={disabled}
                    />
                    <Button disabled={disabled}>{ !disabled ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={15}/>}</Button>
                </Form>
                <Footer disabled={disabled} onClick={() => history.push('/sign-in')}>Já tem uma conta? Entre agora!</Footer>
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
    @media (min-width: 376px) {
        width: 375px;
    }
`
const Logo = styled.img`
    height: 150px;
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
    border: 0;
    outline: 0;
    color: #363380;

    ::placeholder{
        color: #363380;
    }
    /* :disabled {
        filter: brightness(0.93);
    } */
`
const Button = styled.button`
    height: 58px;
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
    font-family: 'Martel', serif;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    cursor: pointer;
    pointer-events: ${props=> props.disabled? "none": "auto"};
    
`