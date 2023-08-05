import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="content-container">
        <div className="domain-logo-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
