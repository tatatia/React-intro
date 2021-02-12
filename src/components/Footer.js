import React from 'react';

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="author" id="about-author">
          {props.author.name}<br />
          <a href={props.author.githubUrl} target="_blank">{props.author.githubUrl}</a>
          <br />
          <a href={props.author.originalDesignUrl}
            target="_blank">Оригінал дизайну</a>
        </div>
      </div>
      <div className="post-footer"></div>
    </>
  )
}
export default Footer