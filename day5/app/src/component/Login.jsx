import "./style/Login.css";

function Login() {
  return (
    <div className="login-container">
    <div className="center-page">
      <div className="login-box">
        <img src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo.png" alt="Logo" className="login-logo" />
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    </div>
    </div>
  );
}

export default Login;