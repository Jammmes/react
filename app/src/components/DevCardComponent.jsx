import React from 'react';
import GetTimeComponent from './GetTimeComponent.jsx';

/**
 * Компонент - карточка разработчика
 * Использует внешний компонент GetTimeComponent для показа времени
 * @props - объект, содержащий name,surname,lastname,age
 */
class DevCardComponent extends React.Component{
    render(){
        return (
            <div className = "devCard">
                <div className= "devCard__block">
                    <div className = "info">
                        <div className = "info__caption">Фамилия:</div>
                        <div className="info__value">{this.props.dev.surname}</div>     
                    </div>
                    <div className="info">
                        <div className = "info__caption">Имя:</div>
                        <div className="info__value">{this.props.dev.name}</div>
                    </div>
                    <div className="info">
                        <div className="info__caption">Отчество:</div>
                        <div className="info__value">{this.props.dev.lastname}</div>
                    </div>
                    <div className="info">
                        <div className="info__caption">Возраст:</div>
                        <div className="info__value">{this.props.dev.age}</div>
                    </div>
                </div>
                <div className="devCard__item"><GetTimeComponent /></div>
            </div>
        );
    }
}

export default DevCardComponent;