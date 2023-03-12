import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import InputSection from '../InputSection'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    itemsList: [],
    isChecked: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newItem = {
      id: uuidv4(),
      websiteInput,
      usernameInput,
      passwordInput,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onWebsiteInput = event => {
    // const {websiteInput} = this.state
    this.setState({websiteInput: event.target.value})
    // console.log(websiteInput)
  }

  onUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    this.setState({
      itemsList: itemsList.filter(eachItem => eachItem.id !== id),
    })
  }

  onChecked = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {
      itemsList,
      searchInput,
      isChecked,
      websiteInput,
      usernameInput,
      passwordInput,
    } = this.state
    const updatedList = itemsList.filter(eachItem =>
      eachItem.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updatedList.length

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-image"
        />
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt=" password manager"
            className="password-manager-image"
          />
          <form
            className="add-password-container"
            onSubmit={this.onAddPassword}
          >
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                className="input-item"
                value={websiteInput}
                placeholder="Enter Website"
                onChange={this.onWebsiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                className="input-item"
                value={usernameInput}
                placeholder="Enter Username"
                onChange={this.onUsernameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                value={passwordInput}
                className="input-item"
                placeholder="Enter Password"
                onChange={this.onPasswordInput}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          {/* <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          /> */}
        </div>
        <div className="bottom-container">
          <div>
            <div className="your-password-container">
              <div className="your-password-text-cont">
                <h1 className="heading">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  placeholder="search"
                  className="input-item"
                  onChange={this.updateSearchList}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-password-container">
              <input
                type="checkbox"
                checked={isChecked}
                id="showPassword"
                onChange={this.onChecked}
              />
              <label htmlFor="showPassword">Show Passwords</label>
            </div>
            {count === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="desc">No Passwords</p>
              </div>
            ) : (
              <ul className="list-items-container">
                {updatedList.map(eachItem => (
                  <InputSection
                    key={eachItem.id}
                    itemDetails={eachItem}
                    onDeleteItem={this.onDeleteItem}
                    isChecked={isChecked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
