import React from 'react'
import PropTypes from 'prop-types'

const translations = {
    "ua": {
        "nameAuthor": "Слободенюк Т.В.",
        "originalDesign": "Оригінал дизайну"
    },
    "en": {
        "nameAuthor": "Tetiana Slobodeniuk",
        "originalDesign": "Original design"
    }
}

const Footer = (props) => {
    const {lang, author} = props;
    return (
        <>
            <div className="footer">
                <div className="author" id="about-author">
                    {translations[lang]["nameAuthor"]}<br/>
                    <a href={author.githubUrl} target="_blank" rel="noreferrer">{author.githubUrl}</a>
                    <br/>
                    <a href={author.originalDesignUrl}
                       target="_blank"
                       rel="noreferrer">{translations[lang]["originalDesign"]}</a>
                </div>
            </div>
            <div className="post-footer"></div>
        </>
    )
}
Footer.propTypes = {
    author: PropTypes.string,
    lang: PropTypes.string
}
export default Footer
