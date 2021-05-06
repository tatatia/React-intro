import React, { useState } from 'react'
import PropTypes from 'prop-types'

const translations = {
    "ua": {
        "Головна": "Головна",
        "Опис проекту": "Опис проекту",
        "Про автора": "Про автора",
        "Контакти": "Контакти"
    },
    "en": {
        "Головна": "Home",
        "Опис проекту": "Project description",
        "Про автора": "About the author",
        "Контакти": "Сontacts"
    }
}

function Menu({ items, lang, defaultActiveItem}) {
    const [activeItem, setActiveItem] = useState(defaultActiveItem)
    return (
        <div className="menu">
            {items.map(item =>
                <a
                    onClick={() => setActiveItem(item.text)}
                    className={(item.text === activeItem) ? "active" : ""}
                    href={item.link}
                    key={item.text}
                >{translations[lang][item.text]}</a>)}
        </div>
    )
}

Menu.propTypes = {
    items: PropTypes.array,
    defaultActiveItem: PropTypes.string,
    lang: PropTypes.string
}

Menu.defaultProps = {
    defaultActiveItem: "Головна"
}

export default Menu