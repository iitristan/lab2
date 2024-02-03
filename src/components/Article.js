import React from 'react';
import './articlestyles.css';

export default function Article({ articleObj }) {
  const { author, date, title, randomLine, userImage, articleImage, articleTopic, readDuration } = articleObj;

  return (
    <div className='articleBox'>
      <div className='userInformation'>
        <img
          src={userImage}
          alt="User"
        />
        <div>
          <span className='articleAuthor'>{author} · </span><span className='articleDate'>{date}</span> 
          </div>
      </div>
      <div className='articleContent'>
        <div className='userContent'>
        <h2>{title}</h2>
        <p>{randomLine}</p>
        </div>
           <div className='articleImageStyle'> 
        <img
          src={articleImage}
          alt="Article"
          className='articleImage'
        />
      </div>
      </div>
      <div className='articleFooter'>
        <span className='topicContainer'>{articleTopic}</span>
        <span className='articleDuration'>{readDuration}</span>
        </div>
    </div>
  );
}
