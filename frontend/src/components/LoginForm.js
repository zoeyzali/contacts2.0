import React, { useState, useContext } from 'react'
import { Button } from 'react-materialize'
import { Redirect, Link } from 'react-router-dom'
import useLoginHook from './useLogin'
import { UserContext } from '../context/UserContext'

export const LoginForm = () => {
    const { user, keepAuthUser } = useContext( UserContext )
    const [errorMssg, setErrorMssg] = useState( null )

    const onLogin = async () => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        const response = await fetch( '/users/login', {
            method: 'POST',
            body: JSON.stringify( userData ),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        const result = {
            respon: await response.json(),
            status: response.status
        }
        if ( result.status === 200 ) {
            keepAuthUser( result.respon )
            // setErrorMssg( false )
            // setOkToRedirect( true )
        }

        if ( result.status === 400 ) {
            setErrorMssg( result.respon.loginErr )
        }
        if ( result.status === 404 ) {
            setErrorMssg( result.respon.error )
        } else {
            if ( result.status === 500 ) {
                let mssg = "something aint quite right"
                setErrorMssg( mssg )
            }
        }
    }

    const { handleInputChange, handleSubmit, data } = useLoginHook( onLogin )


    return (
        <>
            {user ? <Redirect to="/" /> : null}
            <div className="container all-form">
                <h3>Sign In</h3>
                {errorMssg && (
                    <h4 className="form-error" style={{
                        color: "crimson"
                    }}>{errorMssg}</h4>
                )}
                <div className="row">
                    <form onSubmit={handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="email"
                                    placeholder="jane@idk.com"
                                    id="email"
                                    type="email"
                                    className="validate"
                                    value={data.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="password"
                                    placeholder="ExUs3rPasswd"
                                    id="password"
                                    type="password"
                                    className="validate"
                                    value={data.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <Button
                            flat={true}
                            className="waves-effect waves-light loginBtn">Login
                        </Button>
                        <Button
                            flat={true}
                            className="flatBtns"
                            style={{
                                marginTop: "15px",
                                backgroundColor: "white",
                                color: "#03a9f4",
                                width: "90%"
                            }}>
                            <Link to="/signup">SignUp</Link>
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}