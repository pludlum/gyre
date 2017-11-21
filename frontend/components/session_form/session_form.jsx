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

    let demoUsername = "anonymous".split('');
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
      <div className="session-page">
        <img className="splash-page-img" src="https://res.cloudinary.com/dzqrzline/image/upload/v1508697049/old-books-436498_1920_ndxm1d.jpg" />
        <div className="session-page-text">
          <span className="session-text line-1">
            Welcome to the Gyre.
          </span>
          <span className="session-text line-2">
            Browse and annotate poetry.
          </span>
          <span className="session-text line-3">
            Learn and share your knowledge with the world.
          </span>
        </div>
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
              <button className="session-form-button"
                onClick={this.handleDemo}>Guest</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
