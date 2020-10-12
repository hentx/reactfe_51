import React, { Component } from 'react'

export default class DemoListAndKey extends Component {
    danhSachKhoaHoc = ["Nodejs","Reactjs","Vuejs",]

    renderDanhSachKhoaHoc = () =>{
       return this.danhSachKhoaHoc.map((khoaHoc , index)=>{
        return <li>{khoaHoc}</li>;
        });
    };

    //Nâng cao
    // renderDanhSachKhoaHoc = () => this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>)

    render() {
        return (
            <div>
                <h2>List And Key</h2>
                <h3>Danh Sách Khóa Học</h3>
                <ul>
                    {this.renderDanhSachKhoaHoc()}
                </ul>
            </div>
        )
    }
}
