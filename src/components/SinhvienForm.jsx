import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addSinhvien, updateSinhvien } from "../api/sinhvienAPI";

export default function SinhvienForm({
  showModal,
  onClose,
  sinhvien,
  loadSinhviens,
}) {
  const [formData, setFormData] = useState({
    soCmnd: "",
    hoTen: "",
    email: "",
    soDt: "",
    diaChi: "",
  });
  useEffect(() => {
    if (sinhvien) setFormData(sinhvien);
    else
      setFormData({
        soCmnd: "",
        hoTen: "",
        email: "",
        soDT: "",
        diaChi: "",
      });
  }, [sinhvien]);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sinhvien) {
      await updateSinhvien(formData);
    } else {
      await addSinhvien(formData);
    }
    loadSinhviens();
    onClose();
  };
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {sinhvien ? "Sửa sinh viên" : "Thêm sinh viên"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="soCmnd">
            <Form.Label>Số CMND</Form.Label>
            <Form.Control
              type="text"
              name="soCmnd"
              value={formData.soCmnd || ""}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="hoTen">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              name="hoTen"
              value={formData.hoTen || ""}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="soDt">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="soDt"
              value={formData.soDt || ""}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="diaChi">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              name="diaChi"
              value={formData.diaChi || ""}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Lưu
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
