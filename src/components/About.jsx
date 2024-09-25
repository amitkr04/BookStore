import React from "react";

function About() {
  return (
    <div className="container mx-auto mt-20 mb-10 px-4 md:px-8 lg:px-16">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          About Our Bookstore
        </h1>
        <p className="text-lg text-gray-200 text-center mb-6 max-w-4xl mx-auto">
          Welcome to our bookstore, your one-stop destination for discovering,
          purchasing, and enjoying a wide range of books across genres. Whether
          you're a fiction enthusiast, a knowledge seeker, or a student looking
          for academic resources, we have something for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to make reading accessible and enjoyable for
            everyone. We aim to connect readers with books that inspire,
            educate, and entertain, while providing a seamless and secure
            shopping experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Vast collection of books across various genres</li>
            <li>Simple and secure online purchasing process</li>
            <li>Personalized book recommendations</li>
            <li>Exclusive discounts and special offers</li>
            <li>
              Fast delivery for physical books and instant access for eBooks
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-200 text-center max-w-4xl mx-auto">
          Join us in celebrating the love of reading. Start exploring our
          collection today and embark on a new adventure with every book!
        </p>
      </div>
    </div>
  );
}

export default About;
