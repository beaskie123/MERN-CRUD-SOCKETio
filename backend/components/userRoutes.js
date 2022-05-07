import express from 'express'
import bcrypt from 'bcryptjs'
import User from './user.js'
import { generateToken } from './token.js';
import expressAsyncHandler from 'express-async-handler'

const userRouter = express.Router();

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
    
        const user = await User.findOne({email: req.body.email })
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send ({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user)
                })
                return;
            }
        }
        res.status(401).send({message: 'Invalid email or password'})
    })
)

userRouter.put(
    '/',
    expressAsyncHandler(async (req, res) => {

        const user = await User.findById(req.body.id);
            
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
              user.password = bcrypt.hashSync(req.body.password, 8);
            }
            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
            });
        }else{
         res.status(404).send({message:"user not found"})
        }
    })
)

userRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }

    })
)

userRouter.get (
    '/:id',
    expressAsyncHandler( async (req, res) => {
        const user =await User.findById(req.params.id)
        if(user){
            res.send({
                id: user._id,
                name: user.name,
                email:user.email
            })
        }
    })
)

export default userRouter