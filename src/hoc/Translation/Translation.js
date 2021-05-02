import React from 'react'
import britishImg from '../../assets/images/british.jpg'
import ukraineImg from '../../assets/images/ukraine.jpg'

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
                <WrappedComponent lang={language} {...this.props} />
            </>
        }
    };
}