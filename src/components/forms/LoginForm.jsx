function LoginForm() {
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-2" />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }

export default LoginForm