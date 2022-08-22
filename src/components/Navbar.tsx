import {
  Container,
  Nav,
  Navbar as NavbarBs
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-3"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        🛒{" "}
        <span
          style={{
            backgroundColor: "red",
            borderRadius: "100px",
            width: "24px",
            height: "24px",
            textAlign: "center",
            color: "white"
          }}
        >
          2
        </span>
      </Container>
    </NavbarBs>
  );
}

export { Navbar };
