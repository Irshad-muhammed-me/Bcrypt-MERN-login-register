import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-body vh-100">
      <div className="bg-dark p-3 rounded-1 w-50">
        <h2 className="text-center text-light">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong className="p-2 text-light  d-inline-block">Name</strong>
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              id="name"
              className="form-control rounded-1"
              required
              onChange={(e) => SetName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong className="p-2 text-light d-inline-block">Email</strong>
            </label>
            <input
              type="text"
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
              <strong className="p-2 text-light d-inline-block">
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

          <button
            type="submit"
            className="btn btn-primary w-25 d-flex justify-content-center align rounded-3 d-block mx-auto "
          >
            Register
          </button>
        </form>

        <Link
          to={"/login"}
          className="btn btn-default bg-blue rounded-0 text-decoration-none text-primary"
        >
          Already Have an Account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
