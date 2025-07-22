import React from 'react';
import wicysLogo from '/Users/aaryaamoharir/repos/wicys_website/src/NEWWiCySLogotoplinestackedhoriz.png';


const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <header className="bg-transparent text-white p-4 shadow-lg sticky top-0 z-100 ">

      <nav className="container mx-auto flex justify-between items-center">
        <img src={wicysLogo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="text-l hover:text-purple-300 transition duration-300">Home</a></li>
            <li><a href="#about" className="text-l hover:text-purple-200 transition duration-300">About</a></li>
            <li><a href="#news" className="text-l hover:text-purple-200 transition duration-300">News</a></li>
            <li><a href="#events" className="text-l hover:text-purple-200 transition duration-300">Events</a></li>
            <li><a href="#officers" className="text-l hover:text-purple-200 transition duration-300">Officers</a></li>
            <li><a href="#contact" className="text-l hover:text-purple-200 transition duration-300">Contact</a></li>
          </ul>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative h-[60vh] md:h-[70vh] bg-gradient-to-t from-purple-300 to-indigo-900 flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
  {[...Array(100)].map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 6 + 2; // 2px–6px stars
    const delay = Math.random() * 3;    // random delay for blinking

    return (
      <div
        key={i}
        className="star bg-white rounded-full absolute"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          animationDelay: `${delay}s`,
        }}
      />
    );
  })}
</div>



        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 leading-tight rounded-lg p-2 bg-opacity-20">
            Empowering Women in <span className="text-purple-300">Cybersecurity</span>
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto rounded-lg p-2 bg-opacity-20">
            Fostering a community of strong, skilled, and innovative women leading the future of digital security.
          </p>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">Who We Are</h2>
          <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Dedicated to creating an inclusive and empowering environment for women in cybersecurity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Our Mission</h3>
              <p className="text-gray-600">
                To advance women in cybersecurity through professional development, mentorship, and community building. We bridge the gender gap by providing resources, networking opportunities, and advocacy for women at all career stages.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">What We Do</h3>
              <p className="text-gray-600">
                We organize workshops, networking events, and mentorship programs. Our initiatives include scholarship opportunities, career development resources, technical training sessions, and advocacy for inclusive workplace practices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 013-3h12a3 3 0 013 3v2zm-11.234-6.68a2 2 0 110-2.828 2 2 0 010 2.828zM15 11a3 3 0 10-3-3m0 0a3 3 0 00-3 3v4a3 3 0 003 3"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Our Community</h3>
              <p className="text-gray-600">
                A diverse network of cybersecurity professionals, students, and enthusiasts committed to supporting each other's growth. We foster an environment where women can share knowledge, collaborate on projects, and advance their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-xl">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">50+</p>
              <p className="text-lg md:text-xl">Active Members</p>
            </div>
            <div className="p-4 rounded-xl">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">30+</p>
              <p className="text-lg md:text-xl">Events Hosted</p>
            </div>
            <div className="p-4 rounded-xl">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">7+</p>
              <p className="text-lg md:text-xl">Years of Service</p>
            </div>
            <div className="p-4 rounded-xl">
              <p className="text-4xl md:text-5xl font-extrabold mb-2">5+</p>
              <p className="text-lg md:text-xl">Companies Worked With</p>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-800">Latest News</h2>
          <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Stay updated with the latest developments in cybersecurity and our community initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src="https://placehold.co/400x250/9333ea/ffffff?text=News+Image+1" alt="News 1" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">June 15, 2025</p>
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">WICS Hosts Annual Cybersecurity Summit</h3>
                <p className="text-gray-600 mb-4">
                  Our annual summit brought together industry leaders, experts, and enthusiasts for insightful discussions and workshops.
                </p>
                <a href="#" className="text-purple-600 hover:underline font-medium">Read More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src="https://placehold.co/400x250/a855f7/ffffff?text=News+Image+2" alt="News 2" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">June 10, 2025</p>
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">New Mentorship Program Launched</h3>
                <p className="text-gray-600 mb-4">
                  We're excited to announce our new mentorship program connecting aspiring professionals with experienced mentors.
                </p>
                <a href="#" className="text-purple-600 hover:underline font-medium">Read More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src="https://placehold.co/400x250/c084fc/ffffff?text=News+Image+3" alt="News 3" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">June 5, 2025</p>
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Scholarship Recipients Announced</h3>
                <p className="text-gray-600 mb-4">
                  Congratulations to the deserving recipients of this year's WICS scholarships!
                </p>
                <a href="#" className="text-purple-600 hover:underline font-medium">Read More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-800">Upcoming Events</h2>
          <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Join us for workshops, networking events, and professional development opportunities.
          </p>

          <div className="relative border-l-4 border-purple-500 pl-8 md:pl-12">
            <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 bg-purple-600 text-white px-4 py-2 rounded-full text-center font-semibold mb-4 md:mb-0 md:-ml-16">
                July 15, 2025
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-grow md:ml-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">Cybersecurity Career Fair</h3>
                <p className="text-gray-600">
                  Connect with leading cybersecurity companies and explore career opportunities. Open to all experience levels.
                </p>
              </div>
            </div>

            <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 bg-purple-600 text-white px-4 py-2 rounded-full text-center font-semibold mb-4 md:mb-0 md:-ml-16">
                Aug 2, 2025
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-grow md:ml-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">Hands-on Ethical Hacking Workshop</h3>
                <p className="text-gray-600">
                  Learn penetration testing fundamentals in this interactive workshop designed for beginners and intermediate practitioners.
                </p>
              </div>
            </div>

            <div className="mb-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 bg-purple-600 text-white px-4 py-2 rounded-full text-center font-semibold mb-4 md:mb-0 md:-ml-16">
                Aug 20, 2025
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex-grow md:ml-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">Women Leaders Panel Discussion</h3>
                <p className="text-gray-600">
                  Hear from industry veterans about their career journeys, challenges, and advice for aspiring cybersecurity professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 rounded-t-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} WICS. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
