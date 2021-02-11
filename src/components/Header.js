import React from 'react';

function Header(props) {
    return (
        <>
            <div className="pre-menu">
                <h1 id="title">{props.title}</h1>
            </div>
            <div className="menu">
                {props.menu.map(item => <a href={item.link}>{item.text}</a>)}
            </div>
        </>
    );
}
export default Header