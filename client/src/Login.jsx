import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else alert("NO DATA FOUND !");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-body vh-100">
      <div className="bg-dark p-3 rounded-1 w-50 ">
        <h2 className="text-center text-light">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong className="p-1 text-light d-inline-block">Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control rounded-1"
              required
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong className="p-1 text-light d-inline-block">
                Password
              </strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              id="password"
              className="form-control rounded-1"
              required
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between p-3">
            <button type="submit" className="btn btn-primary w-25 rounded-3">
              Login
            </button>

            <Link
              to={"/register"}
              className=" text-primery text-decoration-none mt-3 d-block text-center"
            >
              Does not Have an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
