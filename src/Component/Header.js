import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header(){
return(
<Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Movie</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/drame">Drame </Nav.Link>
                <Nav.Link href="/action">Action</Nav.Link>
                <Nav.Link href="/horreur">Horreur</Nav.Link>
                <Nav.Link href="/enfant">Enfant</Nav.Link>
            </Nav>
            </Container>
        </Navbar>);};

export default Header;