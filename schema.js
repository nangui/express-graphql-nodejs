import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `type Employee {
    numero: Int
    firstname: String
    lastname: String
    skills: [String]
}
    type Query {
        employee: [Employee]
    }
`

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema