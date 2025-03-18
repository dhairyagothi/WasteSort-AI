import { useState, useEffect } from 'react';
import { MapPinIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline';

const Tracking = () => {
    // Sample vehicle data - replace with real-time data from your backend
    const [vehicles, setVehicles] = useState([
        {
            id: 'V001',
            driverName: 'Rajesh Kumar',
            vehicleNumber: 'GJ-06-XX-1234',
            area: 'Sector 12',
            status: 'active',
            lastUpdated: new Date(),
            location: {
                latitude: 22.3039,
                longitude: 70.8022,
                currentStop: 'Block A, Sector 12'
            },
            completedStops: 7,
            totalStops: 15,
            estimatedCompletion: '11:30 AM'
        },
        // Add more vehicles as needed
    ]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Real-Time Vehicle Tracking
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Track waste collection vehicles in your area
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Vehicle List */}
                    <div className="lg:col-span-1 space-y-4">
                        {vehicles.map(vehicle => (
                            <div 
                                key={vehicle.id}
                                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <TruckIcon className="h-6 w-6 text-green-500 mr-2" />
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                                            {vehicle.vehicleNumber}
                                        </span>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        vehicle.status === 'active' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-gray-100 text-gray-800'
                                    }`}>
                                        {vehicle.status === 'active' ? 'Active' : 'Inactive'}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <MapPinIcon className="h-4 w-4 mr-2" />
                                        {vehicle.location.currentStop}
                                    </div>
                                    
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <ClockIcon className="h-4 w-4 mr-2" />
                                        ETA: {vehicle.estimatedCompletion}
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-4">
                                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                                            <span>Progress</span>
                                            <span>{vehicle.completedStops}/{vehicle.totalStops} stops</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-green-500 h-2 rounded-full" 
                                                style={{ 
                                                    width: `${(vehicle.completedStops / vehicle.totalStops) * 100}%` 
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map View */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-[600px] flex items-center justify-center">
                            <p className="text-gray-500 dark:text-gray-400">
                                Map View - Integrate your preferred mapping service here
                                (Google Maps, Mapbox, etc.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracking;

