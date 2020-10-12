import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
//state là trạng thái của component, lưu lại các giá trị của component
    state = {
        isLogin: false,
    };

    /*isLogin là thuộc tính của class. 
    True: đã login => hiện tên người dùng, 
    False: chưa login => hiện nút login*/

    // isLogin = false; => cách này sai vì không có render lại

    // Phương thức của class 
    handleLogin = () => {
        console.log("run");
        this.state.isLogin = true; //=> cách này sai vì không có render lại
        this.setState({
            isLogin: true,
        });
    }

    renderLogin = () => {
        if (this.state.isLogin) {
            //Hiện tên người dùng
            return <p>Nguyễn Bảo Hoàng</p>

        } else {
            return <button onClick={this.handleLogin}>Login</button>
        }
    }

    //render là phương thức cập nhật lại giao diện
    render() {
        console.log("run render")
        return (
            <div>
                <h2>Conditional And State</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
