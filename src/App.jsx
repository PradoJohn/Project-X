
/****Main Imports***/
// import App from "../../front-end-app/src/App";
import './App.css'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

/****Navigation Imports***/
import Header from './Header.jsx'
import Students from './Students.jsx'
import Assignments from './Assignments.jsx'
import Home from './Home.jsx'


/****Assignment Imports***/
import Hangman from './assignments/Hangman.jsx'
import GuessingGame from './assignments/GuessingGame.jsx'
import Pokemon from './assignments/Pokemon.jsx'
// import ToDoList from './pages/ToDoList.jsx'
// import MuteButton from './pages/MuteButton.jsx'
// import Whackamole from './pages/Whackamole.jsx'

/****Profile Imports***/
import Jprofile from './students/john/Jprofile.jsx'
import Bprofile from './students/bryan/Bprofile.jsx'
import Cprofile from './students/chad/Cprofile.jsx'


function App(){
  let Content
  console.log(window.location)
  switch (window.location.pathname) {
    case '/hangman':
      Content = Hangman
      break;
    // case '/whackamole':
    //   Content = Whackamole
    //   break;
    // case '/mute-button':
    //   Content = MuteButton
    //   break;
    case '/pokemon':
      Content = Pokemon
      break;
    // case '/to-do-list':
    //   Content = ToDoList
    //   break;
    case '/guessing-game':
      Content = GuessingGame
      break;
    case '/':
      Content = Home
      break;
    case '/students':
      Content = Students
      break;
    case '/assignments':
      Content = Assignments
      break;
    case '/john':
      Content = Jprofile
      break;
    case '/bryan':
      Content = Bprofile
      break;
    case '/chad':
      Content = Cprofile
      break;
    default:
      break;
      
  }

  return (
    <>
    <Container fluid>
      {/* Row for Navigation Component */}
      <Row>
          <Header/>
      </Row>
      <Row>
        <Content/>
      </Row>
    </Container>
    </>
  );
}

export default App