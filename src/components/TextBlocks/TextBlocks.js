import React from 'react';
import cvsImg from "./images/cvs.jpg";
import gitImg from "./images/git.jpeg";
import htmlImg from "./images/html.jpg";
import nodeImg from "./images/node.jpeg";

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

const TextBlocks = () => {
  return (
    <>
      <TextBlock title="Система керування версіями" image={cvsImg}>
        <p>
          <strong>Система керування версіями</strong> — інструмент, який дозволяє одночасно, не заважаючи один одному, проводити роботу над груповими проектами.
        </p>
      </TextBlock>
      <TextBlock title="Git" image={gitImg}>
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
      </TextBlock>
      <TextBlock title="HTML" image={htmlImg}>
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
      </TextBlock>
      <TextBlock title="Nodejs and npm" image={nodeImg}>
        <p>
          Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою
          JavaScript.Якщо раніше Javascript застосовувався для обробки даних в браузері користувача, то node.js надав
          можливість виконувати JavaScript-скрипти
          на сервері та відправляти користувачеві результат їхнього виконання. Платформа Node.js перетворила
          JavaScript на мову загального використання з великою спільнотою розробників.
        </p>
      </TextBlock>
    </>
  )
}
export default TextBlocks