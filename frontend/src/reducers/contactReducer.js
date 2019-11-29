import uuid from 'uuid/v1'

export const contactReducer = ( state, action ) => {
    console.log( action, 'action reducer' )
    switch ( action.type ) {
        case 'ADD_CONTACT':
            return [...state, {
                name: action.contact.name,
                phoneNr: action.contact.phoneNr,
                email: action.contact.email,
                id: uuid()
            }]

        case 'DELETE_CONTACT':
            return state.filter( contact => contact.id !== action.id )

        case 'EDIT_CONTACT':
            return [...state, {
                name: action.contact.name,
                phoneNr: action.contact.phoneNr,
                email: action.contact.email,
                id: action.contact.id
            }]
        // return state.map( contact => contact.id === action.id )
        // console.log( contact, 'this contact payload..' )
        // const { name, phoneNr, email, id } = action.contact;
        // if ( contact.id === id ) {
        //     contact.name = name
        //     contact.phoneNr = phoneNr
        //     contact.email = email

        // } )

        default:
            return state
    }
}


