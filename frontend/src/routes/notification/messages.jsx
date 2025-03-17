import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const sampleMessages = [
    { 
        id: 1, 
        sender: "Waste Management Department",
        subject: "Door-to-Door Collection Update",
        message: "Your area's waste collection vehicle will arrive between 9 AM - 11 AM. Please ensure proper segregation of wet and dry waste.",
        date: new Date().toISOString(),
        priority: "high"
    },
    { 
        id: 2, 
        sender: "Sanitation Department",
        subject: "Special Collection Drive",
        message: "Special collection drive for electronic waste this Sunday. Please keep your e-waste ready in separate bags.",
        date: "2024-03-24",
        priority: "medium"
    },
    { 
        id: 3, 
        sender: "Municipal Commissioner Office",
        subject: "New Waste Collection Guidelines",
        message: "Updated guidelines for waste segregation: Green bin - Kitchen waste, Blue bin - Dry waste, Red bin - Hazardous waste. Implementation starts next week.",
        date: "2024-03-22",
        priority: "high"
    },
    { 
        id: 4, 
        sender: "Waste Processing Center",
        subject: "Composting Initiative",
        message: "Free composting bins available for residential societies. Contact municipal office to register your society.",
        date: "2024-03-21",
        priority: "medium"
    }
];

const Messages = () => {
    const { theme } = useTheme();
    const [messages, setMessages] = useState(sampleMessages);

    const getPriorityStyle = (priority) => {
        switch (priority) {
            case "high":
                return "border-l-4 border-red-500";
            case "medium":
                return "border-l-4 border-yellow-500";
            default:
                return "border-l-4 border-green-500";
        }
    };

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-gray-50 to-gray-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    Municipal Updates
                </h1>
                <div className="space-y-4">
                    {messages.length > 0 ? (
                        messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ${getPriorityStyle(msg.priority)}`}
                            >
                                <div className="flex items-start gap-3">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                            {msg.subject}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            From: {msg.sender}
                                        </p>
                                        <p className="text-md text-gray-700 dark:text-gray-300">
                                            {msg.message}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                            {new Date(msg.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="flex items-center gap-3">
                                <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                                <p className="text-lg text-gray-800 dark:text-gray-200">
                                    No messages available
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;