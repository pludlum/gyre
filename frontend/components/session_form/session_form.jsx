import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Title from '../title/title';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm({user: user});
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === "signin") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Sign In</Link>;
    }
  }


  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul className="errors-list">
          {this.props.errors.map( (error_message, i) => (
            <li key={`error-${i}`}>
              {error_message}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <Title />
        {this.renderErrors()}
        }
        <form onSubmit={this.handleSubmit} className="session-form">
          <input type="text"
            placeholder='username'
            value={this.state.username}
            onChange={this.update('username')}
            className="session-input" />
          <br/>
            <input type="password"
              placeholder='password'
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input" />
            <br/>
            <input type="submit"
              className="session-form-button"
              value={this.props.formType === "signin" ? "Sign In" : "Sign Up"} />
        </form>
      </div>
    );
  }


export default withRouter(SessionForm);
