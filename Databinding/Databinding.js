import React, { Component } from 'react'

export default class Databinding extends Component {

    hocVien = {

        //Thuộc tính của lớp đối tượng => Sử dụng được ở nhiều phương thức trong lớp đối tượng
        ma: 1,
        avatar: 'https://picsum.photos/150/150',
        tenHocVien: 'Nguyễn Văn Tèo'
    }

    //Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng

    renderHocVien = () => {
        return <div classname="card text-white bg-primary">
            <img classname="card-img-top" src={this.hocVien.avatar} alt />
            <div classname="card-body">
                <h4 classname="card-title">{this.hocVien.tenHocVien}</h4>
                <p classname="card-text">{this.hocVien.ma}</p>
            </div>
        </div>

    }

    render() {
        //binding data là biến
        let title = "CYBERSOFT";
        let imgSrc = 'https://picsum.photos/200/200';
        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        }

        return (
            <div className="container">
                <div id="title">{title}</div>

                <div className="w-25">
                    <img src={imgSrc} />
                </div>

                <input className="w-25 form-control" value={title} />

                databinding

                {renderImg()}

                <div>
                    <ul>
                        <li>Mã học viên: {this.hocVien.ma}</li>
                        <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                        <li>Hình học viên: <img src={this.hocVien.avatar} width="200" height="200" /></li>
                    </ul>
                    {this.renderHocVien()}
                </div>
            </div>


        )
    }
}
