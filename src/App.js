import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/Search";

const repoList = [
  {
  name: "Mi primer proyecto con React",
  id: 111,
},
{
  name: "Mi segundo proyecto con React",
  id: 112,
}
]

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoList}/>
      <Search />
    </Layout>
  );
}

export default App;
