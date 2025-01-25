import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="text-center"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Card.Body>
          <Card.Title>Chào mừng đến với Sinh viên CRUD</Card.Title>
          <Card.Text>Quản lý thông tin sinh viên dễ dàng với CRUD</Card.Text>
          <Button variant="primary" as={Link} to="/sinhvien">
            Xem danh sách sinh viên
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
