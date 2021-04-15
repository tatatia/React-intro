import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TextBlocks from './components/TextBlocks/TextBlocks'
import Biography from './components/Biography/Biography'
import Weather from './components/Weather/Weather'
import Pokemon from './components/Pokemon/Pokemon'
import Books from './components/Books/Books'
import Draggable from './components/Draggable/Draggable'

const peopleData = [
  {
    name: "Taras",
    events: {
      birthday: {
        day: 1,
        moon: "May",
        year: 1993
      },
      school: 2008,
      work: 2009
    },
    height: 170
  },
  {
    name: "Ivan",
    events: {
      birthday: {
        day: 14,
        moon: "August",
        year: 2010
      },
      school: 2017,
    },
    height: 130
  },
  {
    name: "Tanya",
    events: {
      birthday: {
        day: 6,
        moon: "March",
        year: 1990
      },
      school: 1997,
      work: 2009
    },
    height: 160
  },
  {
    name: "Tony",
    events: {
      birthday: {
        day: 6,
        moon: "January",
        year: 1965
      },
      school: 1972,
      work: 1988
    },
    height: 165
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      author: {
        name: "Слободенюк Т.В.",
        githubUrl: "https://github.com/tatatia",
        originalDesignUrl: "https://dribbble.com/shots/11529735-Online-Store-WebUI-Kit-Free-PSD-Download/attachments/3150018?mode=media"
      },
      menu: [
        { link: "#", text: "Головна" },
        { link: "#description", text: "Опис проекту" },
        { link: "#about-author", text: "Про автора" },
        { link: "#about-author", text: "Контакти" }
      ]
    };
  }

  render() {
    const { lang } = this.props
    return (
      <div className="App">
        <Header title={this.state.title} menu={this.state.menu} lang={lang} />
        <Draggable tasks={["learn HTML", "learn CSS", "learn JavaScript", "learn Python", "learn React"]} lang={lang} />
        <Books bookIds={[1, 2, 3, 4]} />
        <Weather cities={["Kyiv", "Kropyvnytskyi", "Ivano-Frankivsk", "Zhytomyr", "Zaporizhzhia"]} lang={lang} />
        <br /><br />
        <Biography people={peopleData} lang={lang} />
        <Pokemon pocemons={["charmander", "ditto"]} lang={lang} />
        <TextBlocks lang={lang} />
        <Footer author={this.state.author} lang={lang} />
      </div>
    );
  }
}

export default App;