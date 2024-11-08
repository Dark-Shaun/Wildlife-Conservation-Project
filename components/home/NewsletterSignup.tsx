export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute animate-float-slow top-10 left-10 text-4xl">
          🐘
        </div>
        <div className="absolute animate-float-medium top-20 right-20 text-4xl">
          🐯
        </div>
        <div className="absolute animate-float-fast bottom-10 left-1/4 text-4xl">
          🦁
        </div>
        <div className="absolute animate-float-medium bottom-20 right-1/4 text-4xl">
          🐺
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join Our Wildlife Conservation Community
          </h2>
          <p className="text-emerald-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to protect endangered species and preserve natural habitats. 
            Get exclusive updates on conservation projects and wildlife success stories.
          </p>
          <form className="max-w-md mx-auto">
            <div className="relative mb-4 group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-emerald-800/30 backdrop-blur-sm border-2 border-emerald-700 rounded-full 
                text-white placeholder-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 
                focus:outline-none transition-all duration-300 shadow-lg"
              />
              <div className="absolute right-3 top-3 text-2xl animate-pulse">
                🦋
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full 
              font-bold text-lg shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 active:translate-y-0 
              transform transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 
              group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="flex items-center justify-center gap-2">
                <span>Protect Wildlife Together</span>
                <span className="group-hover:rotate-12 transition-transform duration-300">🌿</span>
              </span>
            </button>
          </form>
          <p className="text-emerald-400/80 mt-4 text-sm">
            Join over 10,000 wildlife enthusiasts making a difference
          </p>
        </div>
      </div>
    </section>
  );
}