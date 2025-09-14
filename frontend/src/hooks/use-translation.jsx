import { useLanguage } from "@/contexts/language-context";

export const useTranslation = () => {
    const { language, changeLanguage, t, supportedLanguages } = useLanguage();

    return {
        language,
        changeLanguage,
        t,
        supportedLanguages,
        // Helper function to get current language info
        getCurrentLanguage: () => {
            return supportedLanguages.find(lang => lang.code === language) || supportedLanguages[0];
        }
    };
};