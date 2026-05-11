import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // On form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-10 px-4">
      {/* Fade-in animation */}
      <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear from you. Fill out the form below, and we'll get
          back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-full mx-auto"
        >
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-lg font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`border p-3 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out ${
                errors.name ? "border-red-500 ring-red-500" : "border-gray-300"
              }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-lg font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`border p-3 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out ${
                errors.email ? "border-red-500 ring-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="subject"
              className="text-lg font-semibold text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className={`border p-3 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out ${
                errors.subject
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300"
              }`}
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-lg font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="5"
              className={`border p-3 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out ${
                errors.message
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300"
              }`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button with hover animation */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
