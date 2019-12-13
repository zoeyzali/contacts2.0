const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const port = process.env.port || 5000
const Sass = require( './sass' )
const config = require( './config.json' )
const URI = require( './mongoConnection' )
const mongoose = require( 'mongoose' )
const session = require( 'express-session' )
const connectMongo = require( 'connect-mongo' )( session )
const User = require( './routes/userRoutes' )
const Contact = require( './routes/contactRoutes' )

const salt = 'hellofromtheotherside'

for ( let conf of config.sass ) {
    new Sass( conf )
}

let dbName = "Contacto"
mongoose.connect( URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
} )
const db = mongoose.connection
db.once( 'open', _ => {
    console.log( `DB ${dbName} is ON` )
} )
db.on( 'error', err => {
    console.error( 'connection error:', err )
} )
mongoose.Promise = global.Promise


app.use(
    session( {
        secret: salt,
        resave: true,
        saveUninitialized: false,
        // true on https:// servers
        cookie: { secure: false },
        store: new connectMongo( {
            mongooseConnection: db
        } )
    } ) )

app.use( express.json() )
app.use( cors() )

app.use( '/users', User )
app.use( '/contacts', Contact )


// test route
// app.get( '/', function ( req, res, next ) {
//     res.setHeader( 'Last-Modified', ( new Date() ).toUTCString() )
//     next()
// } )

app.get( '/api', ( req, res ) =>
    res.send( 'Welcome to Contacts2.0' )
)

app.listen( port, () => console.log( `Server is running on port ${port}` ) )