import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

<Button as={Link} to="/add-student">
  Add Student
</Button>

const Navbar = () => {
    return (
        <BootstrapNavbar expand="lg" className="bg-secondary mt-2 rounded-5">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    Employee Management System
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/"}>
                            students
                        </Nav.Link>

                        <Nav.Link as={NavLink} to={"/add"}>
                            add
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;