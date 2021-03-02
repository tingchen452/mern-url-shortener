import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ContactPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/email/sendMail", {
      email: email,
      name: name,
      message: message,
    });
    history.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center py-14 h-screen  bg-white">
      <h1 className="text-4xl font-extrabold pb-10">
        Contact me by filling out this form!
      </h1>
      <form
        onSubmit={submitForm}
        className="flex flex-col h-1/2 w-2/5 justify center"
      >
        <div className="flex flex-row items-center space-x-8 ">
          <h1 className="w-1/2">Name:</h1>
          <h1 className="w-1/2">Email:</h1>
        </div>

        <div className="flex flex-row space-x-8">
          <input
            className="pl-4 outline-none w-1/2 h-10 rounded-lg border-2 border-gray-300 focus:border-blue-300 hover:border-blue-300"
            type="text"
            placeholder="Enter your name here."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="pl-4 outline-none w-1/2 h-10 rounded-lg border-2 border-gray-300 focus:border-blue-300 hover:border-blue-300 "
            type="text"
            placeholder="Enter your email here."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <h1 className="pt-8">Message:</h1>

        <textarea
          className="pl-4 outline-none w-full h-1/3 rounded-lg border-2 border-gray-300 focus:border-blue-300 hover:border-blue-300  "
          type="text"
          placeholder="Please write your message here."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <div className="flex flex-row pt-6 justify-center">
          <button className=" focus:outline-none h-12 w-1/3 border-1 rounded-lg py-1 px-6 bg-blue-800 hover:bg-blue-400 text-white items-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
