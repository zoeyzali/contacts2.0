const express = require( 'express' )
const router = express.Router()

router.get( '/', ( req, res ) => {
    let message = `Contacts route at ${req.url}`
    res.status( 200 ).json( { Date: new Date().toLocaleDateString(), message } )
} )



module.exports = router