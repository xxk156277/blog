import React from 'react';
 
export default class Myscroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeType:true, 
        }
    }
    componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('scroll', this.bindScroll)
    }
    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.bindScroll);
    }
    render() {
        const {name} = this.props
        return (
            <div className={name}>
                {this.props.children}
            </div>
        )
    }
    bindScroll = event =>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight)
            || document.body.clientHeight;
        // 页面高度
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight)
            || document.body.scrollHeight;
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;
        // 判断距离页面底部的高度
        // console.log(this.props);
        // console.log("页面高度",scrollHeight,"滚动高度",scrollTop,"视图高度",clientHeight)
        
        this.props.getScrollHeight(scrollTop);
        
    }
}