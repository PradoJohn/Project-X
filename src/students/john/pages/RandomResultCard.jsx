import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const names = ["Sean  McCarthy", "Joshua  Minchew",
"Anthony  Quinones", "Robert  Toth",
"Joshua  Kim", "Mason  Dykstra",
"Matthew  Lewis", "Derek  Marion",
"Caleb  Davis", "Eric  Mitchell",
"Megan  Buck", "Andrew  Hagstrom",
"John Anthony  Prado", "Halsey  Filbin",
"Kendra  Moore", "Michael  Termotto",
"Anna  Scriven", "Cody  Hardy",
"Matthew  Peterson", "Frank  Gary",
"Phu  Bui", "Bryan  Bartell",
"Claireese  Underwood", "Chad  Martin",
"Aaron  Tanner", "Kate  Fischer"];

const RandomResultCard = () => {
  const [randomName, setRandomName] = useState('');
  const [img, setImage] = useState("")

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
    setImage('src/images/img1.gif');
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <div>
                {img && <img src={img} alt="Random Image" className='img1 mb-3'/>}
              </div>
              <h1 className="card-text text-center">{randomName}</h1>
            </Card.Body>
            <Card.Footer className='d-flex justify-center'>
              <button className="btn btn-secondary" onClick={getRandomName}>Generate</button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </>
  );
};

export default RandomResultCard;
