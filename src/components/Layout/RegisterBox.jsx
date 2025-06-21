import Input from "../UI/Input";
import { Link, useNavigate } from "react-router-dom";
import useTypewriter from "../../hooks/useTypeWriter";
import { User, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

const RegisterBox = () => {
  const { toastEffect, usersList, setUsersList } = useAppContext();
  const navigate = useNavigate();
  const [error,setError] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    const oldUser = usersList.find(
      (user) => user.email === formInputData.email
    );
    if (!oldUser) {
      const updatedUsers = [...usersList, formInputData];
      setUsersList(updatedUsers);
      setError('')
      navigate("/login");
      toast.success("User registered successfully", toastEffect);
    } else {
    setError('This email is already in use');
    toast.warning("Email already registered", toastEffect);
    }
    e.target.reset();
  };

  // to set new user in local storage
  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList]);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-10 bg-white shadow-md rounded-lg p-6 md:p-8">
      {/* Welcome Message */}
      <div className="flex-1 flex flex-col justify-evenly items-center text-center">
        <h1 className="text-blue-700 font-bold text-4xl pb-6 pt-4">
          {useTypewriter("Inventoria", 100)}
        </h1>
        <img
          src="/images/greetings.png"
          width={220}
          alt="Welcome Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Divider (hidden on mobile) */}
      <div className="hidden md:block w-[1px] bg-blue-400"></div>

      {/* Contact Form */}
      <form onSubmit={handleFormSubmit} className="flex-1 space-y-6">
        <div className="flex justify-center flex-col gap-2 text-black text-4xl"><h1 className="text-3xl font-semibold text-center text-blue-700">
          Create an Account
        </h1>
            {error && (
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-md mb-4 text-sm text-center border border-red-200">
            {error}
          </div>
        )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">NAME</label>
          <div className="relative">
            <User
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              name="username"
              className="w-full pl-10 border-b-2 focus:outline-none text-gray-800 focus:border-blue-400 py-2"
              placeholder="Your Name"
              required
            />
          </div>
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
          Sign Up
        </button>

        <div className="flex gap-2">
          <p className="text-black">Already have an account? </p>
          <Link
            to={"/login"}
            className="text-blue-600 font-bold hover:text-blue-800"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterBox;
