import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './overlay'
import styled  from 'styled-components'
import {ButtonContrast} from './components/button'
import InputText from './components/input-text'

const ModalContentStyled = styled.form`
position: fixed;
inset-block-start: 50%;
transform: translateY(-50%);
inset-inline-start: 50%;
transform: translateX(-50%);
background: var(--bg);
color: var(--white);
padding: 1.5rem;
border-radius: 0.5rem;
display: flex;
flex-direction: column;
gap: 1rem;
inline-size: 24rem;
.title{
  font: var(--headline2-semibold);
  margin: 0;
}
`

function ModalContent() {
  const form = useRef(null)
  const navigator = useNavigate()
  console.log({ form })

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ form })

    const formData = new FormData(form.current)
    console.log(formData.get('username'))
    navigator(`/${formData.get('username')}`)

  }
  return (
    <Overlay>
    <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
      <h2 className='title'>Find an user here:</h2>
      <InputText type="text" autoComplete='off' name="username" placeholder="Username" />
      <ButtonContrast text='Buscar'/>
    </ModalContentStyled>
    </Overlay>
  )
}

export default ModalContent
