import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import {useTranslation} from "react-i18next"

function Header({menu}) {
    const {t} = useTranslation()
    return (
        <>
            <div className="pre-menu">
                <h1 id="title">{t("header.title")}</h1>
            </div>
            <Menu items={menu}/>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    menu: PropTypes.array
}
export default Header
