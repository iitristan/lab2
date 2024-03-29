import logo from './logo.svg';
import './App.css'; 
import Header from './components/header';
import ArticleMain from './components/ArticleMain';
import Sidebar from './components/sidebar';
import RecommendedTopics from './components/RecommendedTopics';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const profileImageSrc = './image.JPG'

  return (
    <ThemeProvider>
    <div className="App">
      <Header profileImage={profileImageSrc}/>
      <div className='mainContainer'>
      <div className="articleContainer">
      <ArticleMain />
      </div>
      <div className="sidebarContainer">
      <Sidebar />
      </div>
      </div>
    </div>
    </ ThemeProvider>
  );
}

export default App;
