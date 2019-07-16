import React from 'react';

export default class PageNotFound extends React.Component {
    render() {
        return (
            <section className="page404 bg-light py-5">
                <div>
                    <h3>404 page not found</h3>
                    <p>We are sorry but the page you are looking for does not exist.</p>
                </div>
            </section>
        );
    }
}
