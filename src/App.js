import './App.css';
import cvsImg from "./images/cvs.jpg";
import gitImg from "./images/git.jpeg";
import htmlImg from "./images/html.jpg";
import attributeImg from "./images/attribute.png";
import nodeImg from "./images/node.jpeg";
import cssImg from "./images/css.png";
import React from 'react';

let textBlocks = [
  {
    title: "Система керування версіями",
    text: { __html: "<p><strong>Система керування версіями</strong> — інструмент, який дозволяє одночасно, не заважаючи один одному, проводити роботу над груповими проектами.</p>" },
    image: cvsImg
  },
  {
    title: "Git",
    text: {
      __html: `<p>Основні команди Git</p>
    <ul>
      <li>git checkout (назва гілки) - перейти в іншу гілку.</li>
      <li>git checkout -b (назва гілки) - створити нову гілку і перейти в неї.</li>
      <li>git commit -m "message" - закомітити зміни в локальний репозиторій.</li>
      <li>git add . - додати всі файли зміни в репозиторій, щоб можна було комітити. </li>
      <li>git clone (адреса репозиторію) - зклонувати репозиторій.</li>
      <li>git status - перевірити статус локального репозиторію.</li>
      <li>git push - завантажити зміни на сервер, щоб було видно на github.</li>
      <li>git pull - взяти нові дані з сервера.</li>
      <li>git branch - показати список локальних гілок (в тому числі активну).</li>
      <li>git merge (назва гілки) - змерджити вказану гілку в поточну</li>

    </ul>` },
    image: gitImg
  },
  {
    title: "HTML",
    text: {
      __html: ` <p>HTML - це мова розмітки за допомогою тегів. Тобто, HTML документ буде складатися з деякої групи елементів, де
    кожен елемент буде визначатися (починатися та закінчуватися) певним тегом (Для деяких елементів кінцевий тег
    не є обов'язвовим) Тобто,
    ТЕГ — це назва елементу, записана у кутових дужках ( &lt;&gt;) Кожен HTML тег має свою унікальну назву з
        визначеним синтаксисом, яка записується латинськими літерами і не чутлива до регістру.</p>
    <p>Елементи HTML поділяються на:</p>
    <ul>
      <li>Блокові елементи (block)</li>
      <li>Рядкові (вбудовані) елементи (inline)</li>
      <li>Рядково- (вбудований) блокові (inline-block)</li>
    </ul>` },
    image: htmlImg
  },
  {
    title: "Nodejs and npm",
    text: {
      __html: `   <p>Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою
    JavaScript.Якщо раніше Javascript застосовувався для обробки даних в браузері користувача, то node.js надав
    можливість виконувати JavaScript-скрипти
    на сервері та відправляти користувачеві результат їхнього виконання. Платформа Node.js перетворила
    JavaScript на мову загального використання з великою спільнотою розробників.
    </p>`},
    image: nodeImg
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
      posts: textBlocks 
    };
  }

  render() {
    return (
      <div className="App">
        <div className="pre-menu">
          <h1 id="title">{this.state.title}</h1>
        </div>
        <div className="menu">
          {/* {items.map(item => <a href={item.link}>{item.text}</a>)} */}
        </div>
  
        {this.state.posts.map(block => {
          return (
            <div className="work-books">
              <h3>{block.title}</h3>
              <img alt="cvs" src={block.image} />
              <div className="desc" dangerouslySetInnerHTML={block.text} />
            </div>
          )
        })}
  
        <div className="footer">
          <div className="author" id="about-author">
            {this.state.author.name}<br />
            <a href={this.state.author.githubUrl} target="_blank">{this.state.author.githubUrl}</a>
            <br />
            <a href={this.state.author.originalDesignUrl}
              target="_blank">Оригінал дизайну</a>
          </div>
        </div>
        <div className="post-footer"></div>
  
        <script src="./node_modules/jquery/dist/jquery.js"></script>
        <script src="./js/script.js"></script>
      </div>
    );
  }
}

function App2() {
 
  let items = [
    { link: "#", text: "Головна" },
    { link: "#description", text: "Опис проекту" },
    { link: "#about-author", text: "Про автора" },
    { link: "#about-author", text: "Контакти" }
  ]

  

 

  
}

export default App;
