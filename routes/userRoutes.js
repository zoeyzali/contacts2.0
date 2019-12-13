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


router.get( '/testing-users', ( req, res ) => {
    let message = `Users route at ${req.url}`
    res.status( 200 ).json( { Date: new Date().toLocaleDateString(), message } )
} )


router.get( '/', async ( req, res ) => {
    const users = await User.find( {} )
    console.log( req.session.user, 'session' )
    if ( users.length > 0 ) {
        console.log( users[0].contacts.length, 'user contacts count' )
        return res.status( 200 ).json( {
            users,
            dbMssg: 'users from db',
            singleUser: users[0],
            // contacts: users.contacts,
        } )
    } else {
        return res.status( 400 ).json( {
            dbMssg: 'No users in the DB'
        } )
    }
} )

// register user
router.post( '/', async ( req, res ) => {
    let email = req.body.email
    let user = await User.findOne( { email } )
    if ( user ) {
        return res.status( 404 ).json( {
            signUpErr: 'Email exists'
        } )
    }
    else {
        user = new User( {
            ...req.body,
            password: encryptPassword( req.body.password )
        } )
    }
    await user.save()
    res.status( 200 ).json( {
        successMssg: 'All signed up!',
        user: user,
    } )
} )

// user login
router.post( '/login', async ( req, res ) => {
    try {
        let { email, password } = req.body
        password = encryptPassword( password )
        const user = await User.findOne( { email } )
        if ( !user ) {
            return res.status( 404 ).json( {
                error: 'No such user, Please Signup!'
            } )
        }
        if ( user ) {
            if ( user.password === password ) {
                req.session.user = user
                return res.status( 200 ).json( user )
                // loginInfo: `Login as ${user.name} successful`
            }
        }
        if ( user.password !== password ) {
            return res.status( 400 ).json( {
                loginErr: "Credentials Incorrect? Please try again!"
            } )
        }
    } catch ( error ) {
        return res.send( 'Catching errors' )
    }
} )


router.get( '/login', async ( req, res ) => {
    res.json( req.session.user ? req.session.user : false )
} )

router.get( '/logout', ( req, res ) => {
    const { user } = req.session
    if ( user ) {
        req.session.destroy()
        res.status( 200 ).end()
    } else {
        return res.status( 400 ).end()
    }
} )


// logged in user's contacts
router.get( '/:id/contacts', async ( req, res ) => {
    const { user } = req.session
    let errorMssg = 'some bullshit shit'

    if ( !user ) {
        return res.status( 400 ).json( 'Make sure to login!' )
    }
    try {
        // const myCons = await User.findOne( { _id: user._id } )
        const currentUser = await User.findById( req.params.id )
            .populate( {
                path: 'contacts',
                select: 'name email phone',
                populate: {
                    path: "userContacts",
                    model: "Contact"
                }
            } )
        console.log( currentUser.contacts.length, 'my contactos' )

        if ( user._id !== req.params.id ) {
            return res.status( 400 ).json( 'Are you sure you are logged in?' )

        } else {
            console.log( currentUser.name, 'loggedin user' )
            return res.status( 200 ).json( {
                user: currentUser,
                count: currentUser.contacts.length,
                errorMssg,
            } )
        }
    }
    catch ( error ) {
        console.log( error, 'catch error' )
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



// add contact to logged in User
router.post( '/:id/add-contact', async ( req, res ) => {
    const { user } = req.session
    if ( !user ) {
        return res.status( 400 ).send( 'You must be logged in' )
    }
    const currentUser = await User.findById( user._id )
    const userContact = await Contact.findOne( { email: req.body.email } )

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
        user: currentUser,
        // contact: userContact,
    } )
    return res.status( 200 ).end()
} )




module.exports = router