import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import logo from '../../images/iconSilver.png';
import ViewTerms from '../modal/ViewTerms';
import $ from 'jquery';
import moment from 'moment';

const SignUpPage = ({ history }) => <main className="bg-dark text-white pb-5 signup">
    <div className="text-center">
        <img
            className="d-block mx-auto mb-2"
            src={logo}
            alt=""
            width="167"
            height="180" />
    </div>
    <div className="container">
        <div id="sign-up-form-container" className="row">
            <div className="col-md-8 order-md-1">
                <h5 className='pb-3'>Already have an account? <Link to={routes.LOGIN}>login</Link></h5>
                <SignUpForm history={history} />
            </div>
        </div>
    </div>
</main >

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    password_confirm: '',
    email: '',
    email_confirm: '',
    address_country: '',
    is_agreed: false,
    error: null
}

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value });

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = (event) => {
        const {
            first_name,
            last_name,
            username,
            password,
            email,
            address_country
        } = this.state;

        const { history } = this.props;
        auth
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                db
                    .doInitializeUser(authUser.uid, first_name, last_name, username, password, email, address_country, 'USER')
                    .then(() => {
                        this.setState(() => ({
                            ...INITIAL_STATE
                        }));
                        history.push(routes.LANDING);
                    })
                    .catch(error => {
                        console.log(error);
                        this.setState(byPropKey('error', error));
                    });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();

    }

    render() {
        const {
            first_name,
            last_name,
            username,
            password,
            password_confirm,
            email,
            email_confirm,
            address_country,
            is_agreed,
            error
        } = this.state;

        $('[type="date"]').on("change", function () {
            this.setAttribute(
                "data-date",
                moment(this.value, "YYYY-MM-DD")
                    .format(this.getAttribute("data-date-format"))
            )
        }).trigger("change");

        const isInvalid = first_name === '' || last_name === '' || username === '' || password === '' || password_confirm === '' || password !== password_confirm || email === '' || email_confirm === '' || email !== email_confirm || address_country === '' || !is_agreed;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="first_name">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            placeholder=""
                            value={first_name}
                            onChange={event => this.setState(byPropKey('first_name', event.target.value))} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="last_name">Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            placeholder=""
                            value={last_name}
                            onChange={event => this.setState(byPropKey('last_name', event.target.value))} />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder=""
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            aria-describedby="passwordHelpBlock" />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be 6+ characters long
                        </small>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="password_confirm">Confirm password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password_confirm"
                            placeholder=""
                            value={password_confirm}
                            onChange={event => this.setState(byPropKey('password_confirm', event.target.value))} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder=""
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email_confirm">Confirm email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email_confirm"
                            placeholder=""
                            value={email_confirm}
                            onChange={event => this.setState(byPropKey('email_confirm', event.target.value))} />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="address_line_1">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address_country"
                        placeholder=""
                        value={address_country}
                        onChange={event => this.setState(byPropKey('address_country', event.target.value))} />
                </div>

                <hr className="mb-4" />

                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="is_agreed"
                        checked={is_agreed}
                        onChange={event => this.setState(byPropKey('is_agreed', event.target.checked))} />
                    <label className="custom-control-label" htmlFor="is_agreed">{<ViewTerms />}</label>
                </div>
                <hr className="mb-4" />
                <button
                    disabled={isInvalid}
                    className="btn btn-primary btn-lg btn-block"
                    type="submit">
                    Create Account
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => <div id="new-user">
    New user?  <Link to={'/signup'}>Create a new account.</Link>
</div>

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink }