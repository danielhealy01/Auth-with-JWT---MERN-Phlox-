import './login.css'
import Navbar from '../components/Navbar'

function Register() {
return (
    <>
    <Navbar />    
    <section className="heading">
      <h1>Register</h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>
);
}

export default Register