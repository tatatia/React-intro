import React from 'react'
import PropTypes from 'prop-types'

const translations = {
    "ua": {
        "title": "Тестове завдання",
        "Головна": "Головна",
        "Опис проекту": "Опис проекту",
        "Про автора": "Про автора",
        "Контакти": "Контакти"
    },
    "en": {
        "title": "Test task",
        "Головна": "Home",
        "Опис проекту": "Project description",
        "Про автора": "About the author",
        "Контакти": "Сontacts"
    }
}
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
        const { items, lang } = this.props;

        return (
            <div className="menu">
                {items.map(item =>
                    <a
                        onClick={() => this.setActiveItem(item)}
                        className={(item.text === activeItem) ? "active" : ""}
                        href={item.link}
                        key={item.text}
                    >{translations[lang][item.text]}</a>)}
            </div>
        )
    }
}

Menu.propTypes = {
    items: PropTypes.array,
    activeItem: PropTypes.string,
    lang: PropTypes.string
}

Menu.defaultProps = {
    activeItem: "Головна"
}

function Header({ menu, lang }) {
    return (
        <>
            <div className="pre-menu">
                <h1 id="title">{translations[lang]["title"]}</h1>
            </div>
            <Menu items={menu} lang={lang} />
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    menu: PropTypes.array,
    lang: PropTypes.string
}
export default Header
