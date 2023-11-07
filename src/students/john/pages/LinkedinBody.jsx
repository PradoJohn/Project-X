
import React, { useState } from 'react';

/*****Bootstrap import ****/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/*****React Icon import ****/
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import RandomResultCard from './RandomResultCard';

function LinkedinBody() {
  

  return (
     <>
      <Container>
      {/* First Row */}
        <Row className="mb-3">
          <Col sm={4}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is the content of Card 1. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is the content of Card 2. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is the content of Card 3. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="mb-3">
          <Col sm={6}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is the content of Card 4. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 5</Card.Title>
                <Card.Text>
                  This is the content of Card 5. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third Row */}
        <Row className="mb-3">
          <Col sm={3}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 6</Card.Title>
                <Card.Text>
                  This is the content of Card 6. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 7</Card.Title>
                <Card.Text>
                  This is the content of Card 7. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 8</Card.Title>
                <Card.Text>
                  This is the content of Card 8. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="rounded" style={{ border: 'none' }}>
              <Card.Body>
                <Card.Title>Card 9</Card.Title>
                <Card.Text>
                  This is the content of Card 9. You can add more details here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <RandomResultCard/>
      </Container>
          
     </>

  );
}

export default LinkedinBody;
