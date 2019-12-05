const express = require( 'express' )
const router = express.Router()
const User = require( '../mongoose-models/User' )
const crypto = require( 'crypto' )
const salt = 'hellofromtheotherside'


function encryptPassword( password ) {
    return crypto
        .createHmac( 'sha256', salt )
        .update( password )
        .digest( 'hex' )
}

router.get( '/', ( req, res ) => {
    let message = `Users route at ${req.url}`
    res.status( 200 ).json( { Date: new Date().toLocaleDateString(), message } )
} )


router.post( '/', async ( req, res ) => {
    let email = req.body.email
    let user = await User.findOne( { email } )
    if ( user ) {
        return res.status( 404 ).json( { error: 'Email exists' } )
    } else {
        user = new User( {
            ...req.body,
            password: encryptPassword( req.body.password )
        } )
    }
    await user.save()
    res.status( 200 ).json( {
        message: 'User signed up!',
        user: user,
    } )
} )


router.post( '/login', async ( req, res ) => {
    try {
        let { email, password } = req.body
        password = encryptPassword( password )
        const user = await User.findOne( { email } )
        if ( !user ) {
            return res.status( 404 ).json( { error: 'No such user, please Signup!' } )
        }
        if ( user ) {
            if ( user.password === password ) {
                req.session.user = user
                console.log( 'login route user', user )
                return res.status( 200 ).json( {
                    user,
                    loginInfo: `Login as ${user.name} successful`
                } )
            }
        }
        if ( user.password !== password ) {
            return res.status( 400 ).json( {
                loginErr: "Credentials incorrect, please try again"
            } )
        }
    }
    catch ( error ) {
        console.log( error, 'Catching errors at login route' )
    }
} )

router.get( '/login', async ( req, res ) => {
    let loginErr = "Not logged in!"
    res.json( req.session.user ? req.session.user : { loginErr } )
} )

router.get( '/logout', async ( req, res ) => {
    const { user } = req.session
    if ( user ) {
        req.session.destroy()
        return res.status( 200 ).json( {
            message: 'Logged out!'
        } )
    } else {
        res.status( 400 ).end()
    }
} )


// user by Id
router.get( '/:id', async ( req, res ) => {
    let user = await User.findOne( { _id: req.params.id } )
    if ( user && String( user._id ) === req.session.user._id ) {
        console.log( req.session.user._id, 'the sesssh' )
        res.status( 200 ).json( {
            // user: user,
            userInfo: `Logged in as ${user.name} & email ${user.email}`,
            userId: user._id
        } )
    } else {
        return res.status( 401 ).json( { error: 'Not logged In' } )
    }
} )

router.delete( '/:id', async ( req, res ) => {
    let user = await User.findOneAndDelete( { _id: req.params.id } )
    if ( user ) {
        return res.status( 200 ).json( {
            message: `${user.name} deleted`,
            userId: user._id,
        } )
    }
} )






module.exports = router