import React from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next"

const Footer = (props) => {
    const {t} = useTranslation()
    const {author} = props;
    return (
        <>
            <div className="footer">
                <div className="author" id="about-author">
                    {t("footer.nameAuthor")}<br/>
                    <a href={author.githubUrl} target="_blank" rel="noreferrer">{author.githubUrl}</a>
                    <br/>
                    <a href={author.originalDesignUrl}
                       target="_blank"
                       rel="noreferrer">{t("footer.originalDesign")}</a>
                </div>
            </div>
            <div className="post-footer"></div>
        </>
    )
}
Footer.propTypes = {
    author: PropTypes.string,
}
export default Footer
