import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Welcome</ModalHeader>
                    <ModalBody>
                        Hello, dear friend ! Welcome to my blog.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggle}>Ок</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Welcome;