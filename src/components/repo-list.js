import styled from "styled-components";
import RepoItem from "./repo-Item";

const RepoListStyled = styled.div`
grid-area: repo-list;
background: pink;
`

function RepoList({ repoList}) {
  return (
    <RepoListStyled>
    {repoList.map((item) => {
      return <RepoItem {...item} key={item.id} /> //...item para mandar las propiedades de una sola solicitud
      })}
    </RepoListStyled>
    )
}

export default RepoList;