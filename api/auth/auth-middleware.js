const User = require('../model/user-model')

const checkUsernameExists = async (req, res, next) => {
    try {
        const user = await User.findBy( req.body.username )
        if(user) {
            next({status:401, message: 'username taken'})
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

const validateCreds = (req, res, next) => {
   try {
    const {username, password } = req.body
    if ( username.trim() === "" || password.trim() === "" || !username || !password) {
        next({status:401, message: 'username and password required'})
    } else {
        next()
    }
   } catch (error) {
       next(error)
   }
}

module.exports = {
    checkUsernameExists,
    validateCreds,
}