import styled from 'styled-components'
import Language from './language'
import Icon from './icon'

const RepoItemStyled = styled.div`
padding-block: 1rem;
display: flex;
gap: 1rem;
flex-direction: column;
border-block-end: 1px solid var(--grey);
&:last-child{
    border-block-end: none;
}
.title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a{
        color: var(--primary);
        text-decoration: none;
    }
}
.public {
    border: 1px solid var(--grey);
    padding-inline: .5rem;
    padding-block: .125rem;
    font: var(--caption-regular);
    border-radius: 0.5rem;
}
.descripcion {
    margin: 0;
    font: var(--body2-regular);
}
.topicList{
    display: flex;
    gap: .25rem;
}
.topicItem{
    color: var(--primary);
    font: var(--caption-medium);
    background: #15223A;
    padding-inline: .75rem;
    padding-block: .25rem;
    border-radius: 2rem;
}
.details{
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
}
.details-item{
    display: flex;
    gap: .5rem;
    align-items: center;
    color: var(--grey-1);
    & span::first-letter { //para que la palabra updated de el span tenga la primera letra mayuscula
        text-transform: uppercase;
    }
}
`


function RepoItem(props) {
    const updatedAt = new Date(props.updated_at) //convirtiendo la fecha en dias restantes hasya hoy
    const today = new Date() //fecha de hoy
    const diffMilliseconds = updatedAt - today //convirtiendo hoy menos fecha updatedAt (hasta donde fue actualizado)
    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24)) //convirtiendo ese tiempo en dia. Redondeando con Math.ceil
    const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days');
    return (
        <RepoItemStyled>
        <h3 className='title'>
        <a href={props.html_url}>
        {props.name}
        </a>
        {
            !props.private ? 
            (<span className='public'>Public</span>
            ):null //se uso expresion ?'':'' para que devuelva o no un dato
        }
        </h3> 
        {/* la idea es que el titulo y la propiedad private queden en la misma 
        linea por eso se le coloco una sola clase */}
        {
            props.description ? 
            (<p className='description'>
            {props.description}
            </p>
            ) : null 
            //se colocó props.description dentro de a para
            //poder colocar las propiedades dentro del parrafo sin dañar el resto de la estructuta 
        }
        {
            props.topics.length ? 
            (<div className='topicList'>
            {
                props.topics.map (item => <span className='topicItem'>{item}</span>)
            }
            </div>
            ):null
        }
        {
            <div className='details'>
                {
                props.language ? 
                (<Language name={props.language}/>
                ):null
                }
                <span className='details-item'>
                    <Icon name="star" />
                    <span>{props.stargazers_count}</span>
                </span>
                <span className='details-item'>
                    <Icon name="branch" />
                    <span>{props.forks_count}</span>
                </span>
                <span className='details-item'>
                    <span>{timeAgo}</span> 
                </span>
            </div>
        }
        </RepoItemStyled>
    )
}

export default RepoItem

// const diffMilliseconds = today - updatedAt sirve para el comentado abajo como ejemplo:
//otra manera de hacer esto usando la formula de arriba: <span>Hace {diffDays} días</span>
