import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import StudentCard from '../components/StudentCard';
import StudentData from '../json_data/students.json';

// Import individual images directly
import UserImage from '../images/user.jpg';  // default image
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';

// Add more images as needed    ****image imports needs refactoring eventually, unless image count is fixed. 
const imageMap = {
  'img1.jpg': Img1,
  'img2.jpg': Img2,
};

function Students() {
  const frontImage =
    'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ytoIiv_i_400x400/original.png?1571443710';

  const [shuffledData, setShuffledData] = useState(StudentData);

  const shuffleCards = () => {
    const newShuffledData = [...StudentData].sort(() => Math.random() - 0.6);
    setShuffledData(newShuffledData);
  };

  useEffect(() => {
    shuffleCards();
  }, []); 

  return (
    <>
      <div className='student-page'>
        <div className='d-flex mb-3'>
          {/* Shuffle Button */}
          <Button
            variant='primary'
            className='btn-shuffle px-3 mt-3 text-white'
            style={{ background: '#03095f', fontWeight: 'bold' }}
            onClick={shuffleCards}
          >
            Shuffle Deck
          </Button>

          {/* Page Title */}
          <h1
            className='text-center'
            style={{
              paddingLeft: '300px',
              textShadow: '2px 2px 5px #03095f',
            }}
          >
            Victor Students
          </h1>
        </div>

        {/* Decks */}
        <Row className='card-row'>
          {shuffledData.map((student, idx) => {
            // Check if the student has an image
            const studentImage = imageMap[student.image];

            // If no image found, use a default image
            if (!studentImage) {
              return (
                <StudentCard
                  key={idx}
                  image={UserImage}
                  name={student.name}
                  gh={student.github}
                  frontCard={frontImage}
                />
              );
            }

            return (
              <StudentCard
                key={idx}
                image={studentImage}
                name={student.name}
                gh={student.github}
                frontCard={frontImage}
              />
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Students;
