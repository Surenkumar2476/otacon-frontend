import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '/home/surenkumar/SurenkumarWF/gitrepo/otacon-frontend/app/src/Components/HomePage/HomePage.css';
// import AnotherPage from '/home/surenkumar/SurenkumarWF/gitrepo/otacon-frontend/app/src/Components/AnotherPage/AnotherPage';

function HomePage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
    if (cardIndex == 0){
      anotherFunction();
    }
    else if (cardIndex == 1){
      oneFunction();
    }
    else {
      secondFunction();
    }
    
  };

  const anotherFunction = () => {
    // Your logic for the another function goes here
    console.log("Another function called");
  };

  const oneFunction = () => {
    // Your logic for the another function goes here
    console.log("one function called");
  };

  const secondFunction = () => {
    // Your logic for the another function goes here
    console.log("second function called");
  };

  return (
      <div className="HomePage">
        <h1>Zabbix Production Site Details</h1>
        <div className="card-container">
          <Card
            name="Domains"
            path="/domain"
            index={0}
            selected={selectedCard === 0}
            onClick={() => handleCardClick(0)}
          />
          <Card
            name="Deployments"
            path="/deployment"
            index={1}
            selected={selectedCard === 1}
            onClick={() => handleCardClick(1)}
          />
          <Card
            name="Email-Deployments"
            path="/email"
            index={2}
            selected={selectedCard === 2}
            onClick={() => handleCardClick(2)}
          />
        </div>      
      </div>

  );
}

const Card = ({ path, name, selected, onClick }) => {    {/*name replaced index*/}
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
      {/* {name} */}
      <Link to={path}>{name}</Link>
      {/* Card {index + 1}      this line is used for the card name default */}
      
    </div>
  );
};

export default HomePage;
