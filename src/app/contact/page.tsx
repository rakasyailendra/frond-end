export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 sm:pt-32">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Let's Talk About Business</h1>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white">
                  <i className="fas fa-map-marker-alt fa-lg"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
                <p className="mt-1 text-gray-600">Suitmedia, Yogyakarta
Jl. Watugede No.58, Sleman, Yogyakarta, Indonesia.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white">
                  <i className="fas fa-envelope fa-lg"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                <p className="mt-1 text-gray-600">contact@suitmedia.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white">
                  <i className="fas fa-phone fa-lg"></i>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="mt-1 text-gray-600">(021) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
