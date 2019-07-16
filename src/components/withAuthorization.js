import React from 'react';
import {withRouter} from 'react-router-dom';
import {firebase} from '../firebase';
import * as routes from '../constants/routes';
import {PropTypes} from 'prop-types';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends Component {
        componentDidMount() {
            firebase
                .auth
                .onAuthStateChanged(authUser => {
                    if (!authCondition(authUser)) {
                        this
                            .props
                            .history
                            .push(routes.LOGIN);
                    }
                });
        }
        render() {
            return this.context.authUser
                ? <Component params={this.props.match.params}/>
                : null;
        }
    }

    WithAuthorization.contextTypes = {
        authUser: PropTypes.object
    };

    return withRouter(WithAuthorization);
}

export default withAuthorization;