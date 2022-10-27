import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
const LogIn = () => {
  const { LogIn, user, googleLogin, gitLogIn } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    if (user?.email !== email) {
      setPasswordError("Email does not match");
      return;
    }
    if (user?.password !== password) {
      setPasswordError("Password does not match");
    }
    setPasswordError("");
    LogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleGitLogin = () => {
    gitLogIn(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account? Register
                </Link>
              </label>
            </div>
            <p className="font-bold text-red-500">{passwordError}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                <h1>Sign In with</h1>
                <div className="flex justify-between">
                  <Link onClick={handleGoogleLogin} className="mr-3">
                    <FaGoogle></FaGoogle>
                  </Link>
                  <Link onClick={handleGitLogin}>
                    <FaGithub></FaGithub>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
