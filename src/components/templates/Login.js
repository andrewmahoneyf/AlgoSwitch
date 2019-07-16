import React from 'react';
import logo from '../../images/iconSilver.png';
import { withRouter, Link } from 'react-router-dom';
import { SignUpLink } from './Signup';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import '../../styles/UserAuthForms.scss';

const LoginPage = ({ history }) => <main className="text-center text-white login bg-dark login pb-5">
    <div className="container">
        <div className="text-center">
            <img
                className="d-block mx-auto mb-1"
                src={logo}
                alt=""
                width="167"
                height="180" />
            <h2>Sign in to AlgoSwitch</h2>
        </div>
        <LoginForm history={history} />
    </div>
</main>

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value });

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = (event) => {
        const { email, password } = this.state;

        const { history } = this.props;

        auth
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                history.push(routes.LANDING);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }
    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit} className="form-signin">

                <div className="form-label-group" id="form-username">
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))} />
                    <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group" id="form-password">
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))} />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" id='checkbox' value="remember-me" />
                        Remember me
                    </label>
                    <Link to="/password-reset">
                        Forgot Password?</Link>
                </div>
                <button
                    disabled={isInvalid}
                    id="signin-btn"
                    className="btn btn-lg btn-primary btn-block mb-3"
                    type="submit">Sign in</button>
                <SignUpLink /> {error && <p className="alert alert-danger">{error.message}</p>}
            </form>
        )
    }
}

export default withRouter(LoginPage);

export { LoginForm };