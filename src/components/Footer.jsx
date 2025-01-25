import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      className="mt-5 bg-dark text-white text-center py-3"
      style={{ position: "absolute", bottom: "0px", width: "100%" }}
    >
      <Container>
        <Row>
          <Col> &copy; 2025 Sinhvien CRUD App</Col>
        </Row>
      </Container>
    </footer>
  );
}
