// Client ID:  0AF4ANSFvjDdJEQHIRZtOw
const apiKey = 'L0F6Leu4lDbE70qMOT7srTc6YCvuSabpz_cZwu6ul6f4Y3ZNvV_C66W2QeFnbjgUmag0yraPjOGV0dc95HT7pLfwSF-1krTm_6RfD06sPSTBUK2NMkRs8xHXZsWaW3Yx'

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
			{headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					id: business.id,
					imageSrc: business.img_url,
  				name: business.name,
  				address: business.location.address1,
  				city: business.location.city,
  				state: business.location.state,
  				zipCode: business.location.zip_code,
  				category: business.categories[0].title,
  				rating: business.rating,
  				reviewCount: business.review_count.
				});
			}
		});
	}
};

export default Yelp;