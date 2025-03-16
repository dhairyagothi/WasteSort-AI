import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const sampleAlerts = [
    { id: 1, title: "Hazardous Waste Alert", message: "Improper disposal of chemical waste reported in Vadodara. Avoid the affected area.", date: "2025-03-16" },
    { id: 2, title: "Air Quality Warning", message: "High pollution levels detected in Rajkot. Limit outdoor activities and wear masks.", date: "2025-03-15" },
    { id: 3, title: "Water Contamination Alert", message: "Water contamination detected in Bhavnagar. Boil water before use.", date: "2025-03-12" }
];

const Alerts = () => {
    const { theme } = useTheme();
    const [alerts, setAlerts] = useState(sampleAlerts);

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-red-50 to-red-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-red-900 dark:to-red-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-red-800 dark:text-red-200 text-center 
                    bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Alerts
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                    Stay informed about urgent environmental and safety alerts in your area.
                </p>
                <div className="space-y-6">
                    {alerts.length > 0 ? (
                        alerts.map((alert) => (
                            <div key={alert.id} className="p-6 bg-red-100 dark:bg-red-800 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-red-800 dark:text-red-100 mb-2">
                                    {alert.title}
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                                    {alert.message}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(alert.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 bg-red-100 dark:bg-red-800 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-100 mb-4">
                                No Alerts Available
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alerts;
