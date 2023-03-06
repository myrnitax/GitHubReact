import styled from "styled-components";
import props from "./profile-data";
import Button from "./button";
import Icon from "./icon"
// import { ReactComponent as Heart} from "./icon/heart.svg " aqui se hizo directamente el llamado de svg como react component
//import Heart from "./icon/heart"; //se pudo utilizar asi despues del cambio que se hizo en el svg hear (explicacion alli)
// import Branch from "./icon/branch";


const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar {
    border-radius: 50%; //para que este redonda
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth )
  }
  .info{
    /* border: 1px solid red; */
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body-2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }
  .buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }
  /* background-color: yellow; */
`

function Profile() {
  const {twitter_username, blog, name, login, avatar_url, bio, followers, following, location} = props
  return (
  <ProfileStyled>
  <Icon />
  <img src={avatar_url} className="avatar" width="278" height="278" alt=""/>
  <p className="name">{name}</p>
  <p className="username">{login}</p>
  <div className="buttons">
  <Button 
    text="Follow"
    link="#"
  />
  <Button 
    text="Sponsor"
    icon={<Icon
      name="heart" 
      size={24}
      color= "var(--pink)"
    />}
  />
  {/* <button>follow</button>
  <button>sponsor</button> */}
  </div>
  <p className="info bio">
    {bio}
  </p>
  <p className="info followers">
  · {followers} <span>followers</span><span><span> · </span> {following} </span><span>following</span>
  </p>  
  {/* <p className="info stars">
  · 81
  </p> */}
  <p className="info location">
  · {location}
  </p>
  <a className="info" href="https://www.linkedin.com/in/malvaradoalburua" target="_blank" rel="noreferrer">
  {blog}
  </a>
  <a className="info" href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
  @{twitter_username}
  </a>
  </ProfileStyled>);
}

export default Profile;
