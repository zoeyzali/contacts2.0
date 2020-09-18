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
    const contacts = await Contact.find( {} ).populate( "user", "name" )
    if ( contacts.length > 0 ) {
        return res.status( 200 ).json( {
            contacts,
            contact: contacts[0].contact,
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
        const ifContact = await Contact.findOne( { email: String( email ) } )

        if ( ifContact && String( ifContact.user._id ) !== String( user._id ) ) {
            return res.status( 404 ).send( 'Contact already exists' )
        }
        const contact = new Contact( {
            ...req.body,
            user: currentUser,
        } )
        const result = await contact.save()
        currentUser.contacts.push( result )
        await currentUser.save()
        return res.status( 200 ).json( result )

    } catch ( error ) {
        return res.status( 500 ).json( {
            error: "catching error 500"
        } )
    }
} )





router.delete( '/:id', async ( req, res ) => {
    const { user } = req.session
    let contact = await Contact.findOneAndDelete( { _id: req.params.id } )
    const currentUser = await User.findById( user._id )

    if ( contact ) {
        // console.log( contact, 'contact to be deleted' )
        // if ( currentUser.contacts.includes( contact._id ) ) {
        //     currentUser.contacts.splice( currentUser.contacts.indexOf( contact._id ), 1 )
        //     await currentUser.save()
        // }
        // await currentUser.save()
        return res.status( 200 ).json( {
            id: contact._id,
            dbMssg: `${contact.name} deleted`
        } )
    }
    if ( !contact || contact === null ) {
        // console.log( currentUser.contacts, 'current poop' )

        // if ( currentUser.contacts.includes( contact ) ) {
        //     currentUser.contacts.splice( currentUser.contacts.indexOf( contact ), 1 )
        // }
        // currentUser.save()
        return res.status( 404 ).json( {
            errMssg: 'Contact not found!'
        } )
    }
} )




module.exports = router