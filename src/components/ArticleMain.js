import React from 'react';
import Article from './Article';

const articleData = [{
  author: 'Tristan One',
  date: 'February 1, 2024',
  title: 'Article Title',
  randomLine: 'This is a random line ofom line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article content.',
  userImage: './image.JPG',
  articleImage: './image.JPG',
  articleTopic: 'Content Creation',
  readDuration: '5 min read',
  },{
  author: 'Tristan Two',
  date: 'February 1, 2024',
  title: 'Article Title',
  randomLine: 'This is a random line of text for the article content.',
  userImage: './image.JPG',
  articleImage: './image.JPG',
  articleTopic: 'AI',
  readDuration: '6 min read',
  },{
    author: 'Tristan Three',
    date: 'February 1, 2024',
    title: 'Article Title',
    randomLine: 'This is a random line ofom line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article content.',
    userImage: './image.JPG',
    articleImage: './image.JPG',
    articleTopic: 'Website Design',
    readDuration: '5 min read',
    },{
      author: 'Tristan Four',
      date: 'February 1, 2024',
      title: 'Article Title',
      randomLine: 'This is a random line of line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article content.',
      userImage: './image.JPG',
      articleImage: './image.JPG',
      articleTopic: 'Website Design',
      readDuration: '5 min read',
      },{
        author: 'Tristan Four',
        date: 'February 1, 2024',
        title: 'Article Title',
        randomLine: 'This is a random line of line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article content.',
        userImage: './image.JPG',
        articleImage: './image.JPG',
        articleTopic: 'Website Design',
        readDuration: '5 min read',
        },{
          author: 'Tristan Four',
          date: 'February 1, 2024',
          title: 'Article Title',
          randomLine: 'This is a random line of line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article contenthis is a random line of text for the article content.',
          userImage: './image.JPG',
          articleImage: './image.JPG',
          articleTopic: 'Website Design',
          readDuration: '5 min read',
          }
];

  export default function ArticleMain(){
    const articles = articleData;
    return (
      <ul className="articles">
        {articles.map((article) => (
          <Article articleObj={article} key={article.name}/>
        ))}
      </ul>
    );
  };

