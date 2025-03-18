import { useState } from 'react';
import { useTheme } from "@/hooks/use-theme";
import { 
    ChartBarIcon, 
    ArrowTrendingUpIcon,
    TrashIcon,
    ArrowUpIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline';

const Progress = () => {
    const { theme } = useTheme();
    
    // Sample data - replace with real data from your backend
    const [stats] = useState({
        totalWaste: {
            current: 2500,
            previous: 2800,
            unit: 'kg'
        },
        recyclingRate: {
            current: 65,
            previous: 58,
            unit: '%'
        },
        segregationCompliance: {
            current: 82,
            previous: 75,
            unit: '%'
        },
        compostGenerated: {
            current: 450,
            previous: 380,
            unit: 'kg'
        }
    });

    const calculateChange = (current, previous) => {
        const change = ((current - previous) / previous) * 100;
        return change.toFixed(1);
    };

    const getChangeColor = (change) => {
        return parseFloat(change) >= 0 ? 'text-green-500' : 'text-red-500';
    };

    const StatCard = ({ title, current, previous, unit, icon: Icon }) => {
        const change = calculateChange(current, previous);
        const changeColor = getChangeColor(change);
        
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className={`flex items-center ${changeColor}`}>
                        <span className="text-sm font-medium">{change}%</span>
                        <ArrowUpIcon className={`h-4 w-4 ml-1 ${parseFloat(change) >= 0 ? '' : 'rotate-180'}`} />
                    </div>
                </div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {title}
                </h3>
                <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {current}{unit}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        from {previous}{unit}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className={`min-h-screen p-8 bg-gray-50 dark:bg-gray-900`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Waste Management Progress
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Monthly statistics and improvements in waste management
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard 
                        title="Total Waste Collected"
                        {...stats.totalWaste}
                        icon={TrashIcon}
                    />
                    <StatCard 
                        title="Recycling Rate"
                        {...stats.recyclingRate}
                        icon={ArrowPathIcon}
                    />
                    <StatCard 
                        title="Segregation Compliance"
                        {...stats.segregationCompliance}
                        icon={ChartBarIcon}
                    />
                    <StatCard 
                        title="Compost Generated"
                        {...stats.compostGenerated}
                        icon={ArrowTrendingUpIcon}
                    />
                </div>

                {/* Monthly Progress Chart - Placeholder */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Monthly Progress
                    </h2>
                    <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        Chart placeholder - Add your preferred charting library here
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
