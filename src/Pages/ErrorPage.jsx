import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const ErrorPage = () => {
  const notify = () =>
    toast.error(error.data, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  useEffect(() => {
    notify();
  }, []);
  const error = useRouteError();
  return (
    <div className="w-screen h-screen flex justify-center items-center">

    <div className="text-white text-2xl">
      <p>Something went wrong!</p>
      {error && <p>{error.data}</p>}
      <Link to={"/"} className="text-blue-600">
        Back to Home
      </Link>
    </div>
    </div>
  );
};

export default ErrorPage;
