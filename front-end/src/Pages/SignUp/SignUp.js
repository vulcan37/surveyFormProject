import "./signup.css"
import "./reg-input.css"
import LeftCard from '../../components/LeftCard/LeftCard'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function SignUp() {
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        profession: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    // setting checkbox to true after clicking it
    const handleCheckbox = e => {
        setChecked(e.target.checked)
    }

    const register = async (event) => {
        event.preventDefault()

        try {
            if (confirmPassword !== formData.password) {
                setError('Password Mismatach')
                return
            }

            if (!checked) {
                setError('Please check Terms & Conditions')
                return
            }

            const response = await axios.post("http://localhost:5000/api/v1/register", formData)
            console.log(response);
            if (response.data.status === 'success') {
                const user = response.data.data
                setError(null)
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    profession: "",
                    password: ""
                })
                setConfirmPassword("")
                console.log(user)
                navigate('/')
            } else {
                const errorMessage = response.data.message.split(":")[2].trim()
                setError(errorMessage)
            }
        } catch (error) {
            const errorMessage = error.response.data.message.split(":")[2].trim()
            setError(errorMessage)
        }
    }


    const handleRoute_signup = () => {
        navigate("/")
    }
    const handleKeyPress = (event) => {
        if (event.key === 'enter') {
            register()
        }
    }
    return (
        <>
            <div className='register-container'>
                <div>
                    <LeftCard btn_name='SignIn' btn_message='Already Have An Account' onClick={handleRoute_signup} />
                </div>
                <div>
                    <form className='register-form-field' onSubmit={register}>
                        <h2 className="reg-h2">Register</h2>
                        <div className='reg-heading-para'>Register to continue access pages</div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='name'
                                    className='reg-input-field'
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onKeyDownCapture={handleKeyPress}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    className='reg-input-field'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='phone'
                                    className='reg-input-field'
                                    placeholder='Phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type='text'
                                    name='profession'
                                    className='reg-input-field'
                                    placeholder='Profession'
                                    value={formData.profession}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>

                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='password'
                                    className='reg-input-field'
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type='text'
                                    name='confirmPassword'
                                    className='reg-input-field'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className='anchor'>
                            <input
                                type='checkbox'
                                checked={checked}
                                onChange={handleCheckbox} />
                            <a href='#top'>I agree to Terms & Conditions receiving marketing and promotional materials</a>
                        </div>
                        <div>
                            <button
                                type='sumbit'
                                className='register-btn'
                            >Register</button>
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp