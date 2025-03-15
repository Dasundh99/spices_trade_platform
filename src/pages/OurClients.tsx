import { useState, ChangeEvent, useEffect, useRef } from 'react';
import WorldMap from '../assets/AdobeStock_564546034.png';

const ExportSection = () => {
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const mapRef = useRef<HTMLImageElement>(null);

    const countries = [
        'India',
        'Brazil',
        'Australia',
        'United States',
        'China',
    ];

    // Base coordinates as percentages of the map dimensions (0-100%)
    const baseExportLocations = [
        { name: 'Brazil', location: 'Rio de Janeiro', coordinates: { x: 40, y: 76 } },
        { name: 'India', location: 'Mumbai', coordinates: { x: 61, y: 62 } },
        { name: 'Australia', location: 'Sydney', coordinates: { x: 75, y: 80 } },
        { name: 'United States', location: 'New York', coordinates: { x: 35, y: 52 } },
        { name: 'China', location: 'Shanghai', coordinates: { x: 73, y: 47 } },
    ];

    // Update map dimensions on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (mapRef.current) {
                const { width, height } = mapRef.current.getBoundingClientRect();
                setMapDimensions({ width, height });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Get responsive coordinates maintaining aspect ratio
    const getResponsiveCoordinates = (baseX: number, baseY: number) => {
        if (!mapDimensions.width || !mapDimensions.height) {
            return { x: '0%', y: '0%' }; // Fallback until map loads
        }

        // Convert base percentage coordinates to actual pixel positions
        const xPercent = baseX / 100;
        const yPercent = baseY / 100;

        return {
            x: `${xPercent * 100}%`,
            y: `${yPercent * 100}%`
        };
    };

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
    };

    const handleSeeServicesClick = () => {
        alert('Redirecting to Services page!');
    };

    return (
        <section id="clients" className="bg-gray-100 py-8 md:py-16 overflow-hidden">
            {/* Heading and Subheading */}
            <div className="container mx-auto px-4 text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    We're global to privilege you
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa.
                </p>
            </div>

            {/* World Map Section */}
            <div className="relative container mx-auto px-4">
                <div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1]">
                    <img
                        ref={mapRef}
                        src={WorldMap}
                        alt="World Map"
                        className="w-full h-full object-contain opacity-50"
                    />
                    {/* Export Location Markers */}
                    {baseExportLocations.map((location, index) => {
                        const { x, y } = getResponsiveCoordinates(
                            location.coordinates.x,
                            location.coordinates.y
                        );
                        return (
                            <div
                                key={index}
                                className="absolute group"
                                style={{
                                    left: x,
                                    top: y,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                onMouseEnter={() => setHoveredLocation(location.name)}
                                onMouseLeave={() => setHoveredLocation(null)}
                            >
                                <div className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-green-500 rounded-full animate-pulse transition-transform duration-300 group-hover:scale-125"></div>

                                {/* Tooltip on hover */}
                                {hoveredLocation === location.name && (
                                    <div
                                        className="absolute top-[-50px] sm:top-[-60px] left-1/2 transform -translate-x-1/2 
                                        bg-white p-2 sm:p-3 rounded-lg shadow-lg border-l-4 border-green-500
                                        flex items-center space-x-2 transition-all duration-300 
                                        opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 text-xs sm:text-sm"
                                    >
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
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
                                        <div className="text-gray-800">
                                            <span className="font-bold">{location.name}</span>
                                            <br />
                                            {location.location}
                                        </div>
                                    </div>
                                )}

                                {/* Tooltip on country selection */}
                                {selectedCountry === location.name && !hoveredLocation && (
                                    <div
                                        className="absolute top-[-50px] sm:top-[-60px] left-1/2 transform -translate-x-1/2 
                                        bg-white p-2 rounded shadow-md text-xs sm:text-sm text-gray-800"
                                    >
                                        {location.name} <br /> {location.location}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Content Below Map */}
            <div className="container mx-auto px-4 text-center mt-8">
                {/* Statistics */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 mb-2">+10</div>
                        <p className="text-gray-600 text-sm sm:text-base">Awards</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 mb-2">+190</div>
                        <p className="text-gray-600 text-sm sm:text-base">Case Studies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 mb-2">+2,781</div>
                        <p className="text-gray-600 text-sm sm:text-base">Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 mb-2">9</div>
                        <p className="text-gray-600 text-sm sm:text-base">Offices</p>
                    </div>
                </div>

                {/* Country Dropdown and Button */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-full sm:w-auto">
                        <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="appearance-none w-full sm:w-auto bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
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
                        className="w-full sm:w-auto bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-800 transition-colors"
                    >
                        See Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExportSection;