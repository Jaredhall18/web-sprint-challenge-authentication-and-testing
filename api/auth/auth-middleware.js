const User = require('../model/user-model')

const checkUsernameExists = async (req, res, next) => {
    try {
        const user = await User.findBy( req.body.username )
        console.log(user)
        if(user) {
            next({status:401, message: 'invalid credentials'})
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkUsernameExists,
}