const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4">
            <span className="text-gray-800 font-semibold uppercase text-sm tracking-wider">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Donut Rescue Team
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              United in crisis, committed to recovery, building hope for Myanmar
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-900 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                <div className="h-1 w-16 bg-gray-600 mb-6"></div>
                <p className="text-gray-300">
                  Born from emergency, built on compassion
                </p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-gray-700 mb-4 text-lg">
                The Donut Rescue Team emerged spontaneously in the chaotic aftermath of the March 28 earthquake. What began as a handful of concerned citizens quickly grew into a coordinated force of hundreds.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Our name comes from the makeshift donut-shaped markers we used to identify safe zones in the early days. Today, it symbolizes our circular commitment - we never leave until the job is done.
              </p>
              <p className="text-gray-700 text-lg">
                Comprised of medical professionals, engineers, students, and everyday heroes, we bridge the gap between official response and community needs.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg">
              To provide immediate, effective disaster response that saves lives today while building resilient communities for tomorrow. We combine emergency action with sustainable recovery, ensuring no one is left behind.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg">
              A Myanmar where communities don't just survive disasters, but thrive after them. We envision a network of prepared, connected neighborhoods where mutual aid is the foundation of disaster resilience.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Emergency Response",
                description: "24/7 crisis intervention including search & rescue, medical triage, and emergency shelter",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Community Support",
                description: "Psychological first aid, family reunification, and trauma counseling services",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: "Resource Distribution",
                description: "Coordinated delivery of food, clean water, medicines, and essential supplies",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                )
              },
              {
                title: "Recovery Planning",
                description: "Long-term rebuilding strategies and disaster preparedness training",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-gray-900">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Compassion in Action",
                    description: "We meet suffering with both heart and hands, ensuring dignity guides every interaction"
                  },
                  {
                    title: "Courageous Commitment",
                    description: "We go where needed, despite risks or challenges, because people matter more"
                  },
                  {
                    title: "Community First",
                    description: "Local knowledge leads our efforts - we listen before we act"
                  },
                  {
                    title: "Collaborative Strength",
                    description: "We multiply impact by partnering with groups and individuals at all levels"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-gray-900 p-8 flex items-center">
              <div>
                <div className="text-gray-400 mb-4 text-lg">What drives us</div>
                <h3 className="text-3xl font-bold text-white mb-4">Why We Serve</h3>
                <p className="text-gray-300">
                  In Myanmar's darkest hours, we choose to be the light. Not because it's easy, but because it's right.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Movement</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-lg">
            Whether through volunteering, donations, or simply spreading awareness - your support makes rescue possible.
          </p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;