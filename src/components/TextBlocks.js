import React from 'react';

const TextBlock = (props) => {
  return (
    <div className="work-books">
      <h3>{props.title}</h3>
      <img alt="cvs" src={props.image} />
      <div className="desc" dangerouslySetInnerHTML={props.text} />
    </div>
  )
}

const TextBlocks = (props) => {
  return (
    <>
      {props.posts.map(block => <TextBlock title={block.title} image={block.image} text={block.text} />)}
    </>
  )
}
export default TextBlocks