import React, { Component } from 'react'
import './index.css'

import Header from './Header/Header'
import Content from './Content/Content'

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <Content /> 
            </div>
        )
    }
}

export default HomePage
