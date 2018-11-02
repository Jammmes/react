import React from 'react';

class AsideArchive extends React.Component {
    render() {
        return (
            <div className = "asideArchive">
                <h3 className="asideArchive__title">{this.props.asideArchive.title}</h3>
                <ul className = "archiveList">
                    {this.props.asideArchive.archive.map((item) => <li className="archiveList__item" key = {item.title}> <a href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        )
    }
}

export default AsideArchive;