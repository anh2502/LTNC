import React, { useState, useEffect } from "react";
import '../../App.css'
import styled from "@emotion/styled";
import api from "../../api"

const ViewMore = styled('div')(
  ({ active }) => ({
    display: active ? 'none' : 'flex',
  })
)

function createApprove(image, name, time, content) {
  return { image, name, time, content };
}

// const approves = [
//   createApprove('https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp', 'Đào Duy Quý', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
//   createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
//   createApprove('https://wow.fan/cdn/shop/products/16838-image-1.jpg?v=1691398437', 'Tanjiro kamado', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
//   createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
//   createApprove('https://gamek.mediacdn.vn/133514250583805952/2020/4/11/photo-1-15865997326671867020841.jpg', 'Inosuke', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
//   createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
//   createApprove('https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp', 'Đào Duy Quý', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
// ]
// Gọi hàm fetchData để lấy dữ liệu từ API

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const image = 'https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp';
  const [approves, setApproves]=useState([])
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
        setApproves(response.data.data)
        return response.data; // Trả về dữ liệu nhận được từ API nếu cần
    } catch (error) {
        console.error('Error fetching data:', error);
        // Xử lý lỗi nếu cần
    }
  };
  useEffect(() => {
    fetchData();
  },[]);
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
                <img className="avt" src='https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg' alt="avatar" />
              </div>
              <div className="content-approve">
                <div className="name">{approve.employeeName}</div>
                <div className="time">{approve.timeOff}</div>
              </div>
              
              <div className="content-item-approve">Lý do:{approve.reason}
              </div>
              <div className="content-item-approve">{approve.status=="PENDING"? "Đang chờ":"Đã duyệt"}
              </div>
              
              <div className="button-approve">
                <button className="agree">
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className="notagree" >
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
