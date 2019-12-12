const express = require( 'express' )
const router = express.Router()
const Contact = require( '../mongoose-models/Contact' )
const User = require( '../mongoose-models/User' )

router.get( '/testing-contacts', ( req, res ) => {
    let message = `Contacts route at ${req.url}`
    res.status( 200 ).json( {
        Date: new Date().toLocaleDateString(),
        message
    } )
} )

router.get( '/', async ( req, res ) => {
    const contacts = await Contact.find( {} ).populate( "creator", "name" )
    if ( contacts.length > 0 ) {
        // console.log( contacts.length, 'count' )
        return res.status( 200 ).json( {
            contacts,
            // contact: contacts.contact,
            dbMssg: 'contacts from db'
        } )
    } else {
        return res.status( 404 ).json( {
            dbMssg: 'No contacts in the DB'
        } )
    }
} )

//  "create contact" route, v.1
router.post( '/create-contact', async ( req, res ) => {
    const { user } = req.session
    if ( !user ) {
        return res.status( 400 ).send( 'You must be logged in to add a contact' )
    }
    try {
        const currentUser = await User.findById( user._id )
        let { name, email, phone } = req.body
        const ifContact = await Contact.findOne( { phone: String( phone ) } )

        if ( ifContact && String( ifContact.creator._id ) !== String( user._id ) ) {
            console.log( ifContact._id, 'exists' )
            console.log( ifContact.creator._id, 'exists' )
            console.log( user._id, 'user ID' )
            return res.status( 404 ).send( 'Contact already exists' )
        }
        const contact = new Contact( {
            ...req.body,
            creator: currentUser,
        } )
        const result = await contact.save()
        console.log( result, result.creator.name, 'created new contact' )
        return res.status( 200 ).json( result )

    } catch ( error ) {
        return res.status( 500 ).json( {
            error: "something aint right code 500"
        } )
    }
} )



router.delete( '/:id', async ( req, res ) => {
    const { user } = req.session
    if ( user ) {
        let contact = await Contact.findOneAndDelete( { _id: req.params.id } )
        if ( contact ) {
            return res.status( 200 ).json( {
                id: contact._id,
                dbMssg: `${contact.name} deleted`
            } )
        }
        if ( !contact ) {
            return res.status( 404 ).json( {
                errMssg: 'Contact not found!'
            } )
        }
    }
} )





module.exports = router