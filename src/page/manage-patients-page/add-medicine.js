import React, { useState } from 'react';


const AddMedicine = () => {
    const [medicineInfo, setMedicineInfo] = useState({
        name: '',
        code: '',
        manufactureDate: '',
        expiryDate: '',
        uses: '',
        image: '',
        quantity: '',
        supplier: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMedicineInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(medicineInfo);
    };

    return (
        <div style={{ width: '100%', height: '100%', background: 'white', borderRadius: 20 }} className="add-medicine">
            <form onSubmit={handleSubmit}>
                <div style={{ width: '100%', color: '#303972', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }} className="medicine-info">
                    <label htmlFor="name">Tên thuốc:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={medicineInfo.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="code">Mã số thuốc:</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={medicineInfo.code}
                        onChange={handleChange}
                    />

                    <label htmlFor="manufactureDate">Ngày sản xuất:</label>
                    <input
                        type="date"
                        id="manufactureDate"
                        name="manufactureDate"
                        value={medicineInfo.manufactureDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="expiryDate">Hạn sử dụng:</label>
                    <input
                        type="date"
                        id="expiryDate"
                        name="expiryDate"
                        value={medicineInfo.expiryDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="uses">Công dụng:</label>
                    <textarea
                        id="uses"
                        name="uses"
                        value={medicineInfo.uses}
                        onChange={handleChange}
                    />

                    <label htmlFor="image">Hình ảnh:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />

                    <label htmlFor="quantity">Số lượng:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={medicineInfo.quantity}
                        onChange={handleChange}
                    />

                    <label htmlFor="supplier">Nhà cung cấp:</label>
                    <input
                        type="text"
                        id="supplier"
                        name="supplier"
                        value={medicineInfo.supplier}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Lưu nháp</button>
                <button type="submit">Gửi</button>
            </form>
        </div>
    );
};

export default AddMedicine;