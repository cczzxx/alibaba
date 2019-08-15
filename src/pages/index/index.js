import React from 'react';
import CommonHeader from '../../components/commonHeader';
import CommonFooter from '../../components/commonFooter';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CommonHeader />
                {
                    this.props.children
                }
                <CommonFooter />
            </div>
            
        )
    }
}
