
/****Bootstrap import*****/
import { 
  Container,
  Card,
  Row,
  Col,
  Button
 } from 'react-bootstrap';


function Assignments(){


  const assignmentData = [
    {
      title: 'Hangman',
      description: 'Word-guessing game',
      playLink: '/hangman',
      collaborators: ['Bryan', 'Chad', 'John'],
    },
    {
      title: 'Pokemon',
      description: 'Play around with Pokemon API.',
      playLink: '/pokemon',
      collaborators: ['Bryan', 'Mason'],
    },
    {
      title: 'Guess A Number',
      description: 'Guess a Number between 100.',
      playLink: '/guessing-game',
      collaborators: ['John', 'Kate'],
    },
    {
      title: 'Pokemon',
      description: 'Play around with Pokemon API.',
      playLink: '/pokemon',
      collaborators: ['Bryan', 'Mason'],
    },
  ];

  return (
    <>
    <Container fluid  >
      <Row>
        <h1 className='flex justify-center mb-3'>Assignment Page</h1>
        {assignmentData.map((assignment, index) => (
          <Col xl= {3} lg ={4} md={6} key={index}>
              <Card  className="mb-4 text-center">
                <Card.Body>
                  <Card.Title>{assignment.title}</Card.Title>
                  <Card.Text>{assignment.description}</Card.Text>
                  <Button variant="success" href={assignment.playLink}>
                    Play
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <div>
                    Collaborators
                  </div>
                  <div>
                    {assignment.collaborators.map((collaborator, idx) => (
                      <Button key={idx} variant="secondary me-1 py-0" href={`/${collaborator.toLowerCase()}`}>
                        {collaborator}
                      </Button>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
          </Col>
          ))}
      </Row>
    </Container>
    
    </>
  );
}

export default Assignments