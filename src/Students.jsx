
/*****Bootstrap Import******/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Student from './json_data/students.json'

/*****Image import*****/
import userImage from './images/user.jpg'

function Students(){
  return (
    <>
    <Container fluid>
      <h1 className='flex justify-center mb-3'>Student Page</h1>
      <Row>
        {Student.map((student, index) => (
            <Col xxl={2} lg={3} md={4} sm={6} key={index} className='d-flex justify-content-evenly'>
              <Card style={{ width: '18rem' }} className='shadow mb-5'>
                <Card.Img variant="top" src={userImage} className='d-none d-sm-none d-md-block'/>
                <Card.Body>
                  <Card.Title>{student.name}</Card.Title>
                  <Card.Text className="">
                    {student.description}
                  </Card.Text>
                  <Button variant="info" href={student.profileLink}>
                    Go to Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
    </>
  );
}

export default Students