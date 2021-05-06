import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const translations = {
    "ua": {
        "title": "Тестове завдання"
    },
    "en": {
        "title": "Test task"
    }
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
