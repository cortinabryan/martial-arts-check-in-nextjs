const Login = () => {
  return (
    <div class="container">
      <div class="top">
        <h1>Welcome to Martial Arts Check-In App</h1>
      </div>
      <div class="login row user">
        <h1>Email / Username</h1>
        <input type="text" />
      </div>
      <div class="login password">
        <h1>Password</h1>
        <a href="#" id="forgot-password">
          Forgot Password?
        </a>
      </div>
      <div class="login row password">
        <input type="text" />
      </div>
      <div class="login row button">
        <a href="/pages/home.html" class="login row button" id="login-here">
          Log in
        </a>
      </div>
    </div>
  );
};

export default Login;
