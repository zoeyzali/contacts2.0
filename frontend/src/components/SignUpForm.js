import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
import useSignUp from './useSignUp'


const SignUpForm = () => {
    const [mssg, setMssg] = useState( null )
    const [redirect, setRedirect] = useState( false )
    const [okToRedirect, setOkToRedirect] = useState( false )

    const registerUser = async () => {
        try {
            const user = {
                name: data.name,
                phone: data.phone,
                email: data.email,
                password: data.password
            }
            const response = await fetch( '/users/', {
                method: 'POST',
                body: JSON.stringify( user ),
                headers: {
                    'Content-Type': 'application/json'
                }
            } )
            const result = { res: await response.json(), status: response.status }
            if ( !result ) {
                setMssg( "Oopsie" )
            }
            if ( result.status === 404 ) {
                setMssg( result.res.signUpErr )
            }
            if ( result.status === 200 ) {
                setRedirect( result.res.successMssg )
                setOkToRedirect( true )
            }
            // console.log( result.res )
        } catch ( error ) {
            console.log( error, 'err' )
        }
    }

    const { data, handleInputChange, handleSubmit } = useSignUp( registerUser )

    return (
        <>
            <div className="container signup-page all-form">
                <div className="row">
                    <h3>Signup!</h3>

                    {mssg ? (
                        <h4 className="errMssg" style={{ color: "crimson" }}>{mssg}</h4>
                    ) : ""}

                    {redirect && (
                        <div className="success-mssg z-depth-1">
                            <h4 className="success" style={{
                                fontSize: "1.8rem",
                            }}>{redirect} {" "}
                                <Link to="/login" style={{ fontSize: "1rem" }}>To Login</Link>
                            </h4>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="name"
                                    placeholder="Jane Doe"
                                    id="name"
                                    type="text"
                                    className="validate"
                                    value={data.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="phone"
                                    placeholder="072-978 00 00"
                                    id="phone"
                                    type="text"
                                    className="validate"
                                    value={data.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

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
                            // disabled={true}
                            flat={true}
                            className="flatBtns"
                            style={{
                                width: "90%",
                                justifyContent: "center",
                                backgroundColor: "#fff",
                                color: "#03a9f4"
                            }}>
                            Signup
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpForm
