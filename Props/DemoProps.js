import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    state ={
        ten : "Hoàng",
        lop : 51,
    }
    render() {
        return (
            <div>
                <h2>Props</h2>
                <FunctionProps 
                //Cách truyền Props trong reactjs
                hoVaTen={this.state.ten}
                lop={this.state.lop}
                />

                <ClassProps
                hoVaTen={this.state.ten}
                lop={this.state.lop}
                />
            </div>
        )
    }
}
