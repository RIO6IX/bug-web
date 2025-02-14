export function SignupForm() {
    return (
      <div className="container mt-5">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="form-control mb-2" />
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-2" />
          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }