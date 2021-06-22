import React from 'react';
import { Link } from 'react-router-dom';
import { Expand } from '.';
import { connect } from 'react-redux';
import {
  FaSyncAlt,
  FaWifi,
  FaBorderAll,
  FaArrowLeft,
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';
import {
  handleBudget,
  handleBiddingAction,
  handleOrganisationAction,
  handlePermissionAction,
  handleOrderAction,
  handleVendorAction,
} from '../actions';

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

  handleExpand = (item) => {
    let { budget } = this.props.details;
    this.props.dispatch(handleBudget(budget ^ 1));
  };

  handleBidding = () => {
    let { bidding } = this.props.details;
    this.props.dispatch(handleBiddingAction(bidding ^ 1));
  };

  handleVendor = () => {
    let { vendorPortal } = this.props.details;
    this.props.dispatch(handleVendorAction(vendorPortal ^ 1));
  };

  handleOrder = () => {
    let { purchaseOrder } = this.props.details;
    this.props.dispatch(handleOrderAction(purchaseOrder ^ 1));
  };

  handleOrganisation = () => {
    let { organisation } = this.props.details;
    this.props.dispatch(handleOrganisationAction(organisation ^ 1));
  };

  handlePermission = () => {
    let { permission } = this.props.details;
    this.props.dispatch(handlePermissionAction(permission ^ 1));
  };

  render() {
    console.log('Render');
    console.log('render state', this.state);
    let {
      budget,
      permission,
      organisation,
      purchaseOrder,
      vendorPortal,
      bidding,
    } = this.state;
    let {
      budget: b,
      bidding: bid,
      vendorPortal: ven,
      organisation: organ,
      permission: per,
      purchaseOrder: order,
    } = this.props.details;
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
            <div className="table-container">
              <div className="info table-heading">
                <p className="idx"></p>
                <p className="table-name">Department/Role Name</p>
                <p className="access-lvl center-2">Access Level</p>
                <p className="center-2 summery">Summary</p>
                <p className="last-updated">Last updated</p>
                <p className="toggle"></p>
              </div>
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {b === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleExpand('budget')}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {b === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleExpand('budget')}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Budget</div>
                <div className="access-lvl">
                  <div className="access">
                    {budget.cnt === 4 && (
                      <p className="all-access">All Access</p>
                    )}
                    {budget.cnt <= 3 && budget.cnt !== 0 && (
                      <p className="restricted-access">Restricted Access</p>
                    )}
                    {budget.cnt === 0 && <p className="no-access">No Access</p>}
                  </div>
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={budget.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {b === 1 && <Expand name="Budget" />}
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {bid === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleBidding()}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {bid === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleBidding()}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Bidding</div>
                <div className="access-lvl">
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
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={bidding.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {bid === 1 && <Expand name="Budget" />}
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {ven === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleVendor()}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {ven === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleVendor()}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Vendor Portal</div>
                <div className="access-lvl">
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
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={vendorPortal.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {ven === 1 && <Expand name="Budget" />}
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {order === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleOrder()}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {order === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleOrder()}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Purchase order/Work order</div>
                <div className="access-lvl">
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
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={purchaseOrder.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {order === 1 && <Expand name="Budget" />}
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {organ === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleOrganisation()}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {organ === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handleOrganisation()}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Organisation Profile</div>
                <div className="access-lvl">
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
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={organisation.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {organ === 1 && <Expand name="Budget" />}
            </div>

            <div className="table-container">
              <div className="info">
                <div>
                  {per === 0 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handlePermission()}
                    >
                      <FaPlusCircle />
                    </div>
                  )}
                  {per === 1 && (
                    <div
                      className="idx check check-2"
                      onClick={() => this.handlePermission()}
                    >
                      <FaMinusCircle />
                    </div>
                  )}
                </div>
                <div className="table-name">Permission & Access Control</div>
                <div className="access-lvl">
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
                </div>
                <div className="center-2 summery">
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
                </div>
                <div className="last-updated center-3">1 min ago</div>
                <div className="eye toggle">
                  <label className="switch">
                    <input type="checkbox" checked={permission.cnt} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              {per === 1 && <Expand name="Budget" />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.details,
  };
}

export default connect(mapStateToProps)(DetailCard);
