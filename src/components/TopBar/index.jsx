import React, { Component } from 'react'
import MyScroll from '../scroll/srcoll'
import './index.css'

class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    render() {
        let isTop = this.state.isActive
            ?
            " top"
            :
            ""
        return (
            <div className={`top-bar${isTop}`}>
                <MyScroll
                    name="scroll"
                    getScrollHeight={this._getScrollHeight}
                >
                    <div className="top-bar-left">
                        <div className="top-left">
                            <span>Sirius</span>
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
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-battery-half"></i>
                            <i className="fas fa-user"></i>
                        </div>
                    </div>       
                </MyScroll>
            </div>     
        )
    }
    _getScrollHeight = value => {
        if (value > 550) {
            this.setState({
                isActive:true
            })
        } else {
            this.setState({
                isActive:false
            })
        }     
    }
}

export default TopBar