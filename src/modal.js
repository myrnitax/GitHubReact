import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './overlay'
import styled from 'styled-components'
import { ButtonContrast } from './components/button'
import InputText from './components/input-text'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('portal')
class ModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentWillUnmount() { //este hace que el modal desaparezca luego de que todo se renderiza
    modalRoot.removeChild(this.el)
  }
  componentDidMount() { //esto solo llama cuando ya se renderio por primera vez
    modalRoot.appendChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el)//this.props.children va a ser renderizada por la proposicion ModalPortal que es la clase
  }
}

export default function Modal({ isActive, setModal}) {
  if (isActive){
    return(
      <ModalPortal>
        <ModalContent setModal={setModal}/>
      </ModalPortal>
    )
  }
  return null
}

const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: .5rem;
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  inset-inline-start: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 24rem;
  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`

function ModalContent({ setModal }) {
  const form = useRef(null)
  const navigator = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(form.current)
    navigator(`/${formData.get('username')}`)
    setModal(false)

  }
  return (
    <Overlay>


      <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
        <h2 className='title'>Busca a tu usuario favorito</h2>
        <InputText type="text" autoComplete='off' name="username" placeholder="Username" />
        <ButtonContrast text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  )
}


