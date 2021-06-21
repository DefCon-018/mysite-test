import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSyncAlt,
  FaWifi,
  FaBorderAll,
  FaArrowLeft,
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';

class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: {
        operations: {
          view: 1,
          create: 1,
          edit: 1,
          delete: 1,
        },
        cnt: 4,
        open: 0,
      },
      bidding: {
        operations: {
          view: 0,
          create: 0,
          edit: 0,
          delete: 0,
        },
        cnt: 0,
        open: 0,
      },
      vendorPortal: {
        operations: {
          view: 1,
          create: 1,
          edit: 0,
          delete: 0,
        },
        cnt: 2,
        open: 0,
      },
      purchaseOrder: {
        operations: {
          view: 1,
          create: 1,
          edit: 0,
          delete: 0,
        },
        cnt: 2,
        open: 0,
      },
      organisation: {
        operations: {
          view: 1,
          create: 1,
          edit: 1,
          delete: 1,
        },
        cnt: 4,
        open: 0,
      },
      permission: {
        operations: {
          view: 0,
          create: 0,
          edit: 0,
          delete: 0,
        },
        cnt: 0,
        open: 0,
      },
    };
  }
  render() {
    let {
      budget,
      permission,
      organisation,
      purchaseOrder,
      vendorPortal,
      bidding,
    } = this.state;
    return (
      <div className="container">
        <div className="heading">
          <div className="heading-left">
            <div className="para selected-b">
              <div className="tilt p-10">
                <FaWifi />
              </div>
              <div>Permission</div>
            </div>
            <div className="para">
              <span className="bl-1">
                <span className="p-10">
                  <FaBorderAll />
                </span>
                <span>Approval Matrix</span>
              </span>
            </div>
          </div>
          <div className="heading-right">
            <div>
              <span className="tilt p-10">
                <FaSyncAlt />
              </span>{' '}
              Last sync 15 min ago
            </div>
          </div>
        </div>
        <div className="content">
          <div className="team-name">
            <Link to="/" className="link">
              <span className="back-arrow">
                <FaArrowLeft />
              </span>
            </Link>
            <h3>Management Team </h3>
          </div>
          <div className="detail-details">
            <div className="details-heading">
              <div className="details-para selected-b"> Access Control </div>
              <div className="details-para">
                <div className="p-10 bl-1">Assigned Members</div>
              </div>
            </div>
          </div>
          <div className="details-table">
            <table>
              <tr className="detail-head">
                <td></td>
                <td>Department/Role Name</td>
                <td className="access-lvl">Access Level</td>
                <td className="center-2">Summary</td>
                <td>Last updated</td>
                <td></td>
              </tr>
              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Budget</td>
                <td>
                  <div className="access">
                    {budget.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {budget.cnt <= 3 && budget.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {budget.cnt === 0 && <p className="no-access">No Access</p>}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(budget.operations).map((item, idx) => {
                      if (item[1] === 1) {
                        if (idx == 0) {
                          return <div>{item[0]}</div>;
                        }
                        return <div> | {item[0]}</div>;
                      }
                    })}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={budget.cnt} />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Bidding</td>
                <td>
                  <div className="access">
                    {bidding.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {bidding.cnt <= 3 && bidding.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {bidding.cnt === 0 && (
                      <p className="no-access">No Access</p>
                    )}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(bidding.operations).map((item, idx) => {
                      console.log(item, item[0], item[1]);
                      if (item[1] === 1) {
                        if (idx == 0) {
                          return <div>{item[0]}</div>;
                        }
                        return <div> | {item[0]}</div>;
                      }
                    })}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={bidding.cnt} />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Vendor Portal</td>
                <td>
                  <div className="access">
                    {vendorPortal.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {vendorPortal.cnt <= 3 && vendorPortal.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {vendorPortal.cnt === 0 && (
                      <p className="no-access">No Access</p>
                    )}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(vendorPortal.operations).map(
                      (item, idx) => {
                        if (item[1] === 1) {
                          if (idx == 0) {
                            return <div>{item[0]}</div>;
                          }
                          return <div> | {item[0]}</div>;
                        }
                      }
                    )}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={vendorPortal.cnt} />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Purchase order/Work order</td>
                <td>
                  <div className="access">
                    {purchaseOrder.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {purchaseOrder.cnt <= 3 && purchaseOrder.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {purchaseOrder.cnt === 0 && (
                      <p className="no-access">No Access</p>
                    )}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(purchaseOrder.operations).map(
                      (item, idx) => {
                        if (item[1] === 1) {
                          if (idx == 0) {
                            return <div>{item[0]}</div>;
                          }
                          return <div> | {item[0]}</div>;
                        }
                      }
                    )}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={purchaseOrder.cnt} />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Organisation Profile</td>
                <td>
                  <div className="access">
                    {organisation.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {organisation.cnt <= 3 && organisation.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {organisation.cnt === 0 && (
                      <p className="no-access">No Access</p>
                    )}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(organisation.operations).map(
                      (item, idx) => {
                        if (item[1] === 1) {
                          if (idx == 0) {
                            return <div>{item[0]}</div>;
                          }
                          return <div> | {item[0]}</div>;
                        }
                      }
                    )}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={organisation.cnt} />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>

              <tr>
                <td className="check check-2">
                  <div>
                    <FaPlusCircle />
                  </div>
                </td>
                <td>Permission & Access Control</td>
                <td>
                  <div className="access">
                    {permission.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {permission.cnt <= 3 && permission.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {permission.cnt === 0 && (
                      <p className="no-access">No Access</p>
                    )}
                  </div>
                </td>
                <td className="center-2">
                  <div className="operations">
                    {Object.entries(permission.operations).map((item, idx) => {
                      if (item[1] === 1) {
                        if (idx == 0) {
                          return <div>{item[0]}</div>;
                        }
                        return <div> | {item[0]}</div>;
                      }
                    })}
                  </div>
                </td>
                <td className="center">1 min ago</td>
                <td className="eye">
                  <label className="switch">
                    <input type="checkbox" checked={permission.cnt} />
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
