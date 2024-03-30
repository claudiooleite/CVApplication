
import './App.css'
import  FormGroupExample from "./form/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


    
function App() {
  

  return (
    <>
      <header>
        <div>
          <h1>CV App</h1>
        </div>
      </header>
      <main>
        <Container fluid="md">
          <Row>
            <Col>
              <FormGroupExample/>
            </Col>
            <Col>
              <form action="">Result</form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default App
