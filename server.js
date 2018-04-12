import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

const app = express()

app.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql'
}))

app.use('/graphql', bodyParser.json(), graphqlExpress({}))

app.listen(3000, () => {
    console.log(`listning on port 3000`)
})