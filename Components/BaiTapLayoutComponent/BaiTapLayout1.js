import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import Laptop from './Laptop'
import Promotion from './Promotion'
import Smartphone from './Smartphone'

export default class BaiTapLayout1 extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <Smartphone/>
                <Laptop/>
                <Promotion/>
            </div>
        )
    }
}
