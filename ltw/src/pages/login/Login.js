import React from "react";

function login() {
    return (
        <form>
            <h3>Log In</h3>

            <div className="mb-3">
            <label>Tên đăng nhập</label>
            <input
                type="username"
                className="form-control"
                placeholder="Enter username"

            />
            </div>

            <div className="mb-3">
            <label>Mật khẩu</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"

            />
            </div>

            <div className="mb-3">
            <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
                </label>
            </div>
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>  
            <p className="forgot-password text-right">
            <a href="#">Register</a>
            </p>
        </form>
    )
}

export default login;   