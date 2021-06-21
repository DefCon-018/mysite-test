import React from 'react';
import { addData } from '../actions';
import { data } from '../data';
import {connect} from 'react-redux';
import {FaSyncAlt, FaWifi, FaBorderAll, FaPlus, FaPen, FaTrashAlt, FaRegEye} from "react-icons/fa";

class Content extends React.Component {

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(addData(data));
    }

    render() {
        let {data} = this.props;
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
                    <div className= "content-head">
                        <button className= "btn"><span className= "plus"><FaPlus /></span> Add Role</button>
                        <div><FaPen /></div>
                        <div><FaTrashAlt /></div>
                    </div>
                    <div className= "content-detail">
                        <table>
                            <tr className= "detail-head">
                                <td></td>
                                <td>Department/Role Name</td>
                                <td className= "access-lvl">Access Level</td>
                                <td>No. of members</td>
                                <td>Last updated</td>
                                <td></td>
                            </tr>
                            {
                                data.map((d, index) =>{
                                    return (
                                        <tr>
                                            <td className= "check">
                                                <input type= "checkbox" className= "checkbox-round" />
                                            </td>
                                            <td>{d.name}</td>
                                            <td>
                                                <div className= "access restricted">
                                                    <p>{d.accessLevel}</p>
                                                </div>
                                            </td>
                                            <td className="center-1">{d.num_members}</td>
                                            <td className= "center">1 min ago</td>
                                            <td className= "eye"><FaRegEye /></td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
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