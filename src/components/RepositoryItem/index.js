// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, avatarUrl} = repositoryDetails
  const {starsCount, forksCount, issuesCount} = props
  return (
    <li className="repository-item">
      <img className="repo=image" src={avatarUrl} alt={name} />
      <h1 className="repo-heading">{name}</h1>
      <div className="count-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="count-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="count-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
