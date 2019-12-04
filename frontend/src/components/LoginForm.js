import React from 'react'
import { Button } from 'react-materialize'

export const LoginForm = () => {
    return (
        <>
            <div className="container login-form">
                <h3>Sign In</h3>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="jane@idk.com"
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="User password"
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                            </div>
                        </div>
                        <Button
                            flat={true}
                            className="waves-effect waves-light loginBtn">Sign In</Button>
                    </form>
                </div>
            </div>
        </>
    )
}