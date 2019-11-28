import uuid from 'uuid/v1'

export const contactReducer = ( state, action ) => {
    // console.log( action, 'action reducer' )
    // console.log( state, 'state reducer' )
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
        default:
            return state
    }
}

//   return state.map( contact => contact.id !== action.id )

