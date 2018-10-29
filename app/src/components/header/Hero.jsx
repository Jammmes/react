import React from 'react';
import { Jumbotron } from 'reactstrap';

class Hero extends React.Component {
    render() {
        return (
            <Jumbotron className= "p-3 p-md-5 text-white rounded bg-dark">
                <h1 className="display-3">{this.props.hero.title}</h1>
                <p className="lead">{this.props.hero.text}</p>
                <hr className="my-2" />
                <p className="lead">
                    <a href="#" className= "text-white font-weight-bold">{this.props.hero.continue}</a>
                </p>
            </Jumbotron>
        )
    }
}

export default Hero;