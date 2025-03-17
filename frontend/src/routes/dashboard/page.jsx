import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { overviewData } from "@/constants";
import { Footer } from "@/layouts/footer";
import wastesortimg from "@/assets/logo.svg";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className={`flex flex-col gap-y-4 p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"}`}>
            <h1 className="text-3xl font-bold text-green-700 dark:text-green-300">Dashboard</h1>
            <div className="flex flex-col items-center relative">
                
                <img src={wastesortimg} alt="Waste Sorting AI" className="w-80 h-auto " />
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 mt-4">What is Waste Sort AI?</h2>
                <p className="text-gray-700 dark:text-white text-center max-w-2xl mt-2">
                    Waste Sort AI is an advanced AI system designed to classify and manage waste efficiently.
                    It helps in identifying different types of waste and ensures proper recycling and disposal.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
                <Link to="/schedule" className={`card ${theme === "dark" ? "bg-gray-700  hover:bg-gray-600" : "bg-green-200 hover:bg-green-300"} transition p-4 text-green-400 rounded-lg shadow-md`}>
                    <p className="text-lg font-semibold text-green-800 dark:text-green-400">Waste Collection Schedule</p>
                </Link>
                <Link to="/real-time-tracking" className={`card ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-green-200 hover:bg-green-300"} transition p-4 rounded-lg shadow-md`}>
                    <p className="text-lg font-semibold text-green-800 dark:text-green-400">Real-Time Tracking</p>
                </Link>
                <Link to="/ai-verification" className={`card ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-green-200 hover:bg-green-300"} transition p-4 rounded-lg shadow-md`}>
                    <p className="text-lg font-semibold text-green-800 dark:text-green-400">AI Waste Verification</p>
                </Link>
                <Link to="/personal-reports" className={`card ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-green-200 hover:bg-green-300"} transition p-4 rounded-lg shadow-md`}>
                    <p className="text-lg font-semibold text-green-800 dark:text-green-400">Personal Reports</p>
                </Link>
            </div>
            <div className={`card col-span-1 md:col-span-2 lg:col-span-4 ${theme === "dark" ? "bg-gray-700 shadow-lg" : "bg-white shadow-lg"} p-4 rounded-lg mt-6`}>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400">Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={overviewData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} formatter={(value) => `${value}`} />
                        <XAxis dataKey="name" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickMargin={6} />
                        <YAxis dataKey="total" strokeWidth={0} stroke={theme === "light" ? "#475569" : "#94a3b8"} tickFormatter={(value) => `${value}`} tickMargin={6} />
                        <Area type="monotone" dataKey="total" stroke="#22c55e" fillOpacity={1} fill="url(#colorTotal)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
