import React, { useState, useEffect } from "react";
import '../../App.css'
import styled from "@emotion/styled";
import api from "../../api";
import image from "../../img/doctor-icon.webp"; // Import the avatar image

const ViewMore = styled('div')(
  ({ active }) => ({
    display: active ? 'none' : 'flex',
  })
);

function createApprove(image, name, time, content) {
  return { image, name, time, content };
}

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  // const image = '/img/doctor-icon.webp';
  const [approves, setApproves] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get(`/leave-apps/`, {
        params: {
          pageNo: 0,
          pageSize: 30,
          sortBy: 'id',
          searchFlag: false
        }
      });
      setApproves(response.data.data);
      return response.data; // Trả về dữ liệu nhận được từ API nếu cần
    } catch (error) {
      console.error('Error fetching data:', error);
      // Xử lý lỗi nếu cần
    }
  };

  const handleApprove = async (approveId, status) => {
    try {
      const response = await api.patch(`/leave-apps/${approveId}`, {
        status: status
      });
      // Find the approved item in the state and update its status
      const updatedApproves = approves.map(approve => {
        if (approve.id === approveId) {
          return { ...approve, status: status };
        }
        return approve;
      });
      setApproves(updatedApproves);
    } catch (error) {
      console.error('Error updating approval status:', error);
      // Xử lý lỗi nếu cần
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <div className="approve">
        <h1 className="approve-title" style={{ width: '92.75%' }}>Phê duyệt xin nghỉ</h1>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input />
        </div>
        <div className="approve-list-items">
          {
            approves.map((approve, index) => (
              <div key={index} className="bg-approve">
                <div className="avatar-approve">
                  <img className="avt" src={image} alt="avatar" />
                </div>
                <div className="content-approve">
                  <div className="name">{approve.employeeName}</div>
                  <div className="time">{approve.timeOff}</div>
                </div>

                <div className="content-item-approve">Lý do: {approve.reason}</div>
                <div className="content-item-approve">
                  {approve.status === "PENDING" ? "Đang chờ" : approve.status === "ACCEPT" ? "Đã duyệt" : "Từ chối"}
                </div>



                <div className="button-approve">
                  <button className="agree" onClick={() => handleApprove(approve.id, 'ACCEPT')}>
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button className="notagree" onClick={() => handleApprove(approve.id, 'REFUSE')}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
