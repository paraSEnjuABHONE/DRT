import { useState } from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Donut Rescue Team</span>
                  <span className="block text-gray-800">Together for Myanmar</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  In the wake of the March 28 earthquake, the Donut Rescue Team came together...
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                  <a
                    href="#"
                    className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 md:py-4 md:text-lg md:px-8"
                  >
                    Donate
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors duration-200 md:py-4 md:text-lg md:px-8"
                  >
                    View Live Map
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="mt-4 h-1 w-20 bg-gray-900 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Respond */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md h-full">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-48">
                <img
                  src="/src/assets/img/Respond.jpg"
                  alt="Respond"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 border-t-4 border-gray-900 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Respond</h3>
                <p className="text-gray-600 flex-grow">Immediate action to locate and assist victims during critical moments after disaster strikes.</p>
              </div>
            </div>

            {/* Card 2 - Rescue */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md h-full">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-48">
                <img
                  src="/src/assets/img/Rescue.jpg"
                  alt="Rescue"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 border-t-4 border-gray-900 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rescue</h3>
                <p className="text-gray-600 flex-grow">Deploying expert teams and local volunteers to save lives in hazardous conditions.</p>
              </div>
            </div>

            {/* Card 3 - Rebuild */}
            <div className="flex flex-col bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md h-full">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-48">
                <img
                  src="/src/assets/img/Rebuild.jpg"
                  alt="Rebuild"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 border-t-4 border-gray-900 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rebuild</h3>
                <p className="text-gray-600 flex-grow">Long-term commitment to help communities rise stronger through sustainable rebuilding efforts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;