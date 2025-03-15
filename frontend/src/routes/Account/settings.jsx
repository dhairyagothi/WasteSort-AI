import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";

const Preferences = () => {
    const { theme, setTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("English");

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleNotificationChange = () => {
        setNotifications(!notifications);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-green-50 to-green-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-green-900 dark:to-green-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-green-800 dark:text-green-200 text-center 
                    bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Preferences
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                    Customize your experience according to your preferences.
                </p>

                {/* Theme Selection */}
                <div className="mb-8">
                    <label className="block text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                        Theme Selection:
                    </label>
                    <select
                        value={theme}
                        onChange={handleThemeChange}
                        className="w-full p-3 rounded-lg border border-green-300 dark:border-green-700 
                            bg-white dark:bg-green-900 text-green-800 dark:text-green-200"
                    >
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>
                </div>

                {/* Notifications */}
                <div className="mb-8">
                    <label className="block text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                        Notifications:
                    </label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={handleNotificationChange}
                            className="mr-2 w-5 h-5 text-green-600 bg-white border-green-300 dark:bg-green-900 dark:border-green-700"
                        />
                        <span className="text-lg text-gray-700 dark:text-gray-300">
                            Enable Notifications
                        </span>
                    </div>
                </div>

                {/* Language Selection */}
                <div className="mb-8">
                    <label className="block text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                        Language Selection:
                    </label>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="w-full p-3 rounded-lg border border-green-300 dark:border-green-700 
                            bg-white dark:bg-green-900 text-green-800 dark:text-green-200"
                    >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Gujarati">Gujarati</option>
                    </select>
                </div>

                {/* Save Preferences Button */}
                <div className="text-center">
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white 
                        rounded-lg shadow-md transition-all duration-300">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
