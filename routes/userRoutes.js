const express = require( 'express' )
const router = express.Router()
const User = require( '../mongoose-models/User' )
const Contact = require( '../mongoose-models/Contact' )

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
        res.status( 404 ).json( { signUpErr: 'Email exists' } )
        // return res.redirect( '/login' )
    }
    else {
        user = new User( {
            ...req.body,
            password: encryptPassword( req.body.password )
        } )
    }
    await user.save()
    res.status( 200 ).json( {
        successMssg: 'User signed up!',
        user: user,
    } )
} )


router.post( '/login', async ( req, res ) => {
    try {
        let { email, password } = req.body
        password = encryptPassword( password )
        const user = await User.findOne( { email } )
        if ( !user ) {
            return res.status( 404 ).json( { error: 'No such user, Please Signup!' } )
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
                loginErr: "Credentials Incorrect, please try again"
            } )
        }
    }
    catch ( error ) {
        console.log( error, 'Catching errors at loginroute' )
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
            message: `${user.name} Logged out!`
        } )
    } else {
        res.status( 400 ).end()
    }
} )


// user by Id
router.get( '/:id', async ( req, res ) => {
    let user = await User.findOne( { _id: req.params.id } )
    if ( user && String( user._id ) === req.session.user._id ) {
        // console.log( req.session.user._id, 'the sesssh' )
        res.status( 200 ).json( {
            userInfo: `Logged in as ${user.name} with email ${user.email}`,
            userId: user._id,
            user: user,
            contacts: user.contacts
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
    if ( !user ) {
        return res.status( 404 ).send( 'No such user' )
    }

} )



// get users all contacts
router.get( '/:id/contacts', async ( req, res ) => {
    const { user } = req.session
    if ( !user ) {
        return res.status( 401 ).send( { error: 'You are not logged in' } )
    }
    if ( user ) {
        let userContacts = await User.findById( user._id ).populate( 'contacts' )
        let contacts = await Contact.find( {} )
        console.log( userContacts, "user's all contacts?" )
        if ( contacts.length > 0 ) {
            return res.status( 200 ).json( {
                message: `You have ${userContacts.contacts.length} contacts saved`,
                userContacts
            } )
        }
    } else {
        // console.log( "you don't seem to be logged in?" )
        return res.status( 404 ).json( {
            error: 'No contacts found'
        } )
    }
} )

// add contact to logged in User
router.post( '/:id/add-contact', async ( req, res ) => {
    const { user } = req.session
    if ( !user ) {
        return res.status( 400 ).send( 'You must be logged in' )
    }
    const currentUser = await User.findById( user._id )
    console.log( currentUser, 'current' )
    const userContact = await Contact.findOne( { email: req.body.email }
    )

    if ( !userContact ) {
        return res.status( 404 ).send( { error: 'No such contact' } )
    }
    if ( currentUser.contacts.includes( userContact._id ) ) {
        return res.status( 500 ).send( {
            error: 'Contact has already been added',
        } )
    }

    currentUser.contacts.push( userContact )
    currentUser.save()

    res.json( {
        message: 'Contact added to your list',
        currentUser,
        userContact
    } )
    res.status( 200 ).end()
} )




module.exports = router