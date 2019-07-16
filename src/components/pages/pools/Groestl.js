import React from 'react';
import withAuthorization from '../../withAuthorization';


class Pool extends React.Component {
  render() {
    return (
      <section className="pools">
        <div className="jumbotron p-3 p-md-5 text-white bg-dark">
          <div className="col-md-6 px-0 container">
            <h1 className="display-4 font-italic">Groestl</h1>
          </div>
        </div>
      </section>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Pool);