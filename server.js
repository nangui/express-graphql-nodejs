import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'
import mongoose from 'mongoose'

const app = express()

app.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql'
}))

mongoose.connect('mongodb://localhost/graphqlExpress')

const connection = mongoose.connection

connection.once('open', () => {
    console.log(`Connection to database was successful!`)
})

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.listen(3000, () => {
    console.log(`listning on port 3000`)
})