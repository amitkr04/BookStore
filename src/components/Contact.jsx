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
    // Reset form after submission
    reset();
  };
  return (
    <>
      <div className="container mx-auto mt-0 bg-slate-400">
        <h2 className="text-2xl font-bold mb-1 text-center">Contact Us</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-lg mx-auto"
        >
          {/* Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="border p-2 rounded-md outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <span htmlFor="email" className="text-lg">
              Email
            </span>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="border p-2 rounded-md outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col space-y-1">
            <span htmlFor="subject" className="text-lg">
              Subject
            </span>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="border p-2 rounded-md outline-none"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-1">
            <span htmlFor="message" className="text-lg">
              Message
            </span>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="border p-2 rounded-md outline-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
