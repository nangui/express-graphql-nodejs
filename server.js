import express from 'express'

const app = express()

console.log(`Server changing`)

app.listen(3000, () => {
    console.log(`listning on port 3000`)
})