import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    if (decoded) {
      navigate('/dashboard');
    }
    navigate('/dashboard');
    // console.log("decoded", decoded);
    // console.log("credentialResponse", credentialResponse);
    // console.log("credentialResponse creditals", credentialResponse.credential);
  };

  const handleError = () => {
    // console.log("Login Failed");
    navigate('/');
    // Redirect back to login page if login fails
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="bg-black">
          <img src="./black.jpg" alt="img" />
        </div>

        <div className="px-8 md:px-16">
          <h2 className="font-bold text-2xl text-black">Sign in</h2>
          <p>Sign in to your account</p>
          <div>
            <GoogleOAuthProvider clientId="748765071743-t3h74h9cktn1gafhqvrnejndtgfeec53.apps.googleusercontent.com">
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </GoogleOAuthProvider>
          </div>
          <form action="" className="gap-4">
            <input
              className="p-2 mt-1 rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 mt-3 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <a href="/" className="text-xs mt-4 text-[#002D74]">Forgot password?</a>
            <br /><br />
            <input type="button" className="bg-black rounded-xl mt-3 text-white py-2 hover:scale-105 duration-300 w-full" value="Sign in" />

          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-black">
            <p>Dont have an account?</p>
            <input type="button" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" value="Register" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
