import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business' //Imports the Business component

//Create React component called BusinessList which displays 6 Business Components
class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{
					// Access the businesses prop and call the .map method
					this.props.businesses.map(business => {
						// Callback function that returns a <Business /> with a property = parameter of the callback funciton
						return <Business business={business} />
					})
				}
			</div>
			);
	}
}

export default BusinessList;