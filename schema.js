import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `type Employee {
    id: Int
    firstname: String
    lastname: String
    skills: [String]
}
    type Query {
        employees: [Employee],
        employee(id: Int): Employee
    }
`

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema