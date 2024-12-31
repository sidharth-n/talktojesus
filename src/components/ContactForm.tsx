import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 text-white">
            Start Your Divine Connection
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Age</label>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Job</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your occupation"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Topic</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="What would you like to discuss?"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 text-center text-white font-semibold bg-gradient-to-r from-yellow-400 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Call with Jesus
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}