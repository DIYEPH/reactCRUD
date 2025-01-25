import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavbarBrand as={Link} to="/">
          Sinhvien CRUD
        </NavbarBrand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/sinhvien">
            Danh sách sinh viên
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}
