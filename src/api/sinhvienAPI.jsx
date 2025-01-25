import axios from "axios";

const API_URL = "https://localhost:7105/api/SinhvienAPI";

export const getSinhviens = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const addSinhvien = async (sinhvien) => {
  await axios.post(API_URL, sinhvien);
};
export const updateSinhvien = async (sinhvien) => {
  await axios.put(`${API_URL}/${sinhvien.soCmnd}`, sinhvien);
};
export const deleteSinhvien = async (soCmnd) => {
  await axios.delete(`${API_URL}/${soCmnd}`);
};
