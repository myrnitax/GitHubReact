import styled from 'styled-components'
import InputText from './input-text'
import Separator from './separator'
import {useState, useEffect} from 'react'


const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
    align-items: center;
  }
  .typeFilter, .typeLanguage, .TypeSort {
    border: none;
  background: var(--button-bg);
  color: var(--white);
  padding-inline: 1rem;
  }
`

function Filters({ repoListCount, setSearch, setLanguageFilter, setTypeFilter, setSortFilter }) {

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <FiltersStyled>
      <h2 className="count">
        Repositorios {repoListCount}
      </h2>
      <div className="action-list">
        <InputText
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">
            <select className='typeFilter'
              title='typeFilter'
              onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">Select Type</option>
              <option value="Forks">Forks</option>
              <option value="Archived">Archived</option>
              <option value="mirror_url">Mirror</option>
            </select>
          
            <select className='typeLanguage'
              title='languageFilter' 
              onChange={(e) => setLanguageFilter(e.target.value)}>
              <option value="">Select language</option>
              <option value="all">all</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="javascript">javascript</option>
            </select>
          
            <select className='TypeSort' 
              title='sortFilter' 
              onChange={(e) => setSortFilter(e.target.value)}>
              <option value="">Select Order</option>
              <option value="all">all</option>
              <option value="stargazers_count">stars</option> */esto se saco del api: "stargazers_count" /*
              <option value="updated_at">Last Updated</option> * /esto se saco del api: "updated_at" /*
              <option value="forks_count">Forks</option>
            </select>          
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  );

}



export default Filters