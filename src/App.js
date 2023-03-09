import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom'
import Modal from './modal'

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'myrnitax'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false) //configurando el boton seach para que inicie el modal
  const [search, setSearch] = useState(' ') //configurando el boton seach para que inicie el modal
  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [username])
  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} repoListCount={repos.length} />
      <RepoList search={search} repoList={repos} />
      <Search setModal={setModal} />
    </Layout>
  )

}

export default App;