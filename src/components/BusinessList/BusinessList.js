import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business' //Imports the Business component

//Create React component called BusinessList which displays 6 Business Components
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;