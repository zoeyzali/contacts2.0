import uuid from 'uuid/v1'

export const contactReducer = ( state, action ) => {
    // console.log( action, state, 'action & state from reducer' )
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
            return state.map( contact => {
                if ( contact.id === action.contact.id ) {
                    return {
                        name: action.contact.name,
                        phoneNr: action.contact.phoneNr,
                        email: action.contact.email,
                        id: action.contact.id
                    }
                } else {
                    console.log( 'aint working' )
                    return contact
                }
            } )
        default:
            return state
    }
}


