import { useState, useEffect, useRef } from 'react';
import WorldMap from '../assets/AdobeStock_564546034.png';

const ExportSection = () => {
    const [selectedCountry] = useState('India');
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const mapRef = useRef<HTMLImageElement>(null);

    const baseExportLocations = [
        { name: 'Brazil', location: 'Rio de Janeiro', coordinates: { x: 40, y: 76 } },
        { name: 'India', location: 'Mumbai', coordinates: { x: 61, y: 62 } },
        { name: 'Australia', location: 'Sydney', coordinates: { x: 75, y: 80 } },
        { name: 'United States', location: 'New York', coordinates: { x: 35, y: 52 } },
        { name: 'China', location: 'Shanghai', coordinates: { x: 73, y: 47 } },
    ];

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

    const getResponsiveCoordinates = (baseX: number, baseY: number) => {
        if (!mapDimensions.width || !mapDimensions.height) {
            return { x: '0%', y: '0%' };
        }

        const xPercent = baseX / 100;
        const yPercent = baseY / 100;

        return {
            x: `${xPercent * 100}%`,
            y: `${yPercent * 100}%`
        };
    };

    return (
        <section 
            id="clients" 
            className="bg-gray-200 py-10 overflow-hidden font-lato relative"
            style={{
                borderTopLeftRadius: '50% 10%',
                borderTopRightRadius: '50% 10%',
                marginTop: '1rem', // Adjust this value to control how much it overlaps the previous section
                paddingTop: '4rem', // Add padding to prevent content from being cut off
            }}
        >
            <div className="container mx-auto px-2 text-center">
                <h2 className="text-4xl md:text-6xl text-black font-Semibold tracking-wide opacity-60">
                    Our Global Clients
                </h2>
                <p className="text-lg sm:text-lg md:text-xl text-black opacity-40 mb-4 pt-2 pb-4">
                    Exporting the local finest worldwide.
                </p>
            </div>

            <div className="relative container mx-auto px-4">
                <div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1]">
                    <img
                        ref={mapRef}
                        src={WorldMap}
                        alt="World Map"
                        className="w-full h-full object-contain rounded-lg shadow-lg bg-white"
                    />
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
                                <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-green-500 rounded-full animate-pulse transition-transform duration-300 group-hover:scale-125"></div>

                                {hoveredLocation === location.name && (
                                    <div
                                        className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 
                                        bg-white p-3 rounded-lg shadow-lg border-l-4 border-green-500
                                        flex items-center space-x-2 transition-all duration-300 
                                        opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 text-sm"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500"
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

                                {selectedCountry === location.name && !hoveredLocation && (
                                    <div
                                        className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 
                                        bg-white p-3 rounded shadow-md text-sm text-gray-800"
                                    >
                                        {location.name} <br /> {location.location}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="container mx-auto px-4 text-center mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8">
                    <div className="flex flex-col items-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 mb-2">+2</div>
                        <p className="text-gray-600 text-sm sm:text-base">Awards</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 mb-2">+190</div>
                        <p className="text-gray-600 text-sm sm:text-base">Case Studies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 mb-2">+147</div>
                        <p className="text-gray-600 text-sm sm:text-base">Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-500 mb-2">3</div>
                        <p className="text-gray-600 text-sm sm:text-base">Offices</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExportSection;