import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "@/hooks/use-translation";

import { Bell, ChevronsLeft, Moon, Search, Sun, Globe } from "lucide-react";

import profileImg from "@/assets/profile-image.jpg";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const { language, changeLanguage, supportedLanguages, getCurrentLanguage } = useTranslation();
    const { user, signout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                    <Search
                        size={20}
                        className="text-slate-300"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                {/* Language Selector */}
                <div className="relative">
                    <select
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="btn-ghost size-10 text-sm bg-transparent border-none outline-none cursor-pointer appearance-none text-center"
                        title="Select Language"
                    >
                        {supportedLanguages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.flag}
                            </option>
                        ))}
                    </select>
                </div>
                
                <button
                    className="btn-ghost size-10"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <Sun
                        size={20}
                        className="dark:hidden"
                    />
                    <Moon
                        size={20}
                        className="hidden dark:block"
                    />
                </button>
                <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button>
                {!user ? (
                    <div className="flex items-center gap-x-2">
                        <button onClick={() => navigate('/sign-in')} className="px-3 py-1 rounded-md text-sm bg-transparent border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900">Sign In</button>
                        <button onClick={() => navigate('/sign-up')} className="px-3 py-1 rounded-md text-sm bg-green-600 text-white hover:bg-green-700">Sign Up</button>
                    </div>
                ) : (
                    <div className="flex items-center gap-x-3">
                        <button className="size-10 overflow-hidden rounded-full" onClick={() => navigate('/profile-settings')}>
                            <img src={profileImg} alt="profile image" className="size-full object-cover" />
                        </button>
                        <button onClick={() => { signout(); navigate('/'); }} className="px-3 py-1 rounded-md text-sm bg-red-500 text-white hover:bg-red-600">Sign Out</button>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
