import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';

class CollapseText extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Button color="link" onClick={this.toggle} >{this.props.caption}</Button>
                <Collapse isOpen={this.state.collapse}>
                    {this.props.text}
                </Collapse>
            </div>
        );
    }
}

export default CollapseText;