import { useState } from "react";
import contactUs from "../Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div
      className="flex flex-col md:flex md:flex-row md:justify-center md:items-center my-10
    "
    >
      <div className=" w-[300px] ">
        <img src={contactUs} alt="Contact us" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            required
            className="border min-w-[40vw]  border-black rounded-lg m-2 p-2 shadow-lg border-style"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border min-w-[40vw]  border-black rounded-lg m-2 p-2 shadow-lg border-style"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="border min-w-[40vw]  border-black rounded-lg m-2 p-2 shadow-lg border-style"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white text-sm text-center rounded-2xl py-[8px] px-[12px] "
          >
            Submit
          </button>
          {message && (
            <span>Thanks for contacting FoodFire, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
