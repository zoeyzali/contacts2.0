const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const userSchema = new Schema( {

    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }],
    createdDate: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
} )

userSchema.virtual( 'myContacts', {
    ref: 'Contact',
    localField: '_id',
    foreignField: 'contact'
} )



let User = mongoose.model( 'User', userSchema )
module.exports = User