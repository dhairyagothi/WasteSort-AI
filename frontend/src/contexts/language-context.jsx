import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    // Load language preference from localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem("suchita-language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Save language preference to localStorage
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("suchita-language", newLanguage);
    };

    // Translation function - placeholder for future implementation
    const t = (key, fallback = key) => {
        // This will be expanded with actual translations
        return fallback;
    };

    const value = {
        language,
        changeLanguage,
        t,
        supportedLanguages: [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
            { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
            { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
            { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
            { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
        ]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};