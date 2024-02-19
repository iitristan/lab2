import React from "react";
import StaffPicks from "./Staffpicks";
import RecommendedTopics from "./RecommendedTopics";
import FollowList from "./FollowList";
import Discover from "./discover";
import { useTheme } from './ThemeContext';
import styled from 'styled-components';

const picksData = [
  {
    picksImage: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    picksAuthor: "Isaac",
    picksTopic: "Cutting-Edge Innovations",
    picksTitle: "Revolutionizing Industries: Tech Advancements",
  },
  {
    picksImage: "https://www.allkpop.com/upload/2024/01/content/100912/web_data/allkpop_1704896426_20240110-seulgi.jpg",
    picksAuthor: "Irene",
    picksTopic: "Immersive Technologies",
    picksTitle: "Journey into Virtual Realms: A Technological Odyssey",
  },
  {
    picksImage: "https://kpopping.com/documents/74/1/231129-SEVENTEEN-Joshua-MAMA-Awards-2023-documents-1.jpeg?v=81950",
    picksAuthor: "Joshua",
    picksTopic: "Futuristic Marvels",
    picksTitle: "Tech Wonders: Bridging the Present and the Future",
  },
];

export default function Sidebar() {
  const picks = picksData;
  const ThemedComponent = styled.div`
  background-color: ${({ theme }) => theme === 'dark' ? '#121212' : '#FFFFFF'};
  color: ${({ theme }) => theme === 'dark' ? '#FFFFFF' : '#000000'};
`;
  const { theme } = useTheme();

  return (
    
<ThemedComponent theme={theme}>
    <div className="fullContainer">
      <div className="picksContainer">
        <h3>Staff Picks</h3>
        <ul className="staffpicksContainer">
          {picks.map((picks) => (
            <StaffPicks picksObj={picks} key={picks.name} />
          ))}
        </ul>
        <a href="#">See the full list</a>
      </div>
      <Discover />
      <RecommendedTopics />
      <FollowList />
      <div className="readingList">
      <span className="readingTitle">Reading List</span>
      <p>
        Click on any story to easily add it to your reading list or a custom
        list that you can share.
      </p>
      <a href="#">Help</a> <a href="#">Status</a> <a href="#">About</a> <a href="#">Careers</a> <a href="#">Blog</a> <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Text to speech</a> <a href="#">Teams</a>

      </div>
    </div>
    </ThemedComponent>
  );
}
