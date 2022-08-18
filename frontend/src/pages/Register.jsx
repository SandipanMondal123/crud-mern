import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'
const Register = () => {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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
    const { name, email, password, password2 } = formdata;
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account to get started!</p>
            </section>
            <section>
                <form onSubmit = {onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control" id='name'
                            name='name' value={name} placeHolder='Enter your name please' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email'
                            name='email' value={email} placeHolder='Enter your email' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password'
                            name='password' value={password} placeHolder='Enter your password' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password2'
                            name='password2' value={password2} placeHolder='Enter your password again' onChange={onChange} />
                    </div>
                    <div className = "form-group">
                        <button type = 'submit' className = 'btn btn-block'>Submit Form</button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default Register