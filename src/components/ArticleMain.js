import React from "react";
import Article from "./Article";

const articleData = [
  {
    author: "Elijah Q.",
    date: "February 3, 2024",
    title: "Journey into the Tech Wonderland",
    randomLine:
      "Unraveling the magic of technology. — In a world dominated by innovation, I embarked on a journey into the heart of technology. From virtual reality realms to the bustling streets of Silicon Valley, the possibilities are endless.",
    userImage:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Tech Adventures",
    readDuration: "7 min read",
  },
  {
    author: "Layla R.",
    date: "February 4, 2024",
    title: "The Art of Mindful Living",
    randomLine:
      "Finding peace in the chaos. — In the hustle and bustle of everyday life, its essential to embrace mindfulness. Join me on a journey to discover the art of living in the present moment and finding tranquility amid the chaos.",
    userImage:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleImage:
      "https://images.unsplash.com/photo-1617704716344-8d987ac681a4?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Mindful Living",
    readDuration: "6 min read",
  },
  {
    author: "Aria B.",
    date: "June 5, 2023",
    title: "Coding Chronicles: Behind the Screen",
    randomLine:
      "Decoding the language of the digital world. — Venture with me into the intricate world of coding and programming. Uncover the stories behind the lines of code that power our favorite apps and websites.",
    userImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Coding Adventures",
    readDuration: "5 min read",
  },
  {
    author: "Tristan I.",
    date: "May 20, 2023",
    title: "Tomorrows Tech Today",
    randomLine:
      "A glimpse into the future of technology. — From AI marvels to groundbreaking inventions, join me on a journey to uncover the technologies that will redefine our lives tomorrow. The future is now, and its fascinating.",
    userImage: "./image.JPG",
    articleImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Future Tech",
    readDuration: "7 min read",
  },
  {
    author: "Brigette I.",
    date: "April 10, 2023",
    title: "Virtual Realms: Beyond the Horizon",
    randomLine:
      "Immersive experiences in the digital realm. — Stepping into the virtual frontier, I delve into the realms of augmented reality and virtual worlds. Discover the endless possibilities and transformative power of digital landscapes.",
    userImage:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleImage:
      "https://images.unsplash.com/photo-1538388149542-5e24932d11a8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Virtual Exploration",
    readDuration: "8 min read",
  },
  {
    author: "Hyung S.",
    date: "March 15, 2023",
    title: "Innovation at the Speed of Light",
    randomLine:
      "Navigating the ever-evolving tech landscape. — The world of technology is a fast-paced adventure, with breakthroughs around every corner. Join me in exploring the latest innovations that shape our future.",
    userImage: "https://i.mydramalist.com/v8Rd2_5c.jpg",
    articleImage:
      "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    articleTopic: "Tech Exploration",
    readDuration: "6 min read",
  },
];

export default function ArticleMain() {
  const articles = articleData;
  return (
    <ul className="articles">
      {articles.map((article) => (
        <Article articleObj={article} key={article.name} />
      ))}
    </ul>
  );
}
