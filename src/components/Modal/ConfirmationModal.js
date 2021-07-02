import Modal from 'react-modal'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function ConfirmationModal({status, isOpen, setIsOpen}){
    const history = useHistory()
    Modal.setAppElement('.root')
  
    function closeModal(){
        setIsOpen(false)
    }

    function stayOnPage(e){
        e.preventDefault()
        setIsOpen(false)
        if(status === 200){
          history.push('/')
        }
    }
    return( 
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>{status === 200 ? 'Compra realizada com sucesso!' : 'Houve algum problema!'
        }</Title>
        <Form onSubmit={stayOnPage}>
          <Button>Ok</Button>
        </Form>
      </Modal>
    )
}

const customStyles = {
    content: {
      backgroundColor: '#E40017',
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
    color: #fff;
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
      background-color: #480085;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      height: 30px;
      width: 80px;
  `