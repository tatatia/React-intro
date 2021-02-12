import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "Головна"
        }

        this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
        this.setState(state => ({
            activeItem: item.text
        }))
    }

    render() {
        return (
            <div className="menu">
                {this.props.items.map(item =>
                    <a
                        onClick={() => this.setActiveItem(item)}
                        className={(item.text == this.state.activeItem) ? "active" : ""}
                        href={item.link}
                    >{item.text}</a>)}
            </div>
        )
    }
}

function Header(props) {
    return (
        <>
            <div className="pre-menu">
                <h1 id="title">{props.title}</h1>
            </div>
            <Menu items={props.menu} />
        </>
    );
}
export default Header