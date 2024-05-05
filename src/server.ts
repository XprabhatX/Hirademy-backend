import express from 'express'
import connect from './utils/connect.js'
import routes from './routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Worldz')
})

app.listen(process.env.PORT, async () => {
    console.log('✔ server initialized\n✔ listening on port: ' + process.env.PORT)

    await connect()
    routes(app)
})