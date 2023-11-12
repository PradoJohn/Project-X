// StudentCard.js

import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';


function StudentCard({ image, name, gh, frontCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const openGithubInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="student-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side of the card */}
        <Card className="card-front" onClick={handleClick}>
          <Card.Img variant="top" src={frontCard} className='front'/>
        </Card>

        {/* Back side of the card */}
        <Card onClick={handleClick}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className='links'>
              <Button><FaGithub size={25} onClick={() => openGithubInNewTab(gh)}/></Button>
              <Button><FaLinkedin size={25} color='blue' onClick={() => openGithubInNewTab(gh)}/></Button>
            </div>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </div>
  );
}

export default StudentCard;
