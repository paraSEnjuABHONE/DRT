import { useState } from 'react';

const DataPage = () => {
  const [activeTab, setActiveTab] = useState('collect');

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base font-semibold tracking-wide uppercase text-gray-500">Data Portal</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Collect and Access Geographic Data
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Contribute to our data collection efforts or access existing data for analysis.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full border border-gray-300 rounded-md bg-white text-gray-900"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="collect">Collect Data</option>
              <option value="access">Access Data</option>
              <option value="emergency">Emergency Reports</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('collect')}
                  className={`${
                    activeTab === 'collect'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                >
                  Collect Data
                </button>
                {/* <button
                  onClick={() => setActiveTab('access')}
                  className={`${
                    activeTab === 'access'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                >
                  Access Data
                </button>
                <button
                  onClick={() => setActiveTab('emergency')}
                  className={`${
                    activeTab === 'emergency'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                >
                  Emergency Reports
                </button> */}
              </nav>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
          {activeTab === 'collect' && (
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">Submit Geographic Data</h3>
              <p className="text-sm text-gray-600 mb-6">
                Help us collect valuable data about local conditions in Myanmar. Your contributions help build resilience and support emergency response efforts.
              </p>
              <div className="border border-gray-200 rounded-md">
                <iframe 
                  src="https://forms.gle/mdC6MC2c8YDFqxx29" 
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="bg-white"
                  title="Data Collection Form"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          )}

          {activeTab === 'access' && (
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">Access Existing Data</h3>
              <p className="text-sm text-gray-600 mb-6">
                Browse and download our collection of geographic data for Myanmar.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h4 className="text-base font-bold text-gray-900">Flood Risk Maps</h4>
                  <p className="mt-2 text-sm text-gray-600">GIS data showing flood-prone areas across Myanmar</p>
                  <div className="mt-4">
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline">Download</a>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h4 className="text-base font-bold text-gray-900">Land Use Data</h4>
                  <p className="mt-2 text-sm text-gray-600">Current land use patterns across regions</p>
                  <div className="mt-4">
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline">Download</a>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <h4 className="text-base font-bold text-gray-900">Infrastructure Maps</h4>
                  <p className="mt-2 text-sm text-gray-600">Road networks, bridges, and critical infrastructure</p>
                  <div className="mt-4">
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline">Download</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">Emergency Reporting</h3>
              <p className="text-sm text-gray-600 mb-6">
                Submit emergency reports or access current situation reports.
              </p>
              <div className="mb-8">
                <h4 className="text-base font-bold text-gray-900 mb-4">Report an Emergency</h4>
                <div className="border border-gray-200 rounded-md">
                  <iframe 
                    src="https://forms.gle/mdC6MC2c8YDFqxx29" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="bg-white"
                    title="Emergency Reporting Form"
                  >
                    Loading form...
                  </iframe>
                </div>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-4">Current Situation Reports</h4>
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                  <div className="p-4 hover:bg-gray-50">
                    <h5 className="font-bold">Flood Report - Ayeyarwady Delta Region</h5>
                    <p className="text-sm text-gray-600 mt-1">Updated: April 15, 2023</p>
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline block mt-2">View Report</a>
                  </div>
                  <div className="p-4 hover:bg-gray-50">
                    <h5 className="font-bold">Landslide Risk - Chin State</h5>
                    <p className="text-sm text-gray-600 mt-1">Updated: March 23, 2023</p>
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline block mt-2">View Report</a>
                  </div>
                  <div className="p-4 hover:bg-gray-50">
                    <h5 className="font-bold">Earthquake Response - Sagaing Region</h5>
                    <p className="text-sm text-gray-600 mt-1">Updated: February 10, 2023</p>
                    <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium underline block mt-2">View Report</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPage;