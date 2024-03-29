import React from 'react';
import './articlestyles.css';
import { useTheme } from './ThemeContext';
import styled from 'styled-components';


export default function Article({ articleObj }) {
  const { author, date, title, randomLine, userImage, articleImage, articleTopic, readDuration } = articleObj;
  const ThemedComponent = styled.div`
  background-color: ${({ theme }) => theme === 'dark' ? '#121212' : '#FFFFFF'};
  color: ${({ theme }) => theme === 'dark' ? '#FFFFFF' : '#000000'};
`;
const { theme } = useTheme();

  return (
    <ThemedComponent theme={theme}>
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
    </ThemedComponent>
  );
}
