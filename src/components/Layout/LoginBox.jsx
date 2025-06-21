import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import { Lock, Mail } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import useTypewriter from "../../hooks/useTypeWriter";
import { toast } from "react-toastify";

const LoginBox = () => {
  const { toastEffect, currUser, setCurrUser, usersList } = useAppContext();
  const navigate = useNavigate();
  const [error,setError] = useState('')
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    const user = usersList.find(
      (user) =>
        user.email === formInputData.email &&
        user.password === formInputData.password
    );

    if (user) {
      const verifiedUser = {
        name: user.username,
        email: user.email,
        status: true,
      };
      setCurrUser(verifiedUser);
      toast.success("User Login Successfully", toastEffect);
      navigate("/");
      setError('')
    } else {
      toast.warning("Login Failed", toastEffect);
      setError('Email or Password is incorrect');
    }
    e.target.reset();
  };

  // to store current user
  useEffect(() => {
    localStorage.setItem("currUser", JSON.stringify(currUser));
  }, [currUser, handleFormSubmit]);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-10 bg-white shadow-md rounded-lg p-6 md:p-8">
      {/* Welcome Message */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-blue-700 font-bold text-4xl pb-6 pt-4">
          {useTypewriter("Inventoria", 100)}
        </h1>
        <img
          src="/images/login.png"
          width={220}
          alt="Welcome Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Divider (hidden on mobile) */}
      <div className="hidden md:block w-[1px] bg-blue-400"></div>

      {/* Contact Form */}
      <form onSubmit={handleFormSubmit} className="flex-1 space-y-6">
        <div className="hidden md:block flex justify-center flex-col gap-2 text-black text-4xl"><h1 className="text-3xl font-semibold text-center text-blue-700">
          Login
        </h1>
            {error && (
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-md mb-4 text-sm text-center border border-red-200">
            {error}
          </div>
        )}
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">EMAIL</label>
          <div className="relative">
            <Mail
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="email"
              name="email"
              className="w-full pl-10 border-b-2 focus:outline-none text-gray-800 focus:border-blue-400 py-2"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            PASSWORD
          </label>
          <div className="relative">
            <Lock
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="password"
              name="password"
              className="w-full pl-10 border-b-2 focus:outline-none text-gray-800 focus:border-blue-400 py-2"
              placeholder="******"
              required
              autoComplete="off"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition duration-300"
        >
          Login
        </button>

        <div className="flex gap-2">
          <p className="text-black">Don't have an account? </p>
          <Link
            to={"/register"}
            className="text-blue-600 font-bold hover:text-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginBox;
