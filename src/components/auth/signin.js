import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    // console.log(email, password)
    email = "test@example.com"
    password = 'password123'
    //TODO: login
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className="form-group">
        <label>Email:</label>
        <input className="form-control" {...email} />
      </fieldset>
      <fieldset className="form-group">
        <label>Password:</label>
        <input className="form-control" {...password} />
      </fieldset>
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
    )
  }
}

// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
// })(Signin)

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
