import React, { useState } from "react";
import Modal from "./Modal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = () => {
    const mailtoLink = `mailto:shathurshmanoharan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )}&from=${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsModalOpen(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-12 px-8 md:px-32">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-300 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-full text-gray-300 bg-gray-800 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-full text-gray-300 bg-gray-800 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-300 font-bold mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border rounded-full text-gray-300 bg-gray-800 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-300 font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border rounded-2xl text-gray-300 bg-gray-800 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-transparent text-white hover:bg-white hover:text-gray-900 transition duration-500 text-xl mt-4 py-2 px-6 rounded-full shadow-lg border border-white"
              >
                Submit
              </button>
            </div>
          </form>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            Email sent successfully!
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
