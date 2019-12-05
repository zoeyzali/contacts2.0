import React from 'react'

const SignUpForm = () => {
    return (
        <>
            <div className="container signup-page">
                <div className="row">
                    <h3>Signup!</h3>
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
                                    type="phone"
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
                            disabled={true}
                            flat={true}
                            className="waves-effect waves-light signupBtn">Signup
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpForm
