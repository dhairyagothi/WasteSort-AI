// const Faq = () => {
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
    
const faqs = [
    {
        question: "What is Waste Sort AI?",
        answer: "Waste Sort AI is an AI-powered waste management platform that optimizes waste collection, improves segregation, and provides insights for authorities and the public."
    },
    {
        question: "How does AI classify waste?",
        answer: "Users can upload images of waste, and AI analyzes them to determine whether the waste is solid or liquid, providing classification results with confidence scores."
    },
    {
        question: "Can I track my waste collection schedule?",
        answer: "Yes, users can view real-time waste collection schedules and truck routes to avoid missed pickups."
    },
    {
        question: "How do I report a missed pickup?",
        answer: "You can report issues like missed collections or overflowing bins through the complaint system, which prioritizes cases using AI-based analysis."
    },
    {
        question: "Is there any reward system for proper waste segregation?",
        answer: "Yes! Users earn points for correctly segregating waste, and a leaderboard showcases top contributors."
    }
];
    
const FAQ = () => {
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState(null);
    
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-green-50 to-green-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-green-900 dark:to-green-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-green-800 dark:text-green-200 text-center 
                    bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                    Find answers to common questions about Waste Sort AI.
                </p>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {faq.question}
                                </h2>
                                <span className="text-green-600 dark:text-green-300 text-2xl">
                                    {openIndex === index ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
                                </span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-700 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
    
export default FAQ;
