import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem
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
                        className={(item.text === this.state.activeItem) ? "active" : ""}
                        href={item.link}
                        key={item.text}
                    >{item.text}</a>)}
            </div>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.array,
    activeItem: PropTypes.string
}
Menu.defaultProps = {
    activeItem: "Головна"
}

function Header({ title, menu }) {
    return (
        <>
            <div className="pre-menu">
                <h1 id="title">{title}</h1>
            </div>
            <Menu items={menu} />
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    menu: PropTypes.array
}

export default Header