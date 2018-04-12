import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools'

const typeDefs = `type Employee {
    numero: Int
    firstname: String
    lastname: String
    Skills: [String]
}
    type Query {
        employee: [Employee]
    }
`

const schema = makeExecutableSchema({typeDefs})
addMockFunctionsToSchema({schema})

export default schema