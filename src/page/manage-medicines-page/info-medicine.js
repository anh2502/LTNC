import React from "react";
import '../../App.css'
import { useState } from "react";


const MedicineInfo = () => {
    const [medicineInfo, setMedicineInfo] = useState({
        name: 'Paracetamol',
        code: '123456',
        manufactureDate: '2023-12-24',
        expiryDate: '2026-12-24',
        uses: 'Giảm đau, hạ sốt',
        image: 'https://example.com/paracetamol.jpg',
        quantity: '100',
        supplier: 'Công ty Dược phẩm ABC',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMedicineInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="paracetamol-info">
            <h1>Thông tin thuốc Paracetamol</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Tên thuốc:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={medicineInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="code">Mã số thuốc:</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={medicineInfo.code}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="manufactureDate">Ngày sản xuất:</label>
                    <input
                        type="date"
                        id="manufactureDate"
                        name="manufactureDate"
                        value={medicineInfo.manufactureDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Hạn sử dụng:</label>
                    <input
                        type="date"
                        id="expiryDate"
                        name="expiryDate"
                        value={medicineInfo.expiryDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uses">Công dụng:</label>
                    <textarea
                        id="uses"
                        name="uses"
                        value={medicineInfo.uses}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Hình ảnh:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Số lượng:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={medicineInfo.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="supplier">Nhà cung cấp:</label>
                    <input
                        type="text"
                        id="supplier"
                        name="supplier"
                        value={medicineInfo.supplier}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Lưu</button>
            </form>
        </div>
    );
};

export default MedicineInfo;