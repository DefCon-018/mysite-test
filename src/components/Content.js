import React from 'react';
import { addData, addNewData } from '../actions';
import { data } from '../data';
import {connect} from 'react-redux';
import {FaSyncAlt, FaWifi, FaBorderAll, FaPlus, FaPen, FaTrashAlt, FaRegEye} from "react-icons/fa";

class Content extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            addRole: 0,
            name: '',
            accessLevel: '',
            num_members: '',
        }
    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(addData(data));
    }

    handleAddRole = () =>{
        let {addRole} = this.state;
        if(addRole == 1){
            this.setState({
                name: '',
                accessLevel: '',
                num_members: ''
            })
        }
        this.setState((prevState)=>{
            return{
                addRole: prevState.addRole ^ 1
            }
        })
    }

    handleSaveChanges = (e) => {
        e.preventDefault();
        let {name, accessLevel, num_members} = this.state;
        if(name === '' || accessLevel === '', num_members === ''){
            return;
        }
        let newData= {
            name,
            accessLevel,
            num_members
        }
        this.props.dispatch(addNewData(newData));
    }

    handleFieldChange = (field, value) =>{
        this.setState({
            [field]: value
        })
    }

    render() {
        let {data} = this.props;
        let {addRole} = this.state;
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
                        <button onClick= {this.handleAddRole} className= "btn"><span className= "plus"><FaPlus /></span> Add Role</button>
                        <div><FaPen /></div>
                        <div><FaTrashAlt /></div>
                    </div>

                    {
                        addRole === 1 && 
                        <form className= "add-form">
                            <input required onChange= {(e)=>{this.handleFieldChange('name', e.target.value)}} type= "text" placeholder= "Department/Role Name" />
                            <input required onChange= {(e)=>{this.handleFieldChange('accessLevel', e.target.value)}} type= "text" placeholder= "Access Level" />
                            <input required onChange= {(e)=>{this.handleFieldChange('num_members', e.target.value)}} type= "text" placeholder= "No. of members" />
                            <button onClick= {this.handleSaveChanges} className= "btn save">Save Changes</button>
                        </form>
                    }

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