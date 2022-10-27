import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const Register = () => {
  const { createUser, googleLogin, gitLogIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password, name, url);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGitLogin = () => {
    gitLogIn(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
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
                required
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? Log In
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
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

export default Register;
