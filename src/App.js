/** @format */

const FETCH_ALL_PUPPIES = gql`
	query FetchAllPuppies {
		queryPuppy {
			id
			name
			age
			matchedCount
			profilePic
			bio
			interests
		}
	}
`;
