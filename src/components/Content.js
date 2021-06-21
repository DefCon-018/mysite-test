import React from 'react';
import { addData } from '../actions';
import { data } from '../data';
import {connect} from 'react-redux';
import {FaSyncAlt} from "react-icons/fa";

class Content extends React.Component {

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(addData(data));
    }

    render() {
        return (
            <div className= "container">
                <div className= "heading">
                    <div className= "heading-left">

                    </div>
                    <div className= "heading-right">
                        <FaSyncAlt />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({data}){
    return{
        data
    }
}
export default connect(mapStateToProps)(Content);