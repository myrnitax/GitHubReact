import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
background: var(--buttonBG);
color: var(--white);
border: 1px solid var(--grey-1);
min-inline-size: 135px; //tamaño minimo del boton para que se tome todo el componente entre los 2 botones
gap: .5rem;
display: inline-flex; //para que este alineado como elemento flexible en la misma linea
align-items: center; //centrado en altura
font: var(--button);
justify-content:center; //centrado dentro del boton
cursor: pointer;
border-radius: 0.5rem; //bordes redondeados
padding-block: .25rem; //margen de arriba
text-decoration: none !important;
&:hover {
    background: var(--white);
    color: var(--button);
    text-decoration: none;
}
`


function Button({text, link, className, icon}) {
    const component = link ? "a" : "button"
    let IconComponent = null
    if (icon) {
        if (isValidElement(icon)){
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className= {className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background: var(--white);
    color: var(--buttonBG);
    &:hover{
        background: var(--buttonBG);
        color: var(--white);
    }
`
export const ButtonRounded = styled(Button)`
    min-inline-size: initial;
    border-radius: 50%;
    padding: 0.75rem;
    border: 2px solid var(--grey-1);
    &:hover{
        background: var(--buttonBG);
        transform: scale(1.1);
    }
`

export default Button
