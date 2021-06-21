import React from 'react';
import {Link} from 'react-router-dom';
import {FaSyncAlt, FaWifi, FaBorderAll, FaPlus, FaPen, FaTrashAlt, FaRegEye} from "react-icons/fa";
import {DetailCard, Aside} from './';

class Details extends React.Component {
    render() {
        return (
            <div className= "main">
                <Aside />
                <DetailCard />
            </div>
        );
    }
}

export default Details;