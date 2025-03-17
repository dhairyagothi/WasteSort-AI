import React from 'react';
import { FaRecycle, FaCalendarCheck, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';

const PersonalReports = () => {
    // Example data - replace with actual data from your backend
    const wasteData = {
        lastPickup: '2024-03-15',
        nextScheduledPickup: '2024-03-22',
        municipality: 'Central Municipality',
        ward: 'Ward 7',
        city: 'Green City',
        monthlyStats: {
            organicWaste: 45,
            recyclableWaste: 30,
            hazardousWaste: 5,
            totalWaste: 80
        },
        recentPickups: [
            { date: '2024-03-15', amount: 12, type: 'Mixed Waste' },
            { date: '2024-03-08', amount: 15, type: 'Recyclable' },
            { date: '2024-03-01', amount: 10, type: 'Organic' },
        ]
    };

    return (
        <div className="dark:bg-gray-900 dark:text-white p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 flex items-center">
                    <FaRecycle className="mr-3 text-green-500" />
                    Personal Waste Management Report
                </h1>

                {/* Location Information */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-blue-500 mr-2" />
                        <h2 className="text-xl font-semibold">Location Details</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Municipality</p>
                            <p className="font-semibold">{wasteData.municipality}</p>
                        </div>
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Ward</p>
                            <p className="font-semibold">{wasteData.ward}</p>
                        </div>
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">City</p>
                            <p className="font-semibold">{wasteData.city}</p>
                        </div>
                    </div>
                </div>

                {/* Pickup Schedule */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <div className="flex items-center mb-4">
                        <FaCalendarCheck className="text-green-500 mr-2" />
                        <h2 className="text-xl font-semibold">Pickup Schedule</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Last Pickup</p>
                            <p className="font-semibold">{wasteData.lastPickup}</p>
                        </div>
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Next Scheduled Pickup</p>
                            <p className="font-semibold">{wasteData.nextScheduledPickup}</p>
                        </div>
                    </div>
                </div>

                {/* Monthly Statistics */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <div className="flex items-center mb-4">
                        <FaChartLine className="text-purple-500 mr-2" />
                        <h2 className="text-xl font-semibold">Monthly Waste Statistics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Organic Waste</p>
                            <p className="font-semibold">{wasteData.monthlyStats.organicWaste} kg</p>
                        </div>
                        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Recyclable Waste</p>
                            <p className="font-semibold">{wasteData.monthlyStats.recyclableWaste} kg</p>
                        </div>
                        <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Hazardous Waste</p>
                            <p className="font-semibold">{wasteData.monthlyStats.hazardousWaste} kg</p>
                        </div>
                        <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-300">Total Waste</p>
                            <p className="font-semibold">{wasteData.monthlyStats.totalWaste} kg</p>
                        </div>
                    </div>
                </div>

                {/* Recent Pickups */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Recent Pickups</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="py-3 px-4 text-left">Date</th>
                                    <th className="py-3 px-4 text-left">Type</th>
                                    <th className="py-3 px-4 text-left">Amount (kg)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wasteData.recentPickups.map((pickup, index) => (
                                    <tr key={index} className="border-b dark:border-gray-700">
                                        <td className="py-3 px-4">{pickup.date}</td>
                                        <td className="py-3 px-4">{pickup.type}</td>
                                        <td className="py-3 px-4">{pickup.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalReports;