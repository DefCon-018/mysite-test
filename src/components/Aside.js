import React from 'react';
import { FaList, FaShieldAlt, FaBriefcase } from "react-icons/fa";

class Aside extends React.Component {
    render() {
        return (
            <div className= "aside">
                <div className= "part">
                   <FaList />
                   <span>Projects</span>
                </div>
                <div className= "part">
                    <FaBriefcase />
                    <span>Organisation Profile</span>
                </div>
                <div className= "part selected">
                    <FaShieldAlt />
                    <span>Access Control</span>
                </div>
            </div>
        );
    }
}

export default Aside;