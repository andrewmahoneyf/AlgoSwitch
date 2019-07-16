import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';


export const Footer = (props, { authUser }) => <div>
  {authUser
    ? <FooterAuth />
    : <FooterAuth hide={true} />
  }
</div>

Footer.contextTypes = {
  authUser: PropTypes.object
};


class FooterAuth extends React.Component {
  render() {
    return (
      <footer className={"container text-center " + (this.props.hide ? 'd-none' : '')}>
        <div className="text-center equalize pt-2">
          <p className="no-margin-bottom" id="wrapper">
            <b>Copyright © 2017 -&nbsp;<Link to={routes.PRIVACY}>Privacy Policy</Link>&nbsp;-&nbsp;
              <Link to={routes.TERMS} className="text-grey">Terms and Conditions</Link>&nbsp;- All Rights reserved by
              <a href="https://coinglomerate.co" target="_blank" rel="noopener noreferrer"> Coinglomerate</a></b></p>
        </div>
      </footer>
    );
  }
}

export default Footer;