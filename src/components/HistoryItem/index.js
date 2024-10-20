import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItemFromList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const deleteItem = () => {
    deleteItemFromList(id)
  }

  return (
    <li className="list-item">
      <div className="domain-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="domain-sub-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          data-testid="delete"
          type="button"
          className="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
