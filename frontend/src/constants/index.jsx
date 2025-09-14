import { 
    Home, 
    ChartColumn, 
    Calendar, 
    MapPin, 
    Video, 
    Image, 
    AlertTriangle, 
    MessageSquare, 
    History, 
    FileText, 
    User, 
    Settings, 
    HelpCircle, 
    Mail 
} from "lucide-react";



export const navbarLinks = [
    {
        title: "Home / Dashboard",
        links: [
            {
                label: "Overview",
                icon: Home,
                path: "/",
            },
            {
                label: "My Progress",
                icon: ChartColumn,
                path: "/my-progress",
            },
        ],
    },
    {
        title: "Waste Collection",
        links: [
            {
                label: "Schedule",
                icon: Calendar,
                path: "/schedule",
            },
            {
                label: "Real-Time Tracking",
                icon: MapPin,
                path: "/real-time-tracking",
            },
        ],
    },
    {
        title: "Sorting Guides",
        links: [
            {
                label: "Tutorials",
                icon: Video,
                path: "/tutorials",
            },
            {
                label: "AI Verification",
                icon: Image,
                path: "/ai-verification",
            },
        ],
    },
    {
        title: "Complaints & Feedback",
        links: [
            {
                label: "New Complaint",
                icon: AlertTriangle,
                path: "/new-complaint",
            },
            {
                label: "Track Status",
                icon: FileText,
                path: "/track-status",
            },
        ],
    },
    {
        title: "Notifications",
        links: [
            {
                label: "Alerts",
                icon: AlertTriangle,
                path: "/alerts",
            },
            {
                label: "Messages",
                icon: MessageSquare,
                path: "/messages",
            },
        ],
    },
    {
        title: "History & Reports",
        links: [
            {
                label: "Pickup History",
                icon: History,
                path: "/pickup-history",
            },
            {
                label: "Personal Reports",
                icon: FileText,
                path: "/personal-reports",
            },
        ],
    },
    {
        title: "My Account",
        links: [
            {
                label: "Profile Settings",
                icon: User,
                path: "/profile-settings",
            },
            {
                label: "Preferences",
                icon: Settings,
                path: "/preferences",
            },
        ],
    },
    {
        title: "Help & Support",
        links: [
            {
                label: "FAQ",
                icon: HelpCircle,
                path: "/faq",
            },
            {
                label: "Contact Support",
                icon: Mail,
                path: "/contact-support",
            },
        ],
    },
];

export const overviewData = [
    { name: "Jan", total: 2400 },
    { name: "Feb", total: 2800 },
    { name: "Mar", total: 1900 },
    { name: "Apr", total: 5200 },
    { name: "May", total: 3100 },
    { name: "Jun", total: 7800 },
    { name: "Jul", total: 3500 },
    { name: "Aug", total: 6300 },
    { name: "Sep", total: 2900 },
    { name: "Oct", total: 5100 },
    { name: "Nov", total: 2200 },
    { name: "Dec", total: 3400 },
];

// Suchita-specific constants
export const PROJECT_INFO = {
    name: "Suchita",
    fullName: "Sustainable Urban Classification Hub Integrated with Technology and AI",
    description: "A multilingual AI-powered web platform designed for citizens and municipalities to streamline waste management",
    features: {
        citizen: [
            "AI Verification of waste sorting",
            "Educational resources and tutorials",
            "Real-time pickup tracking with GPS",
            "Issue reporting and feedback system",
            "Multilingual platform support"
        ],
        municipal: [
            "Centralized dashboard for operations",
            "AI-driven route optimization",
            "Automated data logging",
            "Real-time monitoring and reports",
            "Complaint management system"
        ]
    }
};

export const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
];


