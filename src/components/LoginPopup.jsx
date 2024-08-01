import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic
    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
      return;
    }
    // Add your form submission logic here

    // Clear the form after submission
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const toggleState = () => {
    setCurrentState(currentState === "Sign up" ? "Sign in" : "Sign up");
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full grid items-center justify-center bg-opacity-30 bg-black">
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold pb-5">{currentState}</h2>
          <IoIosCloseCircleOutline
            className="text-2xl cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <form onSubmit={handleFormSubmit}>
          {currentState === "Sign up" && (
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="Andrew Jackson"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="andrew@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-500 pb-5">
              <p>{error}</p>
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              {currentState}
            </button>
            <div className="flex items-center text-sm">
              {currentState === "Sign up" ? (
                <>
                  <p>Already have an account?</p>
                  <p
                    className="underline cursor-pointer ml-1"
                    onClick={toggleState}
                  >
                    Sign in
                  </p>
                </>
              ) : (
                <>
                  <p>Don't have an account?</p>
                  <p
                    className="underline cursor-pointer ml-1"
                    onClick={toggleState}
                  >
                    Sign up
                  </p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
