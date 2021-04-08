import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem
        }
        this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(item) {
        this.setState({
            activeItem: item.text
        })
    }

    render() {
        const { activeItem } = this.state;
        const { items } = this.props;
        return (
            <div className="menu">
                {items.map(item =>
                    <a
                        onClick={() => this.setActiveItem(item)}
                        className={(item.text === activeItem) ? "active" : ""}
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
