import React, { Component } from 'react'
import './index.css'

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="top-left">
                        <span class>Sirius</span>
                    </div>
                </div>   
                <div className="top-bar-middle">
                    <ul className="top-list">
                        <li className="top-list-item">首页</li>
                        <li className="top-list-item">笔记</li>
                        <li className="top-list-item">生活</li>
                        <li className="top-list-item">留言</li>
                        <li className="top-list-item">Github</li>
                    </ul>
                </div>   
                <div className="top-bar-right">
                    <div className="top-right">
                        <i class="fas fa-moon"></i>
                        <img class="head" src="https://lh3.googleusercontent.com/ya_G4Q6Jzr7mLRiTKW5rNQrGmy4wR0Vbfv-8NYMWFmXubS408BoWy1wctM1oLCwAASkqVw=s85"/>
                    </div>
                </div>                   
            </div>
        )
    }
}

export default TopBar