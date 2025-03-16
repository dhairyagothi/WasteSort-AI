import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const sampleMessages = [
    { id: 1, sender: "Municipal Office", subject: "Upcoming Waste Collection Schedule", message: "The new waste collection schedule for your area has been updated. Please check the details.", date: "2025-03-16" },
    { id: 2, sender: "Environmental Group", subject: "Join Our Clean-Up Drive", message: "We are organizing a community clean-up drive this Sunday. Participate and make a difference!", date: "2025-03-14" },
    { id: 3, sender: "Recycling Initiative", subject: "New E-Waste Collection Points", message: "New e-waste disposal centers have been set up in your locality. Find the nearest location.", date: "2025-03-12" }
];

const Messages = () => {
    const { theme } = useTheme();
    const [messages, setMessages] = useState(sampleMessages);

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-purple-50 to-purple-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-purple-900 dark:to-purple-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-purple-800 dark:text-purple-200 text-center 
                    bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Messages
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                    View messages from municipal authorities, environmental groups, and other organizations.
                </p>
                <div className="space-y-6">
                    {messages.length > 0 ? (
                        messages.map((msg) => (
                            <div key={msg.id} className="p-6 bg-purple-100 dark:bg-purple-800 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-100 mb-1">
                                    {msg.subject}
                                </h2>
                                <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
                                    <strong>From:</strong> {msg.sender}
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                                    {msg.message}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(msg.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 bg-purple-100 dark:bg-purple-800 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-100 mb-4">
                                No Messages Available
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;