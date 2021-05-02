import React from 'react'
import britishImg from '../../assets/images/british.jpg'
import ukraineImg from '../../assets/images/ukraine.jpg'

const translations = {
    "ua": {
        "Task list": "Список завдань",
        "learn HTML": "Вивчити HTML",
        "learn CSS": "Вивчити CSS",
        "learn JavaScript": "Вивчити JavaScript",
        "learn Python": "Вивчити Python",
        "learn React": "Вивчити React"
    },
    "ru": {
        "Task list": "Список завдань",
        "learn HTML": "Вивчити HTML",
        "learn CSS": "Вивчити CSS",
        "learn JavaScript": "Вивчити JavaScript",
        "learn Python": "Вивчити Python",
        "learn React": "Вивчити React"
    }
}
export default function withTranslation(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                language: "ua"
            }
        }

        setLanguage = (lang) => {
            this.setState({ language: lang })
        }

        translate = (text) => {
            const lang = this.state.language
            return translations[lang] && translations[lang][text] ? translations[lang][text] : text
        }

        render() {
            const { language } = this.state
            return <>
                <div className="translation">
                    <a
                        className={(language === "ua") ? "translate active-lang" : "translate"}
                        onClick={() => this.setLanguage("ua")}
                        href="#" ><img src={ukraineImg} /></a>
                    <a
                        className={(language === "en") ? "translate active-lang" : "translate"}
                        onClick={() => this.setLanguage("en")}
                        href="#" ><img src={britishImg} /></a>
                </div>
                <WrappedComponent lang={language} translate={this.translate} {...this.props} />
            </>
        }
    };
}