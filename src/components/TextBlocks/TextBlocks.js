import React from 'react';
import cvsImg from "./images/cvs.jpg";
import gitImg from "./images/git.jpeg";
import htmlImg from "./images/html.jpg";
import nodeImg from "./images/node.jpeg";

const translations = {
  "ua": {
    "title1": "Система керування версіями",
    "text1": <>
      <p>
        <strong>Система керування версіями</strong> — інструмент, який дозволяє одночасно, не заважаючи один одному, проводити роботу над груповими проектами.
    </p>
    </>,
    "title2": "Git",
    "textGit": <>
      <p>Основні команди Git</p>
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
      </ul>
    </>,
    "title3": "HTML",
    "textHtml": <>
      <p>
        HTML - це мова розмітки за допомогою тегів. Тобто, HTML документ буде складатися з деякої групи елементів, де
        кожен елемент буде визначатися (починатися та закінчуватися) певним тегом (Для деяких елементів кінцевий тег
        не є обов'язвовим) Тобто,
        ТЕГ — це назва елементу, записана у кутових дужках ( &lt;&gt;) Кожен HTML тег має свою унікальну назву з
        визначеним синтаксисом, яка записується латинськими літерами і не чутлива до регістру.
    </p>
      <p>Елементи HTML поділяються на:</p>
      <ul>
        <li>Блокові елементи (block)</li>
        <li>Рядкові (вбудовані) елементи (inline)</li>
        <li>Рядково- (вбудований) блокові (inline-block)</li>
      </ul>
    </>,
    "title4": "Nodejs і npm",
    "textNodeJs": <>
      <p>
        Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою
        JavaScript.Якщо раніше Javascript застосовувався для обробки даних в браузері користувача, то node.js надав
        можливість виконувати JavaScript-скрипти
        на сервері та відправляти користувачеві результат їхнього виконання. Платформа Node.js перетворила
        JavaScript на мову загального використання з великою спільнотою розробників.
    </p>
    </>
  },
  "en": {
    "title1": "Version control system",
    "text1": <>
      <p>
        <strong>Version control system</strong> — a tool that allows you to simultaneously, without interfering with each other, to work on group projects.
      </p>
    </>,
    "title2": "Git",
    "textGit": <>
      <p>The main commands of Git</p>
      <ul>
        <li>git checkout (branch name) - go to another branch.</li>
        <li>git checkout -b (branch name) - create a new branch and go to it.</li>
        <li>git commit -m "message" - commit changes to the local repository.</li>
        <li>git add. - add all change files to the repository so that you can commit.</li>
        <li>git clone (repository address) - to close the repository.</li>
        <li>git status - check the status of the local repository.</li>
        <li>git push - upload changes to the server to be visible on github.</li>
        <li>git pull - take new data from the server.</li>
        <li>git branch - show a list of local branches (including the active one).</li>
        <li>git merge - name the branch in the current one.</li>
      </ul>
    </>,
    "title3": "HTML",
    "textHtml": <>
      <p>HTML is a markup language. That is, an HTML document will consist of some group of elements where
      each element will be defined (start and end) by a specific tag (For some elements the end tag
      is not required) That is,
      TAG is the name of the element written in angle brackets ( &lt;&gt;) Each HTML tag has its own unique name with
      certain syntax, which is written in Latin letters and is not case sensitive.
  </p>
      <p>HTML elements are divided into:</p>
      <ul>
        <li>Block elements (block)</li>
        <li>Line (built-in) elements (inline)</li>
        <li>Line (built-in) block (inline-block)</li>
      </ul>
    </>,
    "title4": "Nodejs and npm",
    "textNodeJs": <>
      <p>
        Node.js is an open source platform for high-performance networking applications written in
        JavaScript. If Javascript was previously used to process data in a user's browser, node.js provided
        ability to execute JavaScript scripts
        on the server and send the user the result of their execution. The Node.js platform has transformed
        JavaScript is a common language with a large community of developers.
    </p>
    </>
  }
}

const TextBlock = (props) => {
  return (
    <div className="work-books">
      <h3>{props.title}</h3>
      <div className="image-left">
        <img alt="cvs" src={props.image} />
        <div className="desc">{props.children}</div>
        <div className="clear-both"></div>
      </div>
    </div>
  )
}

const TextBlocks = (props) => {
  const { lang } = props;
  console.log(lang)
  return (
    <>
      <TextBlock title={translations[lang]["title1"]} image={cvsImg}>
        {translations[lang]["text1"]}
      </TextBlock>
      <TextBlock title={translations[lang]["title2"]} image={gitImg}>
        {translations[lang]["textGit"]}
      </TextBlock>
      <TextBlock title={translations[lang]["title3"]} image={htmlImg}>
        {translations[lang]["textHtml"]}
      </TextBlock>
      <TextBlock title={translations[lang]["title4"]} image={nodeImg}>
        {translations[lang]["textNodeJs"]}
      </TextBlock>
    </>
  )
}
export default TextBlocks