import React, { useState } from "react";
import '../../App.css'
import styled from "@emotion/styled";

const ViewMore = styled('div')(
  ({ active }) => ({
    display: active ? 'none' : 'flex',
  })
)

function createApprove(image, name, time, content) {
  return { image, name, time, content };
}

const approves = [
  createApprove('https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp', 'Đào Duy Quý', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
  createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
  createApprove('https://wow.fan/cdn/shop/products/16838-image-1.jpg?v=1691398437', 'Tanjiro kamado', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
  createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
  createApprove('https://gamek.mediacdn.vn/133514250583805952/2020/4/11/photo-1-15865997326671867020841.jpg', 'Inosuke', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
  createApprove('https://i.ebayimg.com/images/g/P14AAOSwsR9c4L90/s-l1600.jpg', 'Vegeta', 'Thứ hai, 25/03/2024', 'Nghỉ phép năm'),
  createApprove('https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp', 'Đào Duy Quý', 'Thứ hai, 25/03/2024', 'Nghỉ bệnh'),
]

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const image = 'https://image.coinpedia.org/wp-content/uploads/2024/03/04191010/pepe.webp';
  return (
    <div className="admin-page">
      <div className="info-admin">
        <div className="info-admin-head">
          <div className="orange-block bl"></div>
          <div className="yellow-block bl"></div>
        </div>
        <div className="info-admin-avatar">
          <img src={image} alt="admin" />
        </div>
        <h1 className="info-admin-name">quý pro vjp 123</h1>
        <div className="info-admin-container">
          <div>
            <p className="admin">Admin</p>
            <div className="info-admin-position"><i class="fa-solid fa-location-dot"></i> Trái Đất</div>
          </div>
          <div>
            <p className="phone">Số điện thoại</p>
            <div className="info-phone-position"><i class="fa-solid fa-phone"></i> 0373071643</div>
          </div>
          <div>
            <p className="email">Email</p>
            <div className="info-gmail-position"><i class="fa-solid fa-envelope"></i> daoduyquylop97@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="approve">
        <h1 className="approve-title">Phê duyệt xin nghỉ</h1>
        <div className="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input />
        </div>
        <div className="approve-list-items">
          {
            approves.map((approve) => (
              approve === approves[0] || approve === approves[1] || approve === approves[2] ?
                <ViewMore active={false}>
                  <div className="bg-approve">
                    <div className="avatar-approve">
                      <img className="avt" src={approve.image} alt="avatar" />
                    </div>
                    <div className="content-approve">
                      <div className="name">{approve.name}</div>
                      <div className="time">{approve.time}</div>
                    </div>
                    <div className="content-item-approve">{approve.content}</div>
                    <div className="button-approve">
                      <button className="notagree">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                      <button className="agree">
                        <i class="fa-solid fa-check"></i>
                      </button>
                    </div>
                  </div>
                </ViewMore> :
                <ViewMore active={!open}>
                  <div className="bg-approve">
                    <div className="avatar-approve">
                      <img className="avt" src={approve.image} alt="avatar" />
                    </div>
                    <div className="content-approve">
                      <div className="name">{approve.name}</div>
                      <div className="time">{approve.time}</div>
                    </div>
                    <div className="content-item-approve">{approve.content}</div>
                    <div className="button-approve">
                      <button className="notagree">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                      <button className="agree">
                        <i class="fa-solid fa-check"></i>
                      </button>
                    </div>
                  </div>
                </ViewMore>
            ))
          }
          <div className="button-viewmore-approve" onClick={() => setOpen(!open)}>
            {
              open === true ? <p className="close">Đóng</p> : <p className="more">Xem thêm</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
