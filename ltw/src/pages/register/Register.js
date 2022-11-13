import React from "react";

function Register() {
    return (
        <form>
            <h3>Register</h3>

            <div>
            <label>Ảnh đại diện</label>
            <input
                type="file"
                className="form-control"
                placeholder="Enter username"

            />
            </div>          

            <div>
            <label>Tên đăng nhập</label>
            <input
                type="username"
                className="form-control"
                placeholder="Enter username"

            />
            </div>

            <div>
            <label>Mật khẩu</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"

            />
            </div>

            <div>
            <label>Họ và tên</label>
            <input
                type="name"
                className="form-control"
                placeholder="Enter name"

            />
            </div>

            <div>
            <label>Số điện thoại</label>
            <input
                type="phone"
                className="form-control"
                placeholder="Enter phone number"

            />
            </div>

            <div>
            <label>Ngày sinh</label>
            <input
                type="date"
                className="form-control"
                placeholder="Enter email"

            />
            </div>

            <div>
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
            Register
            </button>
            </div>  
        </form>
    )
}

export default Register;       