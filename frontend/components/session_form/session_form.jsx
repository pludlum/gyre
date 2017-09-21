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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleDemo(e) {
    e.preventDefault();

    let demoUsername = "shakespeare".split('');
    let demoPassword = "tobeornottobe".split('');
    let self = this;

    // clear fields
    this.setState({username: ""});
    this.setState({password: ""});

    demoUsername.forEach((l, i) => setTimeout( () => {
      self.setState({username: self.state.username + l});
    }, 70 * i));

    demoPassword.forEach((l, i) => setTimeout( () => {
      self.setState({password: self.state.password + l
      });
      if (i === demoPassword.length) {

      }
    }, 70 * i));

    setTimeout( () => {this.props.sessionPOST({
      user: {username: demoUsername.join(''), password: demoPassword.join('')}
      });
    }, 1000);
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
        <ul className="errors-list" >
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
      <div className= "session-page">
        <Title />
        <div className="session-form-container">
          {this.renderErrors()}
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
                value={this.props.formType === "signin" ? "Sign In" :
                  "Sign Up"} />
              <button className="demo-button"
                onClick={this.handleDemo}>Demo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
