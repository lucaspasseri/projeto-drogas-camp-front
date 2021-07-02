import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function AlertModal({status, isOpen, setIsOpen}){
    const history = useHistory()
    Modal.setAppElement('.root')
  
    function closeModal(){
        setIsOpen(false)
    }

    function stayOnPage(e){
        e.preventDefault()
        setIsOpen(false)
        if(status === 201){
          history.push('/sign-in')
        }
    }
    return( 
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>{status === 201 ? 'Dados cadastrados com sucesso!' 
          : status === 409 ? 'O email inserido já possui cadastro na DrogasCamp!' 
          : status===401? "Senha errada." 
          :'Você inseriu dados inválidos!'
        }</Title>
        <Form onSubmit={stayOnPage}>
          <Button>Ok</Button>
        </Form>
      </Modal>
    )
}

const customStyles = {
    overlay:{
      backgroundColor: 'rgba(89,89,88,0.5)'
    },
    content: {
      backgroundColor: '#fff',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      borderRadius: '5px',
      transform: 'translate(-50%, -50%)',
    },
  };
  const Title = styled.h2`
    color: #000;
    font-weight: 700;
    font-size: 15px;
    padding-bottom: 30px;
  `
  const Form = styled.form`
      display: flex;
      justify-content: center;
  `
  const Button = styled.button`
      border-radius: 5px;
      border: none;
      background-color: #323264;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      height: 30px;
      width: 80px;
  `