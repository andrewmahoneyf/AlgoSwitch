import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import Navigation from './templates/Navbar';
import Footer from './templates/Footer';
import Privacy from './templates/PrivacyPolicy';
import Terms from './templates/Terms';
import PageNotFound from './templates/PageNotFound';
import Signup from './templates/Signup';
import Login from './templates/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Balances from './pages/Balances';
import * as pools from './pages/pools/index';
import Download from './pages/Download';
import Settings from './pages/Settings';
import '../styles/App.scss';
import '../styles/Fontawesome.scss';
import '../jsx/navbar.js';
import '../jsx/smoothScroll.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-dark" id="navigation" role="navigation" >
          <Navigation />
        </header>
        <Main />
        <Footer id="footer" role="contentinfo" />
      </div>
    );
  }
}

// Main react-router
class Main extends React.Component {
  render() {
    return (
      <main id='top' role="main">
        <Switch>
          <Route exact path={routes.LANDING} component={Dashboard}/>
          <Route path={routes.ABOUT} component={About}/>
          <Route exact path={routes.PRIVACY} component={Privacy}/>
          <Route exact path={routes.TERMS} component={Terms}/>
          <Route exact path={routes.POOL_CRYPTONIGHT} component={pools.Cryptonight}/>
          <Route exact path={routes.POOL_ETHASH} component={pools.Ethash}/>
          <Route exact path={routes.POOL_EQUIHASH} component={pools.Equihash}/>
          <Route exact path={routes.POOL_GROESTL} component={pools.Groestl}/>
          <Route exact path={routes.POOL_LYRA2Z} component={pools.Lyra2z}/>
          <Route exact path={routes.POOL_NEOSCRYPT} component={pools.NeoScrypt}/>
          <Route exact path={routes.POOL_PASCAL} component={pools.Pascal}/>
          <Route exact path={routes.POOL_SIA} component={pools.Sia}/>
          <Route exact path={routes.POOL_SKEIN} component={pools.Skein}/>
          <Route exact path={routes.BALANCES} component={Balances}/>
          <Route exact path={routes.SETTINGS} component={Settings}/>
          <Route exact path={routes.DOWNLOAD} component={Download}/>
          <Route exact path={routes.SIGN_UP} component={Signup}/>
          <Route exact path={routes.LOGIN} component={Login}/>
          <Route exact path={routes.NOT_FOUND} component={PageNotFound}/>
          <Redirect to={routes.NOT_FOUND}/>
        </Switch>
      </main>
    );
  }
}

export default withAuthentication(App);
