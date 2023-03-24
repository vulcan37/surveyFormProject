import "./signup.css"
import "./reg-input.css"
import LeftCard from '../../components/LeftCard/LeftCard'

function SignUp() {
  
    return (
        <>
            <div className='register-container'>
                <div>
                    <LeftCard btn_name='SignIn' btn_message='Already Have An Account' />
                </div>
                <div>
                    <form className='register-form-field'>
                        <h2 className="reg-h2">Register</h2>
                        <div className='reg-heading-para'>Register to continue access pages</div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='name'
                                    className='reg-input-field'
                                    placeholder='Name'
                                // value={name}
                                // onChange={e => setName(e.target.value)}
                                />
                            </label>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    className='reg-input-field'
                                    placeholder='Email'
                                // value={name}
                                // onChange={e => setName(e.target.value)}
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
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                            <label>
                                <input
                                    type='text'
                                    name='Profession'
                                    className='reg-input-field'
                                    placeholder='Profession'
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
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
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                            <label>
                                <input
                                    type='text'
                                    name='password'
                                    className='reg-input-field'
                                    placeholder='Confirm Password'
                                // value={password}
                                // onChange={e => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='anchor'>
                            <a href='#top'>I agree to Terms & Condition receiving marketing and promotional materials</a>
                        </div>
                        <div>
                            <button
                                type='sumbit'
                                className='register-btn'
                            >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp