import styled from 'styled-components'
import InputText from './input-text'
import Separator from './separator'
import {useState, useEffect} from 'react'
import Selector from './elselector'


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

`

function Filters({ repoListCount, setSearch }) {
  const [typeFilter, setTypeFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('');

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
          <div>
            <Selector className='typeFilter'
              title='typeFilter'
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">Select Type</option>
              <option value="Sources">Sources</option>
              <option value="Forks">Forks</option>
              <option value="Archived">Archived</option>
              <option value="Mirror">Mirror</option>
            </Selector>
          </div>
          <div>
            <Selector className='typeLanguage'
              title='languageFilter' 
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}>
              <option value="">Select language</option>
              <option value="all">all</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="javascript">javascript</option>
            </Selector>
          </div>
          <div>
            <Selector className='TypeSort' 
              title='sortFilter' 
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}>
              <option value="">Select Order</option>
              <option value="all">all</option>
              <option value="stars">stars</option>
              <option value="last_updated">Last Updated</option>
              <option value="forks">Forks</option>
            </Selector>
          </div>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  );

}



export default Filters