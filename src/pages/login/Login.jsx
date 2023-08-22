import './login.scss'
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <div className="cart">
                <div className="upper">

                    <select name='languages'>
                        <option value="English">English(united states)</option>
                        <option value="Hindi">Hindi</option>
                        <option value="German">German</option>
                        <option value="chinese">chinese</option>
                        <option value="japanese">japanese</option>
                    </select>
                    <h1>DeVBook</h1>
                    <form>
                        <input type='text' placeholder='username' />

                        <input type="password" placeholder='password' />
                            <button className='btn'>Login</button>
                    </form>
                    <span>forget your Login details?<b> Get help in signing in</b></span>
                    <button className='btn'>Login with facebook</button>
                </div>
                <div className="or">
                    <span>or</span>
                </div>

                <div className="bottom">
                    <span>Don't have account?<b> <Link style={{textDecoration: 'none'}} to="/register">SignUp</Link></b> </span>
                </div>
            </div>
        </div>
    )
}

export default Login