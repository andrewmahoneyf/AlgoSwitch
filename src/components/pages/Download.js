import React from 'react';
import withAuthorization from '../withAuthorization';
import '../../styles/Download.scss';


class Download extends React.Component {
    render() {
        return (
            <section className="download">
                <div className="overlay"></div>

                <div className="masthead">
                    <div className="masthead-bg"></div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 my-auto">
                                <div className="masthead-content text-white py-5 py-md-0">
                                    <h1 className="mb-3">Coming Soon!</h1>
                                    <p className="mb-5">We're working hard to provide a top performing software suite. Stay tuned for our target launch date in
                                    <strong> January 2019</strong>! Sign up for updates using the form below!</p>
                                    <div className="input-group input-group-newsletter">
                                        <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="button">Notify Me!</button>
                                        </div>
                                    </div>
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

export default withAuthorization(authCondition)(Download);