import React from 'react';
import withAuthorization from '../withAuthorization';
import { db } from '../../firebase';

const INITIAL_STATE = {
  current_user: null,
  first_name: '',
  last_name: '',
  email: '',
  address_country: '',
  username: '',
  exchange_coin: '',
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value });


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (db.getCurrentUser()) {
      db.getCurrentUser().then(doc => this.setState(() => ({
        current_user: doc,
        first_name: doc.data().first_name,
        last_name: doc.data().last_name,
        email: doc.data().email,
        address_country: doc.data().address_country,
        username: doc.data().username,
        exchange_coin: doc.data().exchange_coin
      })))
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var {
      current_user,
      first_name,
      last_name,
      email,
      address_country,
      username,
      exchange_coin
    } = this.state;
    current_user = current_user._key.path.segments[1];

    db.doUpdateUserProfile(current_user, first_name, last_name, email, address_country, username, exchange_coin)

    // Display alert and hide after 3 seconds
    document
      .getElementById('alert')
      .style
      .display = 'block';
    setTimeout(function () {
      document
        .getElementById('alert')
        .style
        .display = 'none';
    }, 3000);
  }

  render() {
    const {
      current_user,
      first_name,
      last_name,
      email,
      address_country,
      username,
      exchange_coin
    } = this.state;

    return (
      <section className="settings">
        <div className="container text-white">
          <div className="row my-5">

            <div className="col-12 pb-5">
              <h3 className="mt-2">User Details</h3>
              <div className="alert alert-success container w-50" id="alert" role="alert">
                <h3 className="alert-heading">Your profile has been updated!</h3>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                </li>
                <li className="nav-item">
                  <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                </li>
              </ul>

              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table table-sm table-hover table-striped text-left pb-5">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Name:</strong> {!!current_user && first_name} {!!current_user && last_name}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Username:</strong> {!!current_user && username}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email:</strong> {!!current_user && email}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Country:</strong> {!!current_user && address_country}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Exchange Coin:</strong> {!!current_user && exchange_coin}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="edit">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Username</label>
                      <div className="col-lg-9">
                        <input
                          id="username"
                          className="form-control"
                          type="text"
                          value={this.state.username}
                          onChange={event => this.setState(byPropKey('username', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">First name</label>
                      <div className="col-lg-9">
                        <input
                          id="first_name"
                          className="form-control"
                          type="text"
                          value={this.state.first_name}
                          onChange={event => this.setState(byPropKey('first_name', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                      <div className="col-lg-9">
                        <input
                          id="last_name"
                          className="form-control"
                          type="text"
                          value={this.state.last_name}
                          onChange={event => this.setState(byPropKey('last_name', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Email</label>
                      <div className="col-lg-9">
                        <input
                          id="email"
                          className="form-control"
                          type="email"
                          value={this.state.email}
                          onChange={event => this.setState(byPropKey('email', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Country</label>
                      <div className="col-lg-9">
                        <input
                          id="address_country"
                          className="form-control"
                          type="text"
                          value={this.state.address_country}
                          onChange={event => this.setState(byPropKey('address_country', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Exchange Coin</label>
                      <div className="col-lg-9">
                        <input
                          id="exchange_coin"
                          className="form-control"
                          type="text"
                          value={this.state.exchange_coin}
                          onChange={event => this.setState(byPropKey('exchange_coin', event.target.value))} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Password</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <input type="reset" className="btn btn-secondary mr-3" value="Cancel" />
                        <input type="button" className="btn btn-primary" value="Save Changes" onClick={this.handleSubmit} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Settings);
