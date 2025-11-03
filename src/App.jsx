import React, { useEffect } from 'react';

const App = () => {
  const events = [
    {
      date: "April 22nd, 2025 @5-6PM in SLC 2.304 ",
      title: "Origami Social",
      description: "Take a break from studying and join us for an evening of origami and socializing! All materials will be provided, just bring your creativity and enthusiasm.",
      link: "https://www.instagram.com/wicys.utd/"
    },
    {
      date: "September 2, 2025 @7-8PM in ECSN 2.120",
      title: "WiCyS Kickoff",
      description: "Learn how you can get involved, hear about our exciting upcoming events, meet new friends & connect with the WiCyS community, and of course… enjoy some FREE FOOD. Bring your energy, bring a friend, and let’s start the semester off right! 💜💚",
      link: "https://www.instagram.com/wicys.utd/"
    },
    {
      date: "September 9, 2025 @7-8PM in JO 3.516",
      title: "Unlocking GRC with Bdubzz",
      description: "Curious about cybersecurity career paths beyond hacking and defense? Join us for a special session with Bdubzz, an expert in Governance, Risk, and Compliance (GRC). You’ll discover why GRC is one of cybersecurity’s best-kept career opportunities and learn how to break into this field", 
      link: "https://www.instagram.com/wicys.utd/"
    },
    {
      date: "October 21st, 2025 @7-8PM",
      title: "AWS x WiCyS: AWS Jam",
      description: "Come be part of a high-energy, hands-on event designed to help you grow your AWS cloud skills — while having fun and networking with Amazonians. AWS Jam is a gamified, team-based learning experience where participants solve real-world cloud challenges across security, generative AI, DevOps, and more.", 
      link: "https://www.instagram.com/wicys.utd/"
    },

  ];
  
    const news = [
      {
        date: "September 5, 2025",
        title: "CISA Warns of Critical Cisco Vulnerability",
        description:
          "The Cybersecurity and Infrastructure Security Agency (CISA) issued an advisory urging organizations to patch a critical vulnerability in Cisco’s VPN software that could allow remote code execution.",
        link: "https://www.cisa.gov/news-events/alerts"
      },
      {
        date: "September 3, 2025",
        title: "FBI Releases Ransomware Trends Report",
        description:
          "The FBI reported a 20% rise in ransomware incidents targeting healthcare and education, warning organizations to strengthen their backup and recovery systems.",
        link: "https://www.ic3.gov/"
      },
      {
        date: "August 30, 2025",
        title: "Summer 2026 Cybersecurity Internships Open at CrowdStrike",
        description:
          "CrowdStrike is now accepting applications for its 2026 Summer Internship program in cybersecurity, cloud engineering, and threat analysis. Apply early for priority consideration.",
        link: "https://crowdstrike.wd5.myworkdayjobs.com/en-US/crowdstrikecareers"
      },
      {
        date: "August 28, 2025",
        title: "NSA Cybersecurity Internship Applications Now Live",
        description:
          "The National Security Agency opened applications for its summer 2026 cybersecurity internships, offering hands-on experience in threat analysis, reverse engineering, and secure systems.",
        link: "https://www.intelligencecareers.gov/nsa"
      }
    ];
  
  

  useEffect(() => {
    // Dynamically load GSAP and ScrollTrigger scripts
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;
    document.body.appendChild(scrollTriggerScript);

    // Run animation code after scripts are loaded
    scrollTriggerScript.onload = () => {
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      // Hero section animations
      gsap.from("#home h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from("#home p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.4
      });

      // UPDATED Helper function to animate numbers
      function animateValue(id, start, end, duration, suffix = "") {
        let obj = { val: start };
        let target = document.getElementById(id);
        
        gsap.to(obj, {
          val: end,
          duration: duration,
          ease: "power2.out",
          onUpdate: function() {
            target.innerHTML = Math.round(obj.val) + suffix;
          }
        });
      }

      // UPDATED ScrollTrigger for the statistics section
      function startCounters() {
        animateValue("stat-1", 0, 50, 2, "+"); // Active Members
        animateValue("stat-2", 0, 30, 2, "+"); // Events Hosted
        animateValue("stat-3", 0, 7, 2, "+");  // Years of Service
        animateValue("stat-4", 0, 5, 2, "+");  // Companies Worked With
      }

      window.ScrollTrigger.create({
        trigger: "#statistics",
        start: "top 80%",
        onEnter: startCounters,
        once: true
      });
    };

    // Cleanup function to remove scripts on component unmount
    return () => {
      document.body.removeChild(gsapScript);
      document.body.removeChild(scrollTriggerScript);
    };
  }, []);


  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      {/* Consolidated Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@300;400;500;600;700&family=Kantumruy+Pro:wght@400;700&family=Montserrat+Alternates:wght@400;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700;800;900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;700&display=swap" rel="stylesheet" />

      <header className="bg-white p-4 shadow-lg sticky top-0 z-100 ">
        <nav className="container mx-auto flex justify-between items-center">
          <img src="public/NEWWiCySLogotoplinestackedhoriz.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
          <ul
            className="hidden md:flex space-x-6"
            style={{
              fontFamily: 'Montserrat Alternates, sans-serif',
              color: '#6C60B4',
              fontWeight: 900,
            }}>
            <li><a href="#home" className="hover:text-[#353087] transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-[#353087] transition duration-300">About</a></li>
            <li><a href="#news" className="hover:text-[#353087] transition duration-300">News</a></li>
            <li><a href="#events" className="hover:text-[#353087] transition duration-300">Events</a></li>
            <li><a href="#officers" className="hover:text-[#353087] transition duration-300">Officers</a></li>
           </ul>
          <div className="md:hidden">
            <button className="text-gray-900 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
      </header>
      
      <section id="home" className="bg-gradient-to-br from-[#353087] to-[#D5AFFF] text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-20 md:py-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="mt-2 inline-block"
                    style={{
                      fontFamily: 'Kantumruy Pro, sans-serif',
                        background: '#FFFFFF',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                Empowering Women in
              </span>
              <br />
              <span className="mt-2 inline-block"
                    style={{
                      fontFamily: 'Montserrat Alternates, sans-serif',
                        background: '#D5AFFF',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                Cybersecurity
              </span>
            </h1>
                <p className="text-lg lg:text-xl max-w-xl mx-auto md:mx-0" 
                  style={{
                      fontFamily: 'Kantumruy Pro, sans-serif',
                      background: '#FFFFFF',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                  }}>
                  Fostering a community of strong, skilled, and innovative women leading the future of digital security.
                </p>
                <a href="#events" 
                  className="mt-10 inline-block bg-gradient-to-r from-[#9BC41F] to-[#b2e825] font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                      color: 'white',
                      fontFamily: 'Kantumruy Pro',
                      fontWeight: 'bold'
                  }}>
                    View Our Events
                </a>
              </div>              
            <div className="flex justify-center md:justify-end">
                <img src="public/privacy-image.jpg" alt="Privacy Image" className="w-full max-w-sm lg:max-w-md rounded-lg"/>
            </div>
        </div>
    </section>

    <section
  id="statistics"
  className="pt-24 pb-16 text-white"
  style={{
    background: 'radial-gradient(circle at center, #DDBEFF 0%, #DAB9FF 30%, #6C60B4 100%)',
  }}
>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="p-4">
        <p id="stat-1" className="text-4xl md:text-5xl mb-2 font-bold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>50+</p>
        <p className="text-lg md:text-xl" style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}>Active Members</p>
      </div>
      <div className="p-4">
        <p id="stat-2" className="text-4xl md:text-5xl mb-2 font-bold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>30+</p>
        <p className="text-lg md:text-xl" style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}>Events Hosted</p>
      </div>
      <div className="p-4">
        <p id="stat-3" className="text-4xl md:text-5xl mb-2 font-bold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>7+</p>
        <p className="text-lg md:text-xl" style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}>Years of Service</p>
      </div>
      <div className="p-4">
        <p id="stat-4" className="text-4xl md:text-5xl mb-2 font-bold" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>5+</p>
        <p className="text-lg md:text-xl" style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}>Companies Worked With</p>
      </div>
    </div>
  </div>
</section>


      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <h2
  className="text-3xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider"
  style={{
    fontFamily: 'Montserrat Alternates, sans-serif',
    color: '#9BC41F', // solid blue text
  }}
>
  Who We Are
</h2>

<p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12"
   style={{
     fontFamily: 'Kantumruy Pro, sans-serif',
     color: '#1E1E1E',
   }}>  Dedicated to creating an inclusive and empowering environment for women in cybersecurity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-purple-200 p-4 rounded-full mb-4">
              <img src="/goals.png" alt="Mission" className="w-12 h-12 object-contain" />
              </div>
              <h2
  className="text-xl md:text-4xl font-bold text-center mb-4 tracking-wider"
  style={{
    fontFamily: 'Montserrat Alternates, sans-serif',
    color: '#9BC41F', // solid blue text
  }}
>Our Mission</h2>
              <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12"
   style={{
     fontFamily: 'Kantumruy Pro, sans-serif',
     color: '#878787',
   }}>
                To advance women in cybersecurity through professional development, mentorship, and community building. We bridge the gender gap by providing resources, networking opportunities, and advocacy for a woman at all career stages.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
              <img src="/notebook.png" alt="What We Do" className="w-12 h-12 object-contain" /> </div>
              <h2
  className="text-xl md:text-4xl font-bold text-center mb-4 tracking-wider"
  style={{
    fontFamily: 'Montserrat Alternates, sans-serif',
    color: '#9BC41F', // solid blue text
  }}>What We Do</h2>
              <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12"
   style={{
     fontFamily: 'Kantumruy Pro, sans-serif',
     color: '#878787',
   }}>
                We organize workshops, networking events, and mentorship programs. Our initiatives include scholarship opportunities, career development resources, technical training sessions, and advocacy for inclusive workplace practices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="bg-purple-200 p-4 rounded-full mb-4">
              <img src="/commuinty.png" alt="What We Do" className="w-12 h-12 object-contain" /></div>
              <h2
  className="text-xl md:text-4xl font-bold text-center mb-4 tracking-wider"
  style={{
    fontFamily: 'Montserrat Alternates, sans-serif',
    color: '#9BC41F', // solid blue text
  }}>Our Community</h2>
              <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12"
   style={{
     fontFamily: 'Kantumruy Pro, sans-serif',
     color: '#878787',
   }}>
                A diverse network of cybersecurity professionals, students, and enthusiasts committed to supporting each other's growth. We foster an environment where women can share knowledge, collaborate on projects, and advance their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white uppercase tracking-wider" 
              style={{
                fontFamily: 'Montserrat Alternates, sans-serif',
                background: 'linear-gradient(135deg, #6C60B4, #D5AFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            Upcoming & Recent Events
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12" 
             style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
            Join us for workshops, networking events, and professional development opportunities.
          </p>

          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-6 px-2 scrollbar-hide" 
                 style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {events.map((event, index) => (
                <div key={index} 
                     className="flex-none w-80 h-96 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, #6C60B4, #D5AFFF)',
                     }}>
                  <div className="h-full p-6 flex flex-col justify-between text-white">
                    <div>
                      <div className="text-sm font-medium mb-4 opacity-90" 
                           style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-tight" 
                          style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-90" 
                         style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                        {event.description}
                      </p>
                    </div>
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 bg-white/80 backdrop-blur-sm text-[#6C60B4] px-4 py-2 rounded-full hover:bg-white transition-all duration-300 font-medium"
                      style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                      Learn More
                    </a>

                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {events.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-purple-300"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2
      className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider"
      style={{
        fontFamily: 'Montserrat Alternates, sans-serif',
        color: '#68A1C1', // solid blue text
      }}
    >
      Recent News and Job Opportunities
    </h2>

    <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12" 
       style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
      Stay updated with the latest cybersecurity news and job opportunities.
    </p>

    <div className="relative">
      <div className="flex overflow-x-auto space-x-6 pb-6 px-2 scrollbar-hide" 
           style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {news.map((newsItem, index) => (
          <div key={index} 
               className="flex-none w-80 h-96 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
               style={{
                 background: 'linear-gradient(135deg, #CBE5FD, #68A1C1)',
               }}>
            <div className="h-full p-6 flex flex-col justify-between text-white">
              <div>
                <div className="text-sm font-medium mb-4 opacity-90" 
                     style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                  {newsItem.date}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight" 
                    style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>
                  {newsItem.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90" 
                   style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                  {newsItem.description}
                </p>
              </div>
              <a 
                href={newsItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 bg-white/80 backdrop-blur-sm text-[#68A1C1] px-4 py-2 rounded-full hover:bg-white transition-all duration-300 font-medium"
                style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {news.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-blue-300"></div>
        ))}
      </div>
    </div>
  </div>
</section>
      <div className="flex flex-col gap-4">
  <div className="h-3 w-full" style={{ backgroundColor: "#6C60B4" }}></div>
  <div className="h-3 w-full" style={{ backgroundColor: "#9BC41F" }}></div>
  <div className="h-3 w-full" style={{ backgroundColor: "#68A1C1" }}></div>
</div>


      <section id="officers" className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-4">
      <h2
  className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-wider"
  style={{
    fontFamily: 'Montserrat Alternates, sans-serif',
    color: '#6C60B4', // solid blue text
  }}
>
          OFFICERS
        </h2>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Row 1 */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>Name</h3>
              <p className="text-gray-500 mb-4" style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>Officer Role</p>
           
            </div>
          ))}

          {/* Row 2 */}
          {[4, 5, 6].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>Name</h3>
              <p className="text-gray-500 mb-4" style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>Officer Role</p>
              
            </div>
          ))}

          {/* Row 3 */}
          {[7, 8, 9].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>Name</h3>
              <p className="text-gray-500 mb-4" style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>Officer Role</p>
              <div className="flex justify-center space-x-3">
              </div>
            </div>
          ))}

            {/* Row 4 - Only 2 cards centered */}
      <div className="col-span-full flex justify-center gap-8">
        {[10, 11].map((index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl w-80">
            <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Montserrat Alternates, sans-serif'}}>Name</h3>
            <p className="text-gray-500 mb-4" style={{fontFamily: 'Kantumruy Pro, sans-serif'}}>Officer Role</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    <div className="relative w-full bg-gray-100 ">
  {/* Wave at the bottom */}
  <svg
    className="w-full h-[600px]"  // custom height
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#77A2B7" />
        <stop offset="50%" stopColor="#77A2B7" />
        <stop offset="100%" stopColor="#B6D1EA" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradientWave)"
      d="M0,160 C360,300 1080,0 1440,160 L1440,320 L0,320 Z"
    />
  </svg>

  {/* Text inside the wave */}
  <div className="absolute inset-0 flex items-end justify-center pb-8">
  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
    Together – We Connect – Support – Thrive
  </h2>
  </div>
</div>





<footer
  className="text-white py-8 rounded-t-lg"
  style={{
    background: "linear-gradient(90deg, #77A2B7, #77A2B7, #B6D1EA)"
  }}
>
  <div className="container mx-auto px-4 text-center">
    <p className="mb-4">&copy; {new Date().getFullYear()} UTD WICYS. All rights reserved.</p>
  </div>
</footer>


      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default App;