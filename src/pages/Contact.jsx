import React from 'react'

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions, feedback, or want to work with us? Send us a message and we'll get back to you soon.
        </p>

        <form className="bg-white rounded-xl shadow-md p-6 space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
