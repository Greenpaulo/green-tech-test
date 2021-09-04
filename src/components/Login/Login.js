const Login = () => {
  return (
    <section id="login-container">
      <div id="login">
        <div id="logo">
          <img src="/images/logo.png" alt="Green logo" />
        </div>
        <h1>Operations studio</h1>
        <h4>Please enter your email below</h4>
        
        <div id="login-form">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" id="email-input" required/>

          <div id="check-box-container">
            <input type="checkbox" defaultChecked="checked" /> 
            <label id="checkbox-label">Remember this device</label>
          </div>

          <button type="submit" id="login-btn">Sign In</button>
        </div>
      </div>
    </section>
  )
}

export default Login
