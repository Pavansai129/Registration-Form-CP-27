import {Component} from 'react'
// Write your JS code here

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showFirstnameRequired: false,
    showLastnameRequired: false,
    isFormSubmitted: false,
  }

  submitAnotherResponse = () => {
    this.setState({isFormSubmitted: false, firstname: '', lastname: ''})
  }

  renderRegistrationSuccessView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.submitAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  validateFirstname = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  onBlurFirstname = () => {
    const isValidFirstname = this.validateFirstname()
    this.setState({showFirstnameRequired: !isValidFirstname})
  }

  validateLastname = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onBlurLastname = () => {
    const isValidLastname = this.validateLastname()
    this.setState({showLastnameRequired: !isValidLastname})
  }

  onFirstNameChange = event => {
    this.setState({firstname: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastname: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstname = this.validateFirstname()
    const isValidLastname = this.validateLastname()
    if (isValidFirstname && isValidLastname) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        isFormSubmitted: false,
        showFirstnameRequired: !isValidFirstname,
        showLastnameRequired: !isValidLastname,
      })
    }
  }

  renderRegistrationFormView = () => {
    const {
      firstname,
      lastname,
      showFirstnameRequired,
      showLastnameRequired,
    } = this.state
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="firstname">FIRST NAME</label>
          </div>
          <input
            type="text"
            id="firstname"
            onChange={this.onFirstNameChange}
            value={firstname}
            onBlur={this.onBlurFirstname}
          />
          {showFirstnameRequired && <p>Required</p>}
          <div>
            <label htmlFor="lastname">LAST NAME</label>
          </div>
          <input
            type="text"
            id="lastname"
            onChange={this.onLastNameChange}
            value={lastname}
            onBlur={this.onBlurLastname}
          />
          {showLastnameRequired && <p>Required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <>
        <div>
          <h1>Registration</h1>
          {isFormSubmitted
            ? this.renderRegistrationSuccessView()
            : this.renderRegistrationFormView()}
        </div>
      </>
    )
  }
}

export default RegistrationForm
