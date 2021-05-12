import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next"

function Menu({items, defaultActiveItem}) {
    const {t} = useTranslation()
    const [activeItem, setActiveItem] = useState(defaultActiveItem)
    return (
        <div className="menu">
            {items.map(item =>
                <a
                    onClick={() => setActiveItem(item.text)}
                    className={(item.text === activeItem) ? "active" : ""}
                    href={item.link}
                    key={item.text}
                >{t("menu." + item.text)}</a>)}
        </div>
    )
}

Menu.propTypes = {
    items: PropTypes.array,
    defaultActiveItem: PropTypes.string,
}

Menu.defaultProps = {
    defaultActiveItem: "Головна"
}

export default Menu