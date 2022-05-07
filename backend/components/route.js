import express from "express";
import data from '../data.js'
import User from "./user.js";


const Router = express.Router()

Router.get('/', async (req,res) => {
    await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({ createdUser})
})

export default Router