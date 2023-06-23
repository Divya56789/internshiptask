import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./signIn.css";
import apple from "../../assets/Apple Logo.svg";
import goggle from "../../assets/google.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/UserSlice";

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const handleGoggleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signinPage">
      <div className="signinPage__black__board">
        <h1>Board.</h1>
      </div>
      <div className="signinPage__white__board">
        <div className="signinPage__container">
          <div className="signinPage__heading">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className="signinWithGoggle__or__signinWithApple">
            <div className="signinWithGoggle" role="button" onClick={handleGoggleLogin}>
              <img src={goggle} alt="goggle" />
              <span>Sign in with Google</span>
            </div>
            <div className="signinWithApple">
              <img src={apple} alt="apple" />
              <span>Sign in with Apple</span>
            </div>
          </div>
          <form>
            <div className="uemail">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="upassword">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <small>Forgot password?</small>
            <button>Sign In</button>
          </form>
          <div className="signinPage__register__now">
            <p>
              Don't have an account? <span>Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
