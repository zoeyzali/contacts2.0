const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const port = 5000
const Sass = require( './sass' )
const config = require( './config.json' )

for ( let conf of config.sass ) {
    new Sass( conf )
}

const User = require( './routes/userRoutes' )
const Contact = require( './routes/contactRoutes' )

app.use( express.json() )
app.use( cors() )
app.use( '/api/users', User )
app.use( '/api/contacts', Contact )


// test route
app.get( '/api', ( req, res ) =>
    res.send( 'Welcome to El Contacto' )
)



app.listen( port, () => console.log( `Sup, the server is on port ${port}` ) )