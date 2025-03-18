import React, { useState } from 'react';
import { 
    CheckCircleIcon, 
    ClockIcon, 
    XCircleIcon,
    CalendarIcon,
    FunnelIcon
} from '@heroicons/react/24/outline';

const PickupHistory = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    
    // Sample data for pickup history
    const pickupRecords = [
        { 
            id: 1, 
            date: '2023-10-01', 
            itemType: 'Plastic Bottles', 
            quantity: 20, 
            status: 'Completed',
            location: 'Sector 7, Block A',
            weight: '5.2 kg'
        },
        { 
            id: 2, 
            date: '2023-10-05', 
            itemType: 'Cardboard Boxes', 
            quantity: 15, 
            status: 'Completed',
            location: 'Sector 12, Main Road',
            weight: '8.5 kg'
        },
        { 
            id: 3, 
            date: '2023-10-10', 
            itemType: 'Glass Jars', 
            quantity: 10, 
            status: 'Pending',
            location: 'Sector 4, Market Area',
            weight: '3.8 kg'
        },
        { 
            id: 4, 
            date: '2023-10-15', 
            itemType: 'Metal Cans', 
            quantity: 25, 
            status: 'Completed',
            location: 'Sector 9, Park View',
            weight: '6.7 kg'
        },
        { 
            id: 5, 
            date: '2023-10-20', 
            itemType: 'E-Waste', 
            quantity: 5, 
            status: 'Cancelled',
            location: 'Sector 2, Commercial Zone',
            weight: '4.1 kg'
        },
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed':
                return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
            case 'Pending':
                return <ClockIcon className="h-5 w-5 text-yellow-500" />;
            case 'Cancelled':
                return <XCircleIcon className="h-5 w-5 text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Cancelled':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default:
                return '';
        }
    };

    const filteredRecords = filterStatus === 'all' 
        ? pickupRecords 
        : pickupRecords.filter(record => record.status.toLowerCase() === filterStatus);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Pickup History
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Track your waste collection records and history
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-6 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <FunnelIcon className="h-5 w-5 text-gray-500" />
                        <select 
                            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                     rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Records Grid */}
                <div className="grid gap-4">
                    {filteredRecords.map(record => (
                        <div 
                            key={record.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Pickup Date
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {new Date(record.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${getStatusColor(record.status)}`}>
                                    {getStatusIcon(record.status)}
                                    {record.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Item Type</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{record.itemType}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Quantity</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{record.quantity} units</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Weight</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{record.weight}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{record.location}</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PickupHistory;