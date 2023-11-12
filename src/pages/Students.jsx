

/*****Bootstrap Import******/
import Row from 'react-bootstrap/Row';
import StudentCard from '../components/StudentCard';
import StudentData from '../json_data/students.json';
import React, { useState, useEffect } from 'react';

import UserImage from '../images/user.jpg'

function Students() {
  

  const frontImage = "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ytoIiv_i_400x400/original.png?1571443710"


  return (
    <>
      <div className='student-page'>
        <Row className='card-row'>
          {StudentData.map((student, idx) => (
            <StudentCard key={idx} image={UserImage} name={student.name} gh={student.github} frontCard={frontImage} />
            ))}
        </Row>
      </div>
    </>
  );
}

export default Students;
