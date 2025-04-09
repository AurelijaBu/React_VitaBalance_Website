import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <section className='loginSection'>
      <div className='loginBox'>
        <h1>Welcome back!</h1>
        <p>Don't have account?</p>
        <Link className='signUpLink' to='/sign_up'>Sign Up</Link>
        <form>
          <input type='text' placeholder='Username' /><br /><br />
          <input type='email' placeholder='Email' /><br /><br />
          <input type='password' placeholder='Password' /><br /><br />
          <button type='submit' className='loginButton'>Login</button>
        </form>
      </div>
    </section>
  );
}
  
export default Login;