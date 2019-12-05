import { useState } from 'react'

export default function useLoginHook( callback ) {
    const initialState = {
        email: '',
        password: '',
        isSubmitting: false,
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
        handleInputChange,
        handleSubmit,
        data,
    }
}

