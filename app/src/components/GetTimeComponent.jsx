import React from 'react'

/**
 * Компонент показывает текущее время по нажатию кнопки
 * и запоминает его значение в своем state
 */
class GetTimeComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { currentDate: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() };
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        let newDate = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        this.setState({ currentDate: newDate });
    }

    render(){ 
        return(
        <div className = "getTime">
            <button className="getTime__button" onClick={this.onUpdate}>Обновить</button>
            <div className="getTime__item">{this.state.currentDate}</div>
        </div>
        )
    }
}

export default GetTimeComponent;