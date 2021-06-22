import React from 'react';

class Expand extends React.Component {
  render() {
    let { name, value } = this.props;
    let cnt = 0;
    for (let op in value.operations) {
      cnt += value.operations[op];
    }
    console.log(value);
    return (
      <div className="expand">
        <div className="expand-head">All aspects in {name} module</div>
        <div className="expand-body">
          <div className="expand-body-left">
            <div>
              <h2 className="access-control">Access Control</h2>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                {cnt === 4 && (
                  <input
                    type="checkbox"
                    className="checkbox-round check-3"
                    checked
                  />
                )}
                {cnt !== 4 && (
                  <input type="checkbox" className="checkbox-round check-3" />
                )}
              </div>
              <div className="right">
                <p>All Access</p>
                <p className="fade">can access all items</p>
              </div>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                {cnt !== 4 && (
                  <input
                    type="checkbox"
                    className="checkbox-round check-3"
                    checked
                  />
                )}
                {cnt === 4 && (
                  <input type="checkbox" className="checkbox-round check-3" />
                )}
              </div>
              <div className="right">
                <p>Restricted Access</p>
                <p className="fade">
                  can access only Assigned and created items
                </p>
              </div>
            </div>
          </div>

          <div className="expand-body-right">
            <div>
              <h2 className="access-control">Permissions</h2>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                <input type="checkbox" checked={value.operations.view} />
              </div>
              <div className="right">
                <p>View items in access</p>
              </div>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                <input type="checkbox" checked={value.operations.edit} />
              </div>
              <div className="right">
                <p>Edit items in access</p>
              </div>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                <input type="checkbox" checked={value.operations.create} />
              </div>
              <div className="right">
                <p>Create items in access</p>
              </div>
            </div>
            <div className="check-boxes">
              <div className="left check-2">
                <input type="checkbox" checked={value.operations.delete} />
              </div>
              <div className="right">
                <p>Delete items in access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Expand;
