import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import logo from '../../images/iconSilver.png';
import PropTypes from 'prop-types';
import ConfirmLogout from '../modal/ConfirmLogout';

const SignOutButton = () => <ConfirmLogout />

export const Navigation = (props, { authUser }) => <div>
  {authUser
    ? <NavigationAuth />
    : <NavigationAuth hide={true} />
  }
</div>

Navigation.contextTypes = {
  authUser: PropTypes.object
};

// React-Bootstrap horizonal navagation bar 
class NavigationAuth extends React.Component {
  render() {
    return (
      <nav className={"navbar navbar-expand-md fixed-top site-header py-1 " + (this.props.hide ? 'd-none' : '')} data-toggle="collapse" data-target="#navbarSupportedContent">
        <Link className="py-2 pl-3" to={routes.LANDING}><img className="logo pt-2" src={logo} alt="logo" width='80' height='85' /></Link>
        <button className="navbar-toggler mr-1" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars" aria-label="toggle"></i>
        </button>

        <div className="collapse navbar-collapse pr-3" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-right">
            <li className="nav-item">
              <Link className="py-2d-md-inline-block nav-link" to={routes.LANDING}>Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href='' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pools</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={routes.POOL_CRYPTONIGHT}>Cryptonight-Monero</Link>
                <Link className="dropdown-item" to={routes.POOL_ETHASH}>Ethash</Link>
                <Link className="dropdown-item" to={routes.POOL_EQUIHASH}>Equihash</Link>
                <Link className="dropdown-item" to={routes.POOL_GROESTL}>Groestl</Link>
                <Link className="dropdown-item" to={routes.POOL_LYRA2Z}>Lyra2z</Link>
                <Link className="dropdown-item" to={routes.POOL_NEOSCRYPT}>NeoScrypt</Link>
                <Link className="dropdown-item" to={routes.POOL_PASCAL}>Pascal</Link>
                <Link className="dropdown-item" to={routes.POOL_SIA}>Sia</Link>
                <Link className="dropdown-item" to={routes.POOL_SKEIN}>Skein</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="py-2d-md-inline-block nav-link" to={routes.BALANCES}>Balances</Link>
            </li>
            <li className="nav-item">
              <Link className="py-2d-md-inline-block nav-link" to={routes.ABOUT}>FAQ</Link>
            </li>
          </ul>
          <Link className="py-2d-md-inline-block nav-link" to={routes.DOWNLOAD}>Download AlgoSwitch</Link>
          <Link to={routes.SETTINGS}><i className="fa fa-gear pr-5" /></Link>
          <SignOutButton />
        </div>
      </nav>
    );
  }
}

export default Navigation;