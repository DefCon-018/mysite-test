import React from 'react';
import {Link} from 'react-router-dom';
import {FaSyncAlt, FaWifi, FaBorderAll, FaArrowLeft, FaPlusCircle, FaMinusCircle} from "react-icons/fa";

class DetailCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            budget: {
                view: 1,
                create: 1,
                edit: 1,
                delete: 1,
                cnt: 4
            },
            bidding: {
                view: 0,
                create: 0,
                edit: 0,
                delete: 0,
                cnt: 0
            },
            vendorPortal: {
                view: 1,
                create: 1,
                edit: 0,
                delete: 0,
                cnt: 2
            },
            purchaseOrder: {
                view: 1,
                create: 1,
                edit: 0,
                delete: 0,
                cnt: 2
            },
            organisation: {
                view: 1,
                create: 1,
                edit: 1,
                delete: 1,
                cnt: 4
            },
            permission: {
                view: 0,
                create: 0,
                edit: 0,
                delete: 0,
                cnt: 0
            },

        }
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
                <div className = "content">
                    <div className= "team-name">
                    <Link to= "/" className= "link"><span className= "back-arrow"><FaArrowLeft /></span></Link>
                        <h3>Management Team </h3>
                    </div>
                    <div className= "detail-details">
                        <div className= "details-heading">
                            <div className= "details-para selected-b"> Access Control </div>
                            <div className= "details-para"><div className= "p-10 bl-1">Assigned Members</div></div>
                        </div>
                    </div>
                    <div className= "details-table">
                        <table>
                            <tr className= "detail-head">
                                <td></td>
                                <td>Department/Role Name</td>
                                <td className= "access-lvl">Access Level</td>
                                <td className= "center-2">Summary</td>
                                <td>Last updated</td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Budget</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Bidding</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Vendor Portal</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Purchase order/Work order</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Organisation Profile</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className= "check check-2">
                                    <div><FaPlusCircle /></div>
                                </td>
                                <td>Permission & Access Control</td>
                                <td>
                                    <div className= "access restricted">
                                        <p>All Access</p>
                                    </div>
                                </td>
                                <td className= "center-2">View | Create | Edit | Delete</td>
                                <td className= "center">1 min ago</td>
                                <td className= "eye">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCard;