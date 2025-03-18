import { useState } from 'react';
import { 
    CheckCircleIcon, 
    ClockIcon, 
    ExclamationCircleIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

const Track = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [complaints] = useState([
        {
            id: 'C001',
            title: 'Irregular Waste Collection',
            description: 'Waste not collected for past 2 days in Sector 7, Block C',
            status: 'resolved',
            priority: 'high',
            dateSubmitted: '2024-03-20',
            lastUpdated: '2024-03-22',
            category: 'Collection',
            location: 'Sector 7, Block C',
            assignedTo: 'Sanitation Department',
            timeline: [
                { date: '2024-03-20', status: 'submitted', message: 'Complaint registered' },
                { date: '2024-03-21', status: 'in-progress', message: 'Assigned to collection team' },
                { date: '2024-03-22', status: 'resolved', message: 'Collection schedule normalized' }
            ]
        },
        {
            id: 'C002',
            title: 'Overflowing Garbage Bin',
            description: 'Community bin near park is overflowing',
            status: 'in-progress',
            priority: 'medium',
            dateSubmitted: '2024-03-21',
            lastUpdated: '2024-03-22',
            category: 'Maintenance',
            location: 'Sector 12, Main Park',
            assignedTo: 'Municipal Team',
            timeline: [
                { date: '2024-03-21', status: 'submitted', message: 'Complaint registered' },
                { date: '2024-03-22', status: 'in-progress', message: 'Team dispatched' }
            ]
        }
    ]);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'resolved':
                return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
            case 'in-progress':
                return <ClockIcon className="h-5 w-5 text-yellow-500" />;
            default:
                return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'resolved':
                return 'bg-green-100 text-green-800';
            case 'in-progress':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-red-100 text-red-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Track Your Complaints
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Monitor the status of your submitted complaints
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search complaints by ID or description..."
                            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border dark:border-gray-700 
                                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                </div>

                {/* Complaints List */}
                <div className="space-y-4">
                    {complaints.map(complaint => (
                        <div key={complaint.id} 
                             className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <ChatBubbleLeftIcon className="h-5 w-5 text-gray-500" />
                                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {complaint.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            ID: {complaint.id}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(complaint.status)}`}>
                                        <div className="flex items-center gap-1">
                                            {getStatusIcon(complaint.status)}
                                            <span>{complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}</span>
                                        </div>
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <p className="text-gray-700 dark:text-gray-300">{complaint.description}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        Location: {complaint.location}
                                    </p>
                                </div>

                                {/* Timeline */}
                                <div className="border-t dark:border-gray-700 pt-4">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                                        Progress Timeline
                                    </h3>
                                    <div className="space-y-3">
                                        {complaint.timeline.map((event, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0">
                                                    {getStatusIcon(event.status)}
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                                        {event.message}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        {new Date(event.date).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Track;


