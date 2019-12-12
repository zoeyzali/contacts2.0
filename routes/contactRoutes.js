const express = require( 'express' )
const router = express.Router()
const Contact = require( '../mongoose-models/Contact' )
const User = require( '../mongoose-models/User' )

router.get( '/test', ( req, res ) => {
    let message = `Contacts route at ${req.url}`
    res.status( 200 ).json( { Date: new Date().toLocaleDateString(), message } )
} )

router.get( '/', async ( req, res ) => {
    const contact = await Contact.find( {} )
    if ( contact.length > 0 ) {
        console.log( contact.length, 'count' )
        return res.status( 200 ).json( {
            contact,
            message: 'contacts from db'
        } )
    } else {
        return res.status( 404 ).json( {
            error: 'No contacts founds'
        } )
    }
} )

// a general "create contact" route, v.1
router.post( '/create', async ( req, res ) => {
    const { user } = req.session
    if ( !user ) {
        return res.status( 400 ).send( 'You must be logged in to add a contact' )
    }
    try {
        const currentUser = await User.findById( user._id )

        let { name, email, phone } = req.body

        const checkContact = await Contact.findOne( { phone: String( user ) } )

        if ( checkContact ) {
            return res.status( 404 ).send( 'Contact already exists' )
        }

        const contact = new Contact( {
            user: currentUser._id,
            phone,
            name,
            email,
        } )

        const result = await contact.save()
        console.log( result )
        return res.status( 200 ).json( result )
    }
    catch ( error ) {
        return res.status( 500 ).json( { error: "something aint right code 500" } )
    }
} )

router.delete( '/:id', async ( req, res ) => {
    const { user } = req.session
    let contactToDelete = await Contact.findOneAndDelete( { _id: req.param.id } )
    if ( contactToDelete ) {
        console.log( user, 'this current contact' )
        return res.status( 200 ).json( {
            contactId: contactToDelete._id,
            message: `${contactToDelete.name} deleted`
        } )
    } else {
        if ( !contactToDelete ) {
            return res.status( 404 ).json( {
                error: 'contact not found?'
            } )
        }
    }
} )






module.exports = router