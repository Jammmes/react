import React from 'react';
import DevCardComponent from '../components/DevCardComponent.jsx';

/**
 * Компонент - список разработчиков
 * Использует внешний компонент DevCardComponent для отрисовки
 * карточки разработчика
 * @props - массив объектов devList с данными о разработчике (id,name,surname,lastname,age)
 */
class DevListComponent extends React.Component{
    render(){
        return(
            <div className = "devList">
                <h1 className = "devList__title">{this.props.title}</h1>
                <div className = "devList__list">
                    {this.props.devlist.map((item) => <DevCardComponent key={item.id} dev={item} />
                    )}
                </div>
            </div>
        )
    }
}

export default DevListComponent;