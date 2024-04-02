import React from 'react';
import {GlobalStateProvider, useGlobalState } from './GlobalStateContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoTabs from './form/Tabs';
import CVPreview from './form/components/Cvpreview';

   
function App() {

  return (
    <div>
      <GlobalStateProvider>
        <header>
          <div>
            <h1>CV App</h1>
          </div>
        </header>
        <main>
          <Container id='outer' fluid="md">
            <Row>
              <AppContent></AppContent>
            </Row>
          </Container>
        </main>
      </GlobalStateProvider>
    </div>
  )
}
function AppContent() {
  const { person } = useGlobalState();

  return (
    <>
      <Col>
        <InfoTabs/>
      </Col>
      <Col>
        <CVPreview person={person}></CVPreview>
      </Col>
    </>
)}
export default App
