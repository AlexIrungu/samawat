import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the specified email address
    window.location.href = "mailto:murungibrenda1@gmail.com";
  };
  return (
    <div className="font-montserrat">
      <h1 className="text-4xl font-bold mb-6">Let's Chat</h1>

      <form
        className="max-w-md mx-auto p-4 border rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md transition-transform transform hover:scale-105"
        >
          Submit
        </button>
      </form>
      <div>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        <span className="text-gray-700">Email: murungibrenda1@gmail.com</span>
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faPhone} className="mr-2" />
        <span className="text-gray-700">Telephone: +254710110705</span>
      </div>
    </div>
      <div className="text-gray-700">
        <h2 className="text-xl font-bold mb-2">Working Hours</h2>
        <p className="mb-2">Monday - Friday: 9 am - 5 pm</p>
        <p>Weekends: 10 am - 1 pm</p>
      </div>
      </div>
    </div>
  );
}

export default Contact;

