import userQuaries from "./users/Queries.js"

const resolvers = {
    Query:{
    ...userQuaries
    },
}
export default resolvers