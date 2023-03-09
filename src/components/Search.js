import styled from "styled-components";
import { ButtonRounded } from './button'
import Icon from './icon'

const SearchStyled = styled.div`
position: fixed;
bottom: 0;
inset-inline-start: 1rem;
inset-block: 1.5 rem;
`

function Search({ setModal }) {
  function handleClick() {
    setModal(true)
  }
  return (
  <SearchStyled onClick={handleClick}>
    <ButtonRounded icon={<Icon name="search" size={24}/>}/>
  </SearchStyled>);
}

export default Search;
