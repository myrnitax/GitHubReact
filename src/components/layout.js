import styled from 'styled-components'

const LayoutStyled = styled.main`
min-block-size: 100vh;
margin: auto;
padding-inline: 20px;
max-inline-size: 75rem; // 1200px/16=75rem
padding-block: 2.5rem;
@media screen  and (min-width: 768px) {
    display: grid; //coloca los elementos uno sobre otro al achicar la vista de la pantalla
    /* border: 10px solid red; */
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas:"profile filters" "profile repo-list";
    
}
`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
