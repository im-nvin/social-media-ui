import './register.scss'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className='register'>
            <div className="cart">
                <h1>Register</h1>
                <span className='title'>Sign up to create account</span>
                <form>
                    <input type="text" placeholder='Mobile Number or E-mail' />
                    <input type='text' placeholder='FullName' />
                    <input type="username" placeholder='username' />
                    <input type='password' placeholder='password' />
                    <Link to="/login">
                    <button >Sign up</button>
                    </Link>
                </form>
                <div className='tandc'>
                    <span>By signing up, you agree to our terms, Data policy , cookies policy</span>
                </div>

            </div>

        </div>
    )
}

export default Register