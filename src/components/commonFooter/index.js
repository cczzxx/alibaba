import React from 'react';

require('./index.css');

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-center">阿里巴巴集团 Copyright ©1999-2019 版权所有</div>
            </div>
        )
    }
}