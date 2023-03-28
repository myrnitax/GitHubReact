import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* background: pink; */
`

function RepoList({ repoList, search, sortFilter, languageFilter, typeFilter }) { //aqui se agregaron los props de los filtros y tambien se llevaron al componente repo-list
  let list = repoList
  if (search !== '') {
    list = list.filter((item) => {
      return item.name.toLowerCase().search(search.toLowerCase()) >= 0
    })
  }
  if (languageFilter) {
    list = list.filter((item) => {
      console.log(item);
      
      return item?.language?.toLowerCase() === languageFilter.toLowerCase()
    })
  }
  if (typeFilter) { // mirror_url | archived | fork
    // list = [{language: 'Ruby', name: 'Algo', fork: false, mirror_url: '', archived: true}, {language: 'Ruby', name: 'Algo', fork: false, mirror_url: '', archived: true}, {language: 'Ruby', name: 'Algo', fork: false, mirror_url: '', archived: true}]
    list = list.filter((item) => {
      // item['fork'] === true
      // item['mirror_url'] !== ''\
      // item['archive'] === true
      return item[typeFilter.toLowerCase()] // tiene una valor entonces true
    })
  }
  if (sortFilter) {
    list = list.sort((itemA, itemB) => {      
      if (sortFilter.toLowerCase() === 'updated_at') {
        return new Date(itemB[sortFilter.toLowerCase()]) - new Date(itemA[sortFilter.toLowerCase()]);
      }
      return itemB[sortFilter.toLowerCase()] - itemA[sortFilter.toLowerCase()]
    })
  }
  return (
    <RepoListStyled>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />
      })}
    </RepoListStyled>
  )
}

export default RepoList
