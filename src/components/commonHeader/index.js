import React from 'react';

require('./index.css');

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    value: "首   页"
                },
                {
                    id: 2,
                    value: "社会招聘"
                },
                {
                    id: 3,
                    value: "校园招聘"
                },
                {
                    id: 4,
                    value: "了解阿里"
                },
                {
                    id: 5,
                    value: "个人中心"
                }
            ]
        }
    }

    render() {
        return (
            <div className="header">
                <div className="header-center">
                    <div className="header-center-main">
                        <div className="header-center-main-left">
                            <div className="header-center-main-left-base">
                                <img className="header-center-main-left-img" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="/" />
                                <i className="header-center-main-left-line">|</i>
                                <i className="header-center-main-left-text">社招官网</i>
                            </div>
                            <ul className="header-center-main-left-nav">
                                {
                                    this.state.list.map(item => {
                                        return <li className="header-center-main-left-nav-item" key={item.id}>{item.value}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="header-center-main-right">
                            <div className="header-center-main-right-welcome">欢迎来到阿里巴巴集团招聘！</div>
                            <div className="header-center-main-right-nav">
                                <span className="header-center-main-right-text">登录</span>
                                <span className="header-center-main-right-line"> | </span>
                                <span className="header-center-main-right-text">注册</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
