import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="left">
          <h1>MYSITE</h1>
        </div>
        <div className="right">
          <div className="nav-name">
            <div className="profile-img"></div>
            <h4>Kishore</h4>
          </div>
          <div className="nav-images">
            <div className="nav-img">
              <img src="https://image.flaticon.com/icons/png/512/3602/3602145.png" />
            </div>
            <div className="nav-img">
              <img src="https://image.flaticon.com/icons/png/512/84/84264.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
