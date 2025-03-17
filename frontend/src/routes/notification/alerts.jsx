import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { BellIcon } from '@heroicons/react/24/outline';


const sampleAlerts = [
    {
        id: 1,
        type: "collection",
        title: "Today's Waste Collection Schedule",
        message: "Door-to-door collection timing: 8:00 AM - 10:00 AM. Please keep segregated waste ready.",
        date: new Date().toISOString(),
        area: "Sector 12",
        collectionType: "Dry and Wet Waste"
    },
    {
        id: 2,
        type: "educational",
        title: "Learn Waste Segregation",
        message: "Watch this 5-minute video guide on proper waste segregation techniques",
        date: new Date().toISOString(),
        mediaUrl: "https://example.com/segregation-video",
        mediaType: "video"
    },
    {
        id: 3,
        type: "reminder",
        title: "Weekly Composting Workshop",
        message: "Join us for a free composting workshop this Saturday at the Community Center",
        date: "2024-03-23",
        location: "Community Center, Sector 5"
    }
];

const Alerts = () => {
    const { theme } = useTheme();
    const [alerts, setAlerts] = useState(sampleAlerts);

    // Get current hour for greeting
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

    const getAlertStyle = (type) => {
        switch (type) {
            case "collection":
                return "bg-green-100 dark:bg-green-800";
            case "educational":
                return "bg-blue-100 dark:bg-blue-800";
            case "reminder":
                return "bg-yellow-100 dark:bg-yellow-800";
            default:
                return "bg-red-100 dark:bg-red-800";
        }
    };

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-green-50 to-blue-50 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                    {greeting}
                </h1>
                <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                    Notifications
                </h2>
                <div className="space-y-6">
                    {alerts.length > 0 ? (
                        alerts.map((alert) => (
                            <div 
                                key={alert.id} 
                                className={`p-6 ${getAlertStyle(alert.type)} rounded-lg shadow-lg`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                            {alert.title}
                                        </h2>
                                    </div>
                                    <span className="text-sm px-3 py-1 rounded-full bg-opacity-50 bg-white">
                                        {alert.type}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                                    {alert.message}
                                </p>
                                {alert.area && (
                                    <p className="text-md text-gray-600 dark:text-gray-400">
                                        Area: {alert.area}
                                    </p>
                                )}
                                {alert.mediaType === "video" && (
                                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                        Watch Video
                                    </button>
                                )}
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {new Date(alert.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                            <div className="flex items-center gap-3">
                                <BellIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                    No Updates Available
                                </h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alerts;
