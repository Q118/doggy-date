// first intiialize a new client and then wrap your root component with a provider component
export const apolloClient = new ApolloClient({
    uri: 'https://doggy-date.us-west-2.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache(),
})