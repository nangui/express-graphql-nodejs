import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `type Employee {
    id: String
    firstname: String
    lastname: String
    phonenumber: Int,    
    skills: [String]
}
    type Query {
        employees: [Employee],
        employee(id: String): Employee
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema