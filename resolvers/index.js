import userMutations from "./users/Mutations.js"
import userQuaries from "./users/Queries.js"

const resolvers = {
    Query:{
    ...userQuaries
    },
    Mutation:{
        ...userMutations
    }
}
export default resolvers