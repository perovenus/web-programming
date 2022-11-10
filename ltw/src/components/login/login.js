// create modal login form
function Login() {
  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <div className="login-form">
          {/* form with input phone number */}
          <form>
            <label>Xin chào:</label>
            <input type="text" placeholder="Số điện thoại" />

            {/* button register */}
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
        <div>
          <h1>banner</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
