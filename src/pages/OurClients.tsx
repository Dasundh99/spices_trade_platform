import { useState, ChangeEvent } from 'react';

const ExportSection = () => {
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null); // Track the hovered location

    const countries = [
        'India',
        'Brazil',
        'Australia',
        'United States',
        'China',
        // Add more countries as needed
    ];

    const exportLocations = [
        { name: 'Brazil', location: 'Rio de Janeiro', coordinates: { x: '40%', y: '70%' } },
        { name: 'India', location: 'Mumbai', coordinates: { x: '60%', y: '50%' } },
        { name: 'Australia', location: 'Sydney', coordinates: { x: '75%', y: '80%' } },
        { name: 'United States', location: 'New York', coordinates: { x: '30%', y: '40%' } },
        { name: 'China', location: 'Shanghai', coordinates: { x: '70%', y: '45%' } },
    ];

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
    };

    const handleSeeServicesClick = () => {
        alert('Redirecting to Services page!'); // Replace with actual navigation logic
    };

    return (
        <section className="relative bg-gray-100 py-16 overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0">
                <img
                    src="https://via.placeholder.com/1200x600" // Replace with your world map image URL
                    alt="World Map"
                    className="w-full h-full object-cover opacity-50"
                />
                {/* Export Location Markers */}
                {exportLocations.map((location, index) => (
                    <div
                        key={index}
                        className="absolute group"
                        style={{
                            left: location.coordinates.x,
                            top: location.coordinates.y,
                            transform: 'translate(-50%, -50%)',
                        }}
                        onMouseEnter={() => setHoveredLocation(location.name)} // Set hovered location
                        onMouseLeave={() => setHoveredLocation(null)} // Clear hovered location
                    >
                        {/* Dot with hover effect */}
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse transition-transform duration-300 group-hover:scale-125"></div>

                        {/* Tooltip on hover */}
                        {hoveredLocation === location.name && (
                            <div
                                className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 
                                bg-white p-3 rounded-lg shadow-lg border-l-4 border-green-500
                                flex items-center space-x-2 transition-all duration-300 
                                opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                            >
                                {/* Icon for a modern touch */}
                                <svg
                                    className="w-5 h-5 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {/* Location Info */}
                                <div className="text-sm text-gray-800">
                                    <span className="font-bold">{location.name}</span>
                                    <br />
                                    {location.location}
                                </div>
                            </div>
                        )}

                        {/* Tooltip on country selection */}
                        {selectedCountry === location.name && !hoveredLocation && (
                            <div
                                className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 
                                bg-white p-2 rounded shadow-md text-sm text-gray-800"
                            >
                                {location.name} <br /> {location.location}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    We're global to privilege you
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa.
                </p>

                {/* Country Dropdown and Button */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <div className="relative">
                        <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                        >
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 12l-5-5h10l-5 5z" />
                            </svg>
                        </div>
                    </div>
                    <button
                        onClick={handleSeeServicesClick}
                        className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-800 transition-colors"
                    >
                        See Services
                    </button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-green-500 mb-2">+10</div>
                        <p className="text-gray-600">Awards</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-green-500 mb-2">+190</div>
                        <p className="text-gray-600">Case Studies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-green-500 mb-2">+2,781</div>
                        <p className="text-gray-600">Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-4xl md:text-5xl text-green-500 mb-2">9</div>
                        <p className="text-gray-600">Offices</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExportSection;