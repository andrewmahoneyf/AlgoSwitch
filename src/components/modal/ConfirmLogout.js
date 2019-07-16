import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {auth} from '../../firebase';

class ConfirmLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this
            .toggle
            .bind(this);

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleSubmit() {
        auth.doSignOut()
        this.toggle();

    }

    render() {
        return (
            <div>
                <Button color="outline-danger" onClick={this.toggle}>Sign Out</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Logout Confirm</ModalHeader>
                    <ModalBody>
                        Are you sure you want to logout of your session?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>
                            Logout
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ConfirmLogout;