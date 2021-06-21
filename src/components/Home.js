import React from 'react';
import {Aside, Content} from './';

class Home extends React.Component {
    render() {
        return (
            <div className= "main">
                <Aside />
                <Content />
            </div>
        );
    }
}

export default Home;