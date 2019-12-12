import React, { useState, useContext } from 'react'
import { Button } from 'react-materialize'
import { Redirect, Link } from 'react-router-dom'
import useLoginHook from './useLogin'
import { UserContext } from '../context/UserContext'

export const LoginForm = () => {
    const { keepAuthUser } = useContext( UserContext )
    const [errorMssg, setErrorMssg] = useState( null )
    const [okToRedirect, setOkToRedirect] = useState( false )

    const onLogin = async () => {
        const userData = {
            email: data.email,
            password: data.password,
        }
        const response = await fetch( 'http://localhost:5000/users/login', {
            method: 'POST',
            body: JSON.stringify( userData ),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        const result = {
            res: await response.json(),
            status: response.status
        }
        if ( result.status === 200 ) {
            keepAuthUser( result.res.user )
            setOkToRedirect( true )
            // setErrorMssg( false )
            // console.log( 'logging result', result )

        }
        if ( result.status === 400 ) {
            setErrorMssg( result.res.loginErr )
        }
        if ( result.status === 404 ) {
            setErrorMssg( result.res.error )
        } else {
            if ( result.status === 500 ) {
                let mssg = "something aint quite right"
                setErrorMssg( mssg )
            }
        }
    }

    const { handleInputChange, handleSubmit, data } = useLoginHook( onLogin )

    // {user ? <Redirect to='/' /> : null}


    return (
        <>
            {okToRedirect && <Redirect to="/" />}
            <div className="container all-form">
                <h3>Sign In</h3>
                {errorMssg && (
                    <h4 className="form-error"
                        style={{
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
                                    placeholder="User password"
                                    id="password"
                                    type="password"
                                    className="validate"
                                    value={data.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <Button
                            // disabled={data.isSubmitting}
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