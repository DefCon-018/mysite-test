import React from 'react';
import { addData } from '../actions';
import { data } from '../data';
import {connect} from 'react-redux';
import {FaSyncAlt, FaWifi, FaBorderAll} from "react-icons/fa";

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
                        <div className= "para selected-b"><div className= "tilt p-10"><FaWifi /></div><div>Permission</div></div>
                        <div className= "para"><span className= "bl-1"><span className= "p-10"><FaBorderAll /></span><span>Approval Matrix</span></span></div>
                    </div>
                    <div className= "heading-right">
                        <div><span className= "tilt p-10"><FaSyncAlt /></span> Last sync 15 min ago</div>
                    </div>
                </div>

                <div className= "content">
                    
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