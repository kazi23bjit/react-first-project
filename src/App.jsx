import { Route, Routes } from "react-router-dom";
import "./App.css";
import SchedulePage from "./pages/schedulePage";
import HomePage from "./pages/homePage";
import Sidebar from "./components/Sidenav";
import { useState } from "react"; 


function App() {
  return(
        
      <Routes>
        
        <Route path="/" exact element={<HomePage/>}></Route>
        <Route path="/schedules" exact element={<SchedulePage/>}>
          
        </Route>
        
        </Routes>
    
  )
}
export default App;

{
  /* <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
        />
        <Card
          imgAlt="Card Image 2"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          buttonText="Learn More"
          link="card1"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          buttonText="Learn More"
          link="card1"
        />

        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />
      </div> */
}
