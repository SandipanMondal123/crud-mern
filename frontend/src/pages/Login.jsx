
import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa'
const Login = () => {
    const [formdata, setFormData] = useState({
      
        email: '',
        password: '',
        
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const { email, password } = formdata;
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Sign into your account to see your goals!</p>
            </section>
            <section>
                <form onSubmit = {onSubmit} >
                    
                    <div className="form-group">
                        <input type="email" className="form-control" id='email'
                            name='email' value={email} placeHolder='Enter your email' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password'
                            name='password' value={password} placeHolder='Enter your password' onChange={onChange} />
                    </div>
                    
                    <div className = "form-group">
                        <button type = 'submit' className = 'btn btn-block'>Submit Form</button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default Login