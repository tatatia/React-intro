import React from 'react'
import britishImg from './image/british.jpg'

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
                <a
                    className={(language === "ua") ? "translate active-lang" : "translate"}
                    onClick={() => this.setLanguage("ua")}
                    href="#" ><img src={britishImg} /></a>
                <a
                    className={(language === "en") ? "translate active-lang" : "translate"}
                    onClick={() => this.setLanguage("en")}
                    href="#" ><img src={britishImg} /></a>
                <WrappedComponent lang={this.state.language} {...this.props} />
            </>
        }
    };
}