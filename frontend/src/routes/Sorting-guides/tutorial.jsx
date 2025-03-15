import { useTheme } from "@/hooks/use-theme";

const Tutorials = () => {
    const { theme } = useTheme();

    // Sample video data - replace with actual video IDs and content
    const videoCategories = [
        {
            title: "Organic Waste Handling",
            description: "Learn how to properly separate and manage kitchen waste for composting",
            videoId: "organivideo123",
            tips: [
                "Includes food scraps, yard waste, and biodegradable materials",
                "Use airtight containers to prevent odors",
                "Do not mix with plastic or glass"
            ]
        },
        {
            title: "Recyclables Sorting",
            description: "Proper separation of paper, plastic, metal and glass for effective recycling",
            videoId: "recyclevideo456",
            tips: [
                "Clean containers before disposal",
                "Remove labels and caps",
                "Check local recycling symbols"
            ]
        },
        {
            title: "Hazardous Waste Management",
            description: "Handling dangerous materials like batteries, chemicals, and medical waste",
            videoId: "hazardvideo789",
            tips: [
                "Never mix with regular trash",
                "Use protective gear when handling",
                "Utilize designated drop-off points"
            ]
        },
        {
            title: "E-Waste Disposal",
            description: "Proper recycling of electronic devices and components",
            videoId: "ewastevideo101",
            tips: [
                "Wipe personal data first",
                "Remove batteries separately",
                "Find certified e-waste centers"
            ]
        }
    ];

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-50
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800' : ''}`}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center 
                    bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent
                    dark:from-green-400 dark:to-emerald-300">
                    Smart Waste Sorting Guide
                </h1>
        
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                    Discover simple steps to sort waste like a pro! Learn how your daily efforts in separating 
                    recyclables can make a big difference in reducing pollution and conserving resources.
                </p>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videoCategories.map((category, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg 
                            hover:shadow-2xl transition-shadow duration-300 bg-white 
                            dark:bg-slate-800 dark:border dark:border-emerald-900/50">
                            <div className="p-6 bg-green-100 dark:bg-slate-700/30">
                                <h2 className="text-2xl font-semibold text-green-800 
                                    dark:text-emerald-400">
                                    {category.title}
                                </h2>
                                <p className="text-gray-600 dark:text-emerald-100 mt-2">
                                    {category.description}
                                </p>
                            </div>
                            
                            <div className="p-6">
                                <div className="aspect-video rounded-lg overflow-hidden 
                                    border border-green-100 dark:border-slate-700">
                                    <iframe
                                        className="min-h-[300px] bg-gray-100 dark:bg-slate-900"
                                        // ... rest of iframe props
                                    />
                                </div>
                                
                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-green-700 
                                        dark:text-emerald-300 mb-3">
                                        Key Practices:
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 
                                        dark:text-gray-200">
                                        {category.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start">
                                                <span className="text-green-500 mr-2 
                                                    dark:text-emerald-400">•</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        
                <div className="mt-12 text-center p-8 bg-green-50 rounded-xl
                    dark:bg-emerald-900/30 dark:border dark:border-emerald-800">
                    <h2 className="text-2xl font-bold text-green-800 
                        dark:text-emerald-300 mb-4">
                        Ready to Make a Difference?
                    </h2>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg
                        transition-all duration-300 dark:bg-emerald-600 dark:hover:bg-emerald-500
                        dark:text-white dark:hover:shadow-lg dark:hover:shadow-emerald-400/20">
                        Track My Impact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;