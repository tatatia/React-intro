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
        <Books bookIds= {[1, 2, 3, 4]}/>
        <Weather cities={["Kyiv","Kropyvnytskyi","Ivano-Frankivsk","Zhytomyr","Zaporizhzhia"]}/>
        <br/><br/>
        <Table/>
        <Pokemon pocemons={["charmander","ditto"]}/>
        <Table2/>
        <TextBlocks />
        <Footer author={this.state.author} />
      </div>
    );
  }
}

export default App;