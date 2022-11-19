import React from 'react';

const Footer = () =>
{
    return(
    <div>
        <div className="bg-secondary ">
        <div className="container">
          <div className="block_content">
            <div>ĐỔI TRẢ HÀNG TRONG VÒNG 30 NGÀY</div>
            <div>GIAO HÀNG TOÀN QUỐC</div>
            <div>THANH TOÁN KHI NHẬN HÀNG</div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row mt-5 flex-wrap">
            <div className="col-4">
              <h5>sản phẩm</h5>
              <ul className="footer_list">
                <li className="footer_list-item">điện thoại</li>
                <li className="footer_list-item">Laptop</li>
                <li className="footer_list-item">điện thoại</li>
                <li className="footer_list-item">điện thoại</li>
                <li className="footer_list-item">điện thoại</li>
              </ul>
            </div>
            <div className="col-4">
              <h5>CHÍNH SÁCH &amp; HỖ TRỢ</h5>
              <ul className="footer_list">
                <li className="footer_list-item">Hướng dẫn mua hàng</li>
                <li className="footer_list-item">Hướng dẫn mua trả góp</li>
                <li className="footer_list-item">Tính sách giao hàng</li>
                <li className="footer_list-item">Quy chế hoạt động</li>
                <li className="footer_list-item">Hóa đơn điện tử</li>
              </ul>
            </div>
            <div className="col-4">
              <h5>LIÊN HỆ</h5>
              <ul className="footer_list">
                <li className="footer_list-item">151 Hồ Bá Kiện, P15, Q10, HCM</li>
                <li className="footer_list-item">SDT:0126 922 0162</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-4">
              <h5>DỊCH VỤ</h5>
              <ul className="footer_list">
                <li className="footer_list-item">chăm sóc khách hàng</li>
                <li className="footer_list-item">bảo hiểm điện thoại</li>
                <li className="footer_list-item">thanh toán</li>
                <li className="footer_list-item">sửa chữa bảo hành</li>
              </ul>
            </div>
            <div className="col-4">
              <h5>CHÍNH SÁCH &amp; HỖ TRỢ</h5>
              <ul className="footer_contact">
                <li className="footer_contact-item">0126 922 0162</li>
                <li className="footer_contact-item">KHIẾU NẠI &amp; CHĂM SÓC KHÁCH HÀNG
                  (Từ 7h - 21h30)</li>
                <li className="footer_contact-item mt-2">0126 922 0162</li>
                <li className="footer_contact-item">TƯ VẤN &amp; MUA HÀNG ONLINE
                  MUA TRẢ GÓP ONLINE
                  (Từ 7h - 21h30)</li>
              </ul>
            </div>
            <div className="col-4">
              <h5>HÌNH THỨC THANH TOÁN </h5>
              <img width="70%" className="payment_img" src="http://mauweb.monamedia.net/vienthonga/wp-content/uploads/2017/12/thanhtoan-img.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Footer