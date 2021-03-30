import './App.css'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextBlocks from './components/TextBlocks'
import Table from './components/Table'
import Table2 from './components/Table2'
import Weather from './components/Weather'
import Pokemon from './components/Pokemon'
import Books from './components/Books'
import Draggable from './components/Draggable'

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
      title: "Тестове завдання",
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
    return (
      <div className="App">
        <Header title={this.state.title} menu={this.state.menu} />
        <Draggable tasks={["learn HTML", "learn CSS", "learn JavaScript", "learn Python", "learn React"]} />
        <Books bookIds={[1, 2, 3, 4]} />
        <Weather cities={["Kyiv", "Kropyvnytskyi", "Ivano-Frankivsk", "Zhytomyr", "Zaporizhzhia"]} />
        <br /><br />
        <Table people={peopleData} />
        <Pokemon pocemons={["charmander", "ditto"]} />
        <Table2 />
        <TextBlocks />
        <Footer author={this.state.author} />
      </div>
    );
  }
}

export default App;