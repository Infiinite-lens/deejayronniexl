import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Merch from "./components/pages/merch/Merch";
import Discography from "./components/pages/discography/Discography";
import ContactUs from "./components/pages/contactUs/ContactUs";
import Events from "./components/pages/events/Events";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <NavBar></NavBar>
            <Routes>
              <Route exact path="/" element ={<Home />} />
              <Route exact path="/merch" element ={<Merch />} />
              <Route exact path="/discography" element ={<Discography />} />
              <Route exact path="/contact-us" element ={<ContactUs />} />
              <Route exact path="/events" element ={<Events />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
