import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			term: '',
			location: '' ,
			sortBy: 'best_match'
		};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);

		// Create an object with keys nad values that conform to what the Yelp API expects to receive
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
	}

	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active';
		} 
			return '';
	}	

	handleSortByChange(sortByOption) {
		this.setState({ sortBy: sortByOption });
	}

	handleTermChange(event) {
		this.setState({ term: event.target.value });
	}

	handleLocationChange(event) {
		this.setState({ location: event.target.value });
	}

	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

		event.preventDefault();
	}

	// renderSortByOptions is a method that iterates through the keys nad values of sortByOptions object and return a list item
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			/* Accesses the sortByOptions values using the sortByOption parameter of the callback function
			and then stores these values in a variable called sortByOptionValue*/
			let sortByOptionValue = sortByOptions[sortByOption];
			return (<li onClick={this.handleSortByCHange.bind(this, sortByOptionValue)} 
									className ={this.getSortByClass(sortByOptionValue)} 
									key={sortByOptionValue}>
								{sortByOption}
							</li>);
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
			    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
			    <input onChange={this.handleLocationChange} placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a onClick={this.handleSearch}>Let's Go</a>
			  </div>
			</div>
			)
	}
}

export default SearchBar;