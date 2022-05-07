import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Router from './components/route.js';
import data from './data.js';
import userRouter from './components/userRoutes.js';

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to DB')
}).catch(err => {
    console.log(err.message)
})
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/route', Router)
app.use ('/api/users', userRouter)
app.get('/api/route', (req ,res )=> {
    res.send(data.users)
})

app.use((err, req ,res, next) => {
    res.status(500).send({message:err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})
