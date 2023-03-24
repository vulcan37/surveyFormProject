import React, { useState } from 'react'
import "../../components/Input/input.css"
import LeftCard from '../../components/LeftCard/LeftCard'
import "../SignIn/SignIn.css"

function SignIn() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <div className='signin-container'>
                <div>
                    <LeftCard btn_name='Register' btn_message='Don’t Have An Account?'/>
                </div>
                <div>
                    <form className='form-field'>
                        <h2>Sign In</h2>
                        <div className='heading-para'>Sign in to continue access pages</div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='name'
                                    className='input-field input1'
                                    placeholder='Email'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='Password'
                                    className='input-field input2'
                                    placeholder='Password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <button
                                type='sumbit'
                                className='sign-btn'
                            >sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn