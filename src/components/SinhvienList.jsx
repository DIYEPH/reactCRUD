import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { deleteSinhvien, getSinhviens } from "../api/sinhvienAPI";
import { toast } from "react-toastify";
import SinhvienForm from "./SinhvienForm";

export default function SinhvienList() {
  const [sinhviens, setSinhviens] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSinhvien, setSelectedSinhvien] = useState(null);
  useEffect(() => {
    loadSinhviens();
  }, []);
  const loadSinhviens = async () => {
    const data = await getSinhviens();
    setSinhviens(data);
    setSelectedSinhvien(null);
  };
  const handleDelete = async (soCmnd) => {
    try {
      await deleteSinhvien(soCmnd);
      toast.success("Xóa sinh viên thành công!");
      loadSinhviens();
    } catch (error) {
      toast.error("Lỗi khi xóa sinh viên!");
    }
  };
  const handleShowModal = (sinhvien) => {
    setSelectedSinhvien(sinhvien);
    setShowModal(true);
  };
  const handelCloseModal = () => {
    setShowModal(false);
    setSelectedSinhvien(null);
  };
  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Thêm sinh viên
      </Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Số CMND</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa Chỉ</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {sinhviens.map((sinhvien) => {
            return (
              <tr key={sinhvien.soCmnd}>
                <td>{sinhvien.soCmnd}</td>
                <td>{sinhvien.hoTen}</td>
                <td>{sinhvien.email}</td>
                <td>{sinhvien.soDt}</td>
                <td>{sinhvien.diaChi}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleShowModal(sinhvien)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(sinhvien.soCmnd)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <SinhvienForm
        showModal={showModal}
        loadSinhviens={loadSinhviens}
        sinhvien={selectedSinhvien}
        onClose={handelCloseModal}
      />
    </div>
  );
}
