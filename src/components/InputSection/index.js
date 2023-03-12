import './index.css'

const InputSection = props => {
  const {itemDetails, onDeleteItem, isChecked} = props
  const {id, websiteInput, passwordInput, usernameInput} = itemDetails

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  const passwordItem = isChecked ? (
    <p className="para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )
  return (
    <li className="list-item-container">
      <div className="initial-section">s</div>
      <div className="text-cont">
        <p className="heading">{websiteInput}</p>
        <p className="para">{usernameInput}</p>
        <p>{passwordItem}</p>
      </div>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default InputSection
