import React from 'react';
import './SearchBar.css';

// Create an object with keys nad values that conform to what the Yelp API expects to receive
const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
	// renderSortByOptions is a method that iterates through the keys nad values of sortByOptions object and return a list item
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			/* Accesses the sortByOptions values using the sortByOption parameter of the callback function
			and then stores these values in a variable called sortByOptionValue*/
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

	render() {
		return (
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
			)
	}
}

export default SearchBar;