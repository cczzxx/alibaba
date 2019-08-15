import React from 'react';

require('./index.css')

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyWords: [
                { id: 1, value: "JAVA" },
                { id: 2, value: "IOS" },
                { id: 3, value: "数据" },
                { id: 4, value: "安全" },
                { id: 5, value: "搜索" },
                { id: 6, value: "算法" },
                { id: 7, value: "运营" },
                { id: 8, value: "视觉" },
                { id: 9, value: "交互" },
                { id: 10, value: "前端" }
            ]
        }
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-top">
                    <img className="home-top-background" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="/" />
                    <div className="home-top-main">
                        <div className="home-top-main-slogn">
                            <p className="home-top-main-slogn-bold">If not now, when?</p>
                            <p className="home-top-main-slogn-bold">If not me, who?</p>
                            <p>此时此刻，非我莫属！</p>
                        </div>
                        <div className="home-top-main-search">
                            <div className="home-top-main-search-area">
                                <input className="home-top-main-search-input" />
                                <div className="home-top-main-search-btn">搜索</div>
                            </div>
                            <div className="home-top-main-search-keywords">
                                <span className="home-top-main-search-keywords-title">热门搜索：</span>
                                {
                                    this.state.keyWords.map(item => {
                                        return <span className="home-top-main-search-keywords-item" key={item.id}>{item.value}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
