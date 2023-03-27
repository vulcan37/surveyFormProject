import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../components/Input/input.css"
import LeftCard from '../../components/LeftCard/LeftCard'
import "../SignIn/SignIn.css"

function SignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleLogin = async event => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/signin", { email, password })
            const token = response.data.data.token
            console.log(response);
            // console.log(token);
            localStorage.setItem('token', token)
            const authToken = localStorage.getItem('token')

            const headers = {
                'userId': response.data.data.userId,
                'Authorization': `Bearer ${authToken}`
            };
            // to send token as header object to ...
            const response2 = await axios.post("http://localhost:5000/api/logout", {}, { headers })
            console.log(response2)
            if (response.data.status === 'Success') {
                const user = response.data.data
                setError(null)
                setEmail("")
                setPassword("")
                console.log(user)
            }

        } catch (error) {
            const errorMessage = error.response.data.error;
            setError(errorMessage)
        }
    }

    const handleRoute = () => {
        navigate("/register")
    }
    return (
        <>
            <div className='signin-container'>
                <div>
                    <LeftCard btn_name='Register' btn_message='Don’t Have An Account?' onClick={handleRoute} />
                </div>
                <div>
                    <form className='form-field' onSubmit={handleLogin}>
                        <h2>Sign In</h2>
                        <div className='heading-para'>Sign in to continue access pages</div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    className='input-field input1'
                                    placeholder='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                type='submit'
                                className='sign-btn'
                            >sign in</button>
                        </div>
                        {error && <p className="signin-error-msg">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn