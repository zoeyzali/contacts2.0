import { useState } from 'react'

const useSignUp = ( callback ) => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
        password: '',
    }
    const [data, setData] = useState( initialState )

    const handleInputChange = ( e ) => {
        e.persist()
        setData( {
            ...data,
            [e.target.name]: e.target.value
        } )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        callback()
    }

    return {
        data,
        handleInputChange,
        handleSubmit
    }
}

export default useSignUp
