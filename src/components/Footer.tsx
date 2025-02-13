

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 md:border-t border-slate-400 pt-4">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Sikkim Rideasy is your dependable travel partner, offering seamless and comfortable cab services tailored to your needs.With a modern fleet and experienced drivers, we prioritize customer satisfaction and make every ride effortless.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/destinations"
                className="hover:text-white transition-colors duration-300"
              >
                Sightseeing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Youtube
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Sikkim, India</p>
          <p>Tadong Gangtok , 737101</p>
          <p>Email: sikkimrideasy@gmail.com</p>
          <p>Phone: +91 8918655889 OR</p>
          <p>+91 7478913770</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Sikkim RidEasy. All rights reserved.</p>
    </footer>
  )
}

export default Footer