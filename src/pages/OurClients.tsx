import { useState, useEffect, useRef } from 'react';
import WorldMap from '../assets/AdobeStock_660856837.png';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ExportSection = () => {
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const mapRef = useRef<HTMLImageElement>(null);

    const baseExportLocations = [
        { name: 'Maldives', coordinates: { x: 62.1, y: 58.5 } },
        { name: 'India', coordinates: { x: 63, y: 49 } },
        { name: 'Germany', coordinates: { x: 48, y: 35 } },
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
            className="bg-green-100 pt-10 overflow-hidden font-lato relative"
            style={{
                borderTopLeftRadius: '50% 10%',
                borderTopRightRadius: '50% 10%',
                marginTop: '1rem',
                paddingTop: '4rem',
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

            <div className="relative container mx-auto px-4 pb-10">
                <div className="relative w-full max-w-[1200px] mx-auto aspect-[2/1]">
                    <img
                        ref={mapRef}
                        src={WorldMap}
                        alt="World Map"
                        className="w-full h-full object-contain rounded-lg shadow-lg bg-white opacity-60"
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
                                <FaMapMarkerAlt 
                                    className="w-5 sm:w-6 md:w-9 h-5 sm:h-6 md:h-9 text-red-500 animate-bounce transition-transform duration-200 group-hover:scale-125 z-10" 
                                />

                                {hoveredLocation === location.name && (
                                    <div
                                        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2
                                        bg-white p-3 rounded-lg shadow-lg border-l-4 border-green-500
                                        flex items-center space-x-2 transition-all duration-300 
                                        opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 text-sm z-20"
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
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExportSection;